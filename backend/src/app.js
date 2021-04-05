import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import data from './models/data';


var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var mongoURL = process.env["MONGO_URL"] || "mongodb://localhost:27017/"
const PORT = process.env.PORT || 3001;
const BASE_ROUTE = "openlair";
//var url = "mongodb://localhost:27017/";

const app=express();
const router=express.Router();
app.use(cors());
app.use(bodyParser.json());


MongoClient.connect(mongoURL, {useUnifiedTopology: true}, function(err, db) {
  console.log("Mongodb connected successfully");
  if (err) throw err;
  var   db=db.db("mydb1");  // database name


/////////////Instruction for data display/////////////////

router.route('/display/data').get((req,res)=>{
 
  db.collection("treeStructure").find({}).toArray((err,data)=>{
    if(err)
    console.log(err);
    else
    res.json(data);
   
  })
 
});

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


router.route('/add/data').post((req,res)=>{
  
if(req.body.LearningEvents=="Create"){
db.collection("treeStructure").updateOne({LearningEvents:"Create"},
 
    {$push:{LearningActivities:{Name:req.body.LearningActivities.Name,
    indicator:req.body.LearningActivities.indicator.indicatorName,
   }}},
    {upsert: true},
    {new: false},
    
     
    function(err, res) {
   
      if (err) throw err;
         console.log("1 document inserted");
         
  });
}
else if(req.body.LearningEvents=="Explore"){
  db.collection("treeStructure").updateOne({LearningEvents:"Explore"},
    
  {$push:{LearningActivities:{Name:req.body.LearningActivities.Name,
    indicator:req.body.LearningActivities.indicator.indicatorName,
   }}},
    {upsert: true},
    {new: false},
    
      {upsert: true},
      function(err, res) {
     
        if (err) throw err;
           
           
    });
  }
  else if(req.body.LearningEvents=="Practice"){
    db.collection("treeStructure").updateOne({LearningEvents:"Practice"},
      
    {$push:{LearningActivities:{Name:req.body.LearningActivities.Name,
      indicator:req.body.LearningActivities.indicator.indicatorName,
     }}},
      {upsert: true},
      {new: false},
      
        {upsert: true},
        function(err, res) {
       
          if (err) throw err;
             
             
      });
    }
    else if(req.body.LearningEvents=="Imitate"){
      db.collection("treeStructure").updateOne({LearningEvents:"Imitate"},
        
      {$push:{LearningActivities:{Name:req.body.LearningActivities.Name,
        indicator:req.body.LearningActivities.indicator.indicatorName,
       }}},
        {upsert: true},
        {new: false},
        
          {upsert: true},
          function(err, res) {
         
            if (err) throw err;
               
               
        });
      }
      else if(req.body.LearningEvents=="Receive"){
        db.collection("treeStructure").updateOne({LearningEvents:"Receive"},
          
        {$push:{LearningActivities:{Name:req.body.LearningActivities.Name,
          indicator:req.body.LearningActivities.indicator.indicatorName,
         }}},
          {upsert: true},
          {new: false},
          
            {upsert: true},
            function(err, res) {
           
              if (err) throw err;
                 
                 
          });
        }
        else if(req.body.LearningEvents=="Debate"){
          db.collection("treeStructure").updateOne({LearningEvents:"Debate"},
            
          {$push:{LearningActivities:{Name:req.body.LearningActivities.Name,
            indicator:req.body.LearningActivities.indicator.indicatorName,
           }}},
            {upsert: true},
            {new: false},
            
              {upsert: true},
              function(err, res) {
             
                if (err) throw err;
                   
                   
            });
          }
          else if(req.body.LearningEvents=="Meta-learn"){
            db.collection("treeStructure").updateOne({LearningEvents:"Meta-learn"},
              
            {$push:{LearningActivities:{Name:req.body.LearningActivities.Name,
              indicator:req.body.LearningActivities.indicator.indicatorName,
             }}},
              {upsert: true},
              {new: false},
              
                {upsert: true},
                function(err, res) {
               
                  if (err) throw err;
                     
                     
              });
            }
            else if(req.body.LearningEvents=="Experiment"){
              db.collection("treeStructure").updateOne({LearningEvents:"Experiment"},
                
              {$push:{LearningActivities:{Name:req.body.LearningActivities.Name,
                indicator:req.body.LearningActivities.indicator.indicatorName,
               }}},
                {upsert: true},
                {new: false},
                
                  {upsert: true},
                  function(err, res) {
                 
                    if (err) throw err;
                       
                       
                });
              }
});
});

 //app.get('/',(req,res)=> res.send('hello world'));
app.use('/', router);
app.listen(3001,()=>console.log("Express server is running on port 3001"));