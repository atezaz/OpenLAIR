

export default function(Highcharts) {
    // Add the nodes option through an event call. We want to start with the parent
   // item and apply separate colors to each child element, then the same color to
   // grandchildren.
   Highcharts.addEvent(
     Highcharts.Series,
     'afterSetOptions',
     function(e) {
       var colors = Highcharts.getOptions().colors,
         i = 0,
         nodes = {};
   
       if (
         this instanceof Highcharts.seriesTypes.networkgraph &&
         e.options.id === 'lang-tree'
       ) {
         e.options.data.forEach(function(link) {
   
           if (link[0] === 'User 1') {
             nodes['User 1'] = {
               id: 'User 1',
               marker: {
                 radius: 20
               }
             };
             nodes[link[1]] = {
               id: link[1],
               marker: {
                 radius: 10
               },
               color: colors[i++]
             };
           } else if (nodes[link[0]] && nodes[link[0]].color) {
             nodes[link[1]] = {
               id: link[1],
               color: nodes[link[0]].color,
             };
           }
         });
   
         e.options.nodes = Object.keys(nodes).map(function(id) {
           return nodes[id];
         });
       }
     }
   );
   }