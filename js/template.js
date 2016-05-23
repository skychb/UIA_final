define([], function(){

  return {
	"todo" : '<li data-id={{todo-id}} class={{#if completed}}"completed"{{/if}}><div class="view"><input class="toggle" type="checkbox"{{#if completed}}checked{{/if}}><label>{{inputValue}}</label><button class="destroy"></button></div><input class="edit" value={{inputValue}}></li>',
	};
});
