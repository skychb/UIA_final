define(["jquery", "handlebars", "template"], function($, Handlebars, Template){
  var template_up = Handlebars.compile(Template.todo);
  var URL = "http://128.199.76.9:8002/skychb";
    function get(index, limit){
      var dfd = $.Deferred();
      $.get(URL+"/page?start="+index+"&limit="+limit)
      .done(function(TodoLists){
        var item = TodoLists;
        dfd.resolve(item);
      });
      return dfd.promise();
    };

    function getFirst(){
      var dfd = $.Deferred();
      $.get(URL+"/page?start=0&limit=3")
      .done(function(TodoLists){
        var item = TodoLists;
        dfd.resolve(item);
      });
      return dfd.promise();
    }
    return {
      "get" : get,
      "getFirst" : getFirst
    }
});
