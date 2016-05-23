define(["jquery", "handlebars", "template", "ajax"], function($, Handlebars, Template, ajax){
  var base = "http://128.199.76.9:8002/skychb";
  var cache = {};
  var template_up = Handlebars.compile(Template.todo);
  function init(){
    loadFirst();
  }
  function loadFirst(){
    ajax.getFirst().then(function(data){
      $(data).each(function(id, inputValue){
        $('.todo-list').append($(template_up({"inputValue":inputValue.todo,
          "todo-id":inputValue.id,
          "completed":inputValue.completed})));
      });
      $('.pagination li:first').next().addClass("selected");

    });
  }

  function load(page, limit){
    $('.todo-list').html("");
    var rightPage = 3 * (page -1);
    ajax.get(rightPage, limit).then(function(data){
      $(data).each(function(id, inputValue){
        $('.todo-list').append($(template_up({"inputValue":inputValue.todo,
          "todo-id":inputValue.id,
          "completed":inputValue.completed})));
      });
    })
  }

  function caching(index, max){
    var cache = {};
    var url = base+"/page?start="+index+"&limit=1";
    $.get(url)
    .done(TodoLists){
      cache[TodoLists.id] = $(template_up({"inputValue":inputValue.todo,
        "todo-id":inputValue.id,
        "completed":inputValue.completed}));
    }
  }

  return{
    "load" : load,
    "init" : init
  }
});
