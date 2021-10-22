"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _data = _interopRequireDefault(require("./models/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

 var PdfReader = require('pdfreader').PdfReader;
import data from './models/data';
const stopWord = require('stopword');

const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './upload' });

var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;

var mongoURL = process.env["MONGO_URL"] || "mongodb://localhost:27017/";
const PORT = process.env.PORT || 3001;
console.log(PORT)
const BASE_ROUTE = "openlair"; //var url = "mongodb://localhost:27017/";

const app = (0, _express.default)();

const router = _express.default.Router();

app.use((0, _cors.default)());
app.use(_bodyParser.default.json()); // app.use((req, res, next)=>{  
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(  
//     "Access-Control-Allow-Headers",  
//     "Origin, X-Requested-With, Content-Type, Accept");
//     res.setHeader("Access-Control-Allow-Methods",  
//     "GET, POST, PATCH, DELETE, OPTIONS");
//   next();  
// }); 

MongoClient.connect(mongoURL, {useUnifiedTopology: true}, function(err, db) {
  console.log("Mongodb connected successfully");
  if (err) throw err;
  var   db=db.db("mydb1");  // database name


  /////////////  Authentication /////////////////

  router.route('/login').post((req, res) => {
    console.log('abc')
    var username = req.body.username;
    var password = req.body.password;

    db.collection("login").findOne({
      username: username,
      password: password
    }, function (err, user) {
      if (err) {
        console.log(err);
      }
      if (!user) {
        console.log('User not found');
        return res.send('User not found')
        // return res.status(404).send();
      }

      return res.status(200).send(user);
    })
  })

/////////////Instruction for data display/////////////////

router.route('/display/data').get((req,res)=>{
 
  db.collection("treeStructure").find({}).toArray((err,data)=>{
    if(err)
    console.log(err);
    else
    res.json(data);
   
  })
 
});


////////////////Read text from pdf //////////////

 var fs=require('fs');
var PDFParser=require('pdf-parse');

const pdffile=fs.readFileSync('./upload/gAAg-dKy8uBJZvuK0VkiW8iX.pdf');

////////////// data cleaning ///////////////////

PDFParser(pdffile).then(function(data){
  //console.log(data.numpages)
  var extractData=data.text;
  var removepunctuation = extractData.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  var removeSquBrac= removepunctuation.replace(/[0-9]/g, '');
  var words_act = removeSquBrac.split(/\W+/);
  const removeStopwords_act = stopWord.removeStopwords(words_act)
 // console.log(removeStopwords_act)
})

/////////////Instruction for search data/////////////////

router.route('/getsearchmetrics').post((req,res)=>{
  const metrics_name = req.body.search; 
  

  db.collection("treeStructure").find({'LearningActivities.indicator.metrics':  new RegExp(metrics_name)}).toArray(function(error, documents) {
    if (err) throw error;

    res.send(documents);
});
});
 

router.route('/getsearchindicator').post((req,res)=>{
  const search_ind = req.body.search; 


  db.collection("treeStructure").find({'LearningActivities.indicator.indicatorName':  { $regex : new RegExp(search_ind, "i") }}).toArray(function(error, result) {
    if (err) throw error;

    res.send(result);
});
});
 

/////////////Instruction for data addition/////////////////


 /////////////Instruction for data addition/////////////////


  router.route('/add/data').post((req, res) => {
   
    let event = req.body.LearningEvents;
    let act = req.body.LearningActivities.Name;
    let ind = req.body.LearningActivities.indicator;
     
 if (req.body.LearningEvents == "Create") {
      db.collection("treeStructure").find({
        'LearningActivities.Name': act
      }).toArray(function (error, filterAct) {
        if (!error) {
          if (filterAct) {


            let position = filterAct[0].LearningActivities.findIndex(item => item.Name == act);

            const str1 = 'LearningActivities';
            const learningAct = str1.concat(".", position, ".", "indicator");
            db.collection("treeStructure").updateOne({
                LearningEvents: "Create"
              }, {
                $push: {
                  [learningAct]: {
                    "indicatorName": ind[0].indicatorName,
                    "metrics": ind[0].metrics
                  }
                }
              }, {
                upsert: false,
                multi: true
              },

              function (err, res) {

                if (err) throw err;

              });
          }

        }
      });

    } else if (req.body.LearningEvents == "Explore") {
      db.collection("treeStructure").find({
        'LearningActivities.Name': act
      }).toArray(function (error, filterAct) {
        if (!error) {
          if (filterAct) {
            let position = filterAct[0].LearningActivities.findIndex(item => item.Name == act);
            const str1 = 'LearningActivities';
            const learningAct = str1.concat(".", position, ".", "indicator");
            db.collection("treeStructure").updateOne({
                LearningEvents: "Explore"

              }, {
                $push: {
                  [learningAct]: {
                    "indicatorName": ind[0].indicatorName,
                    "metrics": ind[0].metrics
                  }
                }
              }, {
                upsert: false,
                multi: true
              },
              function (err, res) {
                if (err) throw err;
              });
          }

        }
      });
      // db.collection("treeStructure").updateOne({
      //     LearningEvents: "Explore"
      //   },

      //   {
      //     $push: {
      //       LearningActivities: {
      //         Name: req.body.LearningActivities.Name,
      //         indicator: req.body.LearningActivities.indicator.indicatorName,
      //       }
      //     }
      //   }, {
      //     upsert: true
      //   }, {
      //     new: false
      //   },

      //   function (err, res) {

      //     if (err) throw err;


      //   });
    } else if (req.body.LearningEvents == "Practice") {
       db.collection("treeStructure").find({
        'LearningActivities.Name': act
      }).toArray(function (error, filterAct) {
        if (!error) {
          if (filterAct) {
            let position = filterAct[0].LearningActivities.findIndex(item => item.Name == act);
            const str1 = 'LearningActivities';
            const learningAct = str1.concat(".", position, ".", "indicator");
            db.collection("treeStructure").updateOne({
                LearningEvents: "Practice"

              }, {
                $push: {
                  [learningAct]: {
                    "indicatorName": ind[0].indicatorName,
                    "metrics": ind[0].metrics
                  }
                }
              }, {
                upsert: false,
                multi: true
              },
              function (err, res) {
                if (err) throw err;
              });
          }

        }
      });
    } else if (req.body.LearningEvents == "Imitate") {
      db.collection("treeStructure").find({
        'LearningActivities.Name': act
      }).toArray(function (error, filterAct) {
        if (!error) {
          if (filterAct) {
            let position = filterAct[0].LearningActivities.findIndex(item => item.Name == act);
            const str1 = 'LearningActivities';
            const learningAct = str1.concat(".", position, ".", "indicator");
            db.collection("treeStructure").updateOne({
                LearningEvents: "Imitate"

              }, {
                $push: {
                  [learningAct]: {
                    "indicatorName": ind[0].indicatorName,
                    "metrics": ind[0].metrics
                  }
                }
              }, {
                upsert: false,
                multi: true
              },
              function (err, res) {
                if (err) throw err;
              });
          }

        }
      });
    } else if (req.body.LearningEvents == "Receive") {
     db.collection("treeStructure").find({
        'LearningActivities.Name': act
      }).toArray(function (error, filterAct) {
        if (!error) {
          if (filterAct) {
            let position = filterAct[0].LearningActivities.findIndex(item => item.Name == act);
            const str1 = 'LearningActivities';
            const learningAct = str1.concat(".", position, ".", "indicator");
            db.collection("treeStructure").updateOne({
                LearningEvents: "Receive"

              }, {
                $push: {
                  [learningAct]: {
                    "indicatorName": ind[0].indicatorName,
                    "metrics": ind[0].metrics
                  }
                }
              }, {
                upsert: false,
                multi: true
              },
              function (err, res) {
                if (err) throw err;
              });
          }

        }
      });
    } else if (req.body.LearningEvents == "Debate") {
      db.collection("treeStructure").find({
        'LearningActivities.Name': act
      }).toArray(function (error, filterAct) {
        if (!error) {
          if (filterAct) {
            let position = filterAct[0].LearningActivities.findIndex(item => item.Name == act);
            const str1 = 'LearningActivities';
            const learningAct = str1.concat(".", position, ".", "indicator");
            db.collection("treeStructure").updateOne({
                LearningEvents: "Debate"

              }, {
                $push: {
                  [learningAct]: {
                    "indicatorName": ind[0].indicatorName,
                    "metrics": ind[0].metrics
                  }
                }
              }, {
                upsert: false,
                multi: true
              },
              function (err, res) {
                if (err) throw err;
              });
          }

        }
      });
    } else if (req.body.LearningEvents == "Meta-learn") {
      db.collection("treeStructure").find({
        'LearningActivities.Name': act
      }).toArray(function (error, filterAct) {
        if (!error) {
          if (filterAct) {
            let position = filterAct[0].LearningActivities.findIndex(item => item.Name == act);
            const str1 = 'LearningActivities';
            const learningAct = str1.concat(".", position, ".", "indicator");
            db.collection("treeStructure").updateOne({
                LearningEvents: "Meta-learn"

              }, {
                $push: {
                  [learningAct]: {
                    "indicatorName": ind[0].indicatorName,
                    "metrics": ind[0].metrics
                  }
                }
              }, {
                upsert: false,
                multi: true
              },
              function (err, res) {
                if (err) throw err;
              });
          }

        }
      });
    } else if (req.body.LearningEvents == "Experiment") {
      db.collection("treeStructure").find({
        'LearningActivities.Name': act
      }).toArray(function (error, filterAct) {
        if (!error) {
          if (filterAct) {
            let position = filterAct[0].LearningActivities.findIndex(item => item.Name == act);
            const str1 = 'LearningActivities';
            const learningAct = str1.concat(".", position, ".", "indicator");
            db.collection("treeStructure").updateOne({
                LearningEvents: "Experiment"

              }, {
                $push: {
                  [learningAct]: {
                    "indicatorName": ind[0].indicatorName,
                    "metrics": ind[0].metrics
                  }
                }
              }, {
                upsert: false,
                multi: true
              },
              function (err, res) {
                if (err) throw err;
              });
          }

        }
      });
    }
  });
});

app.get("/" + BASE_ROUTE, (req,res)=> res.send('hello world'));
app.use("/" + BASE_ROUTE, router);

app.listen(PORT, () => console.log(`Express server is running on port ${PORT}`)
);