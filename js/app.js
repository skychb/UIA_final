require.config({
  baseUrl : "js/",
  paths : {
    "jquery" : "../node_modules/jquery/dist/jquery.min",
    "handlebars" : "../node_modules/handlebars/dist/handlebars.min",
    "eventEmitter" : "../bower_components/eventEmitter/EventEmitter.min",
  }
});

require([
  "jquery",
  "handlebars",
  "component",
  "task"
], function($, Handlebars, pn, TODO){
  $(document).ready(function(){
    TODO.init();
    var pagination = new pn(".pagination");
    pagination.on("change", function(e){
      TODO.load(e.index, e.max);
      console.log(e.index);
    });
  });
});
