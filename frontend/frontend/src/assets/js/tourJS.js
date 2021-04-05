
    $(document).ready(function(){
      //  $("#myTourBtn").hide();
       // if($('span').is('.OpenLAIR_Home')){      //  Not run the demo if it is not home page
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
            intro: 'This guided tour will explain how the OpenLAIR can be used. <br> You can Exit the tour anytime you want.',
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
            position: 'bottom'
          },
          {
            element: '.step3',
            intro: 'Step 3 (Optional): If you are looking for any specific Indicator, here you can search by indicator.',
            position: 'right'
          },
          {
            element: document.querySelector('.highlightIndicators .step4'),
            intro: 'Step 4: Here you can select (x) the Indicators you want.',
            position: 'bottom'
          },
          {
            element: document.querySelector('.highlightIndicators .stepViewMetrics'),
            intro: 'Step 5: If you want to see the Metrics/Measurements CLICK on the Indicator.',
            position: 'right'
          },
          {
            element: '.stepMetrics',
            intro: 'Step 6 (Optional): If you are looking for any specific Metric or Measurement, here you can search by that.',
            position: 'right'
          },
          {
            element: '.stepDownload',
            intro: "Step 7: If you want to DOWNLOAD the selected Indicators, here you can download them as JSON along with their Metrics.",
            position: 'bottom'
          },
          {
            element: '.stepReferences',
            intro: "Here you can see the References for your selected Indicators.",
            position: 'left'
          },
          {
            element: '.stepStartTour',
            intro: "If you want to have this TOUR again you can start here anytime.    HAVE FUN!",
            position: 'left'
          }
          ]
        });
        introguide.start();
      }