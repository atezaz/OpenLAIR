
    $(document).ready(function(){
      //  $("#myTourBtn").hide();
       // if($('span').is('.tool_Home')){      //  Not run the demo if it is not home page
        //  setTimeout(function(){  myTour(); }, 1500);
        //  $("#myTourBtn").show();
       // }
        $('#myTourBtn').click(myTour);
      });
  
      function myTour() {
        var introguide = introJs();
        // var startbtn   = $('#startdemotour');
        introguide.setOptions({
          steps: [
          {
            element: '.step0',
            intro: 'This guided tour will explain how Learning Analytics indicators archive OpenLAIR can be used. <br> You can Exit the tour anytime you want.',
            position: 'bottom'
          },
          {
            element: '.stepDefine',
            intro: 'You can CLICK here anytime for the definition of each filter item. i.e. <br> - Learning Events <br> - Learning Activites <br> - Indicators <br> - Metrics <br>',
            position: 'bottom'
          },
          {
            element: '.step1',
            intro: 'Step 1: Here you can select your Learning Events or Objectives.',
            position: 'right'
          },
          {
            element: '.step2',
            intro: 'Step 2: Here you can select your Learning Activites.',
            position: 'right'
          },
          {
            element: '.step3',
            intro: 'Step 3 (Optional): If you are looking for any specific Indicator, here you can search by indicator.',
            position: 'right'
          },
          {
            element: document.querySelector('.highlightIndicators .step4'),
            intro: 'Step 4: Here you can select (x) the Indicator(s) you want.',
            position: 'bottom'
          },
          {
            element: document.querySelector('.highlightIndicators .stepViewMetrics'),
            intro: 'If you want to see the Metrics CLICK on the Indicator. <br> Each indicator is followed by its reference "[No.]"',
            position: 'right'
          },
          {
            element: '.stepMetrics',
            intro: 'Step 5 (Optional): If you are looking for any specific Metric, here you can search by metrics.',
            position: 'right'
          },
          {
            element: '.stepVisualize',
            intro: "Step 6: After selecting the indicator(s), CLICK here to VISUALIZE the chosen indicator(s). This will give you an idea of what type of visualization type one can use. <br> You can also download the Dashboard and use it as a mockup (e.g., for meetings/presentations). <br> <br> NOTE: The selected indicators that are similar will be plotted in a single visualization type. <br> <br> For example the selected indicators 'Predict Student Grades [115]' and 'Predict Final Grade [119]' will be plotted in a single visualization type.",
            position: 'bottom'
          },
          {
            element: '.stepDownload',
            intro: "In case you want the selected indicator(s) in a JSON (.json) format/file. CLICK here to DOWNLOAD the Indicator(s) as JSON along with their Metrics.",
            position: 'bottom'
          },
          {
            element: '.stepDownloadText',
            intro: "In case you want the selected indicator(s) in a TEXT (.txt) format/file. CLICK here to DOWNLOAD the Indicator(s) as TEXT along with their Metrics.",
            position: 'bottom'
          },
          {
            element: '.stepReset',
            intro: "In case you want to Deselect the selected indicator(s) and RESET the filters. CLICK here to RESET.",
            position: 'bottom'
          },        
          {
            element: '.stepReferences',
            intro: "Here you can see the References for your selected Indicators.",
            position: 'left'
          },
          {
            element: '.stepStartTour',
            intro: "If you want to have this TOUR again you can start here anytime.  <br> <br> &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;HAVE FUN!",
            position: 'left'
          }
          ]
        });
        introguide.start();
      }