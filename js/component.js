/*
Spec
 - Feature
 	- 생성자
 		- 첫번째 인자로 엘리먼트, 두번째 인자로 옵션을 받는다.
 		- 첫번째 인자로 들어온 엘리먼트의 checked속성을 확인하여 적용한다.
 	- init
 		- input의 부모에 있는 span에 checkbox-applied클래스를 추가한다.
 		- span의 자식노드로 있는 span에 click이벤트를 할당한다.
 	- click
 		- click핸들러로 클릭하면 input의 checked속성을 변경한다
 		- span엘리먼트에 checkbox-checked을 토글링한다.
 		- change이벤트가 발생한다.(Event 부분의 객체를 인자로 전달한다.)
 	- on
 		- 이벤트을 추가한다.
	- off
		- 이벤트을 해제한다
 - Event
	- `change` 이벤트 제공 : 상태가 변경하면 발생하는 이벤트
		- arguments로 `checked`(checked상태), `target`(해당 input엘리먼트)이 들어가 있는 객체를 반환한다.
		```js
		{
			"checked" : true, //checked된 상태
			"target" : input // checked된 엘리먼트
		}
		```
 - Method
	- `isChecked` 메서드 제공 : input의 checked된 상태를 true/false로 알 수 있는 메서드
*/
define(["jquery", "eventEmitter"], function($, EventEmitter){
  function pn(selector){
    this.ee = new EventEmitter();
    this.ele = $(selector);
    this.selected;
    this.prev;
    this.next;
    this.index;
    this.init();
  }

  pn.prototype.init = function(){
    // this._drawButtons();
    this._setPosition();
    this.ele.on('click', 'a', $.proxy(this, "_move"));

  }

  pn.prototype._move = function(e){
    this._controlSelected(e);
    this._controlDisabled();
    this.ee.emit("change", {
      "index" : this.index,
      "max" : 3
    })
  }

  // pn.prototype._drawButtons = function(){
  //   var numberButtons = [];
  //   numberButtons.push('<li class="prev"><a href="#"><</a></li>');
  //   for(var i=1; i<=5; ++i){
  //     numberButtons.push('<li><a href="#">'+i+'</a></li>');
  //   }
  //   numberButtons.push('<li class="next"><a href="#">></a></li>');
  //   this.ele.append(numberButtons);
  // }

  pn.prototype._setPosition = function(){
    this.selected = $('.selected');
    this.prev = $('.prev');
    this.next = $('.next');
  }

  pn.prototype._controlSelected = function(e){
    this.selected.removeClass("selected");
    console.log(e.target);
    console.log(this.selected.text());
    var $target = $(e.target).closest("li");
    if($target.hasClass("prev")){
      this.selected = this.selected.prev();
    }else if($target.hasClass("next")){
      this.selected = this.selected.next();
    }else{
      this.selected = $target;
    }
    this.selected.addClass('selected');
  }

  pn.prototype._controlDisabled = function(){
    this.index = this.selected.find("a").text();
    if(this.index == 1){
      this.prev.addClass("disabled");
      this.next.removeClass("disabled");
    }else if(this.index == 5){
      this.next.addClass("disabled");
      this.prev.removeClass("disabled");
    }else{
      this.next.removeClass("disabled");
      this.prev.removeClass("disabled");
    }
  }

  // pn.prototype._getIndex = function(){
  //   var $selectedIndex = $selected.find("a").text();
  //   var exactIndex = 3 * ($selectedIndex - 1);
  //   ajax.get(exactIndex).then(function(data){
  //     $(data).each(function(id, inputValue){
  //       $('.todo-list').append($(template_up({"inputValue":inputValue.todo,
  //         "todo-id":inputValue.id,
  //         "completed":inputValue.completed})));
  //     });
  //   });
  // }

  pn.prototype.on = function(eventName, fp){
  		this.ee.addListener(eventName,fp);
  	}

  pn.prototype.of = function(eventName, fp){
  		this.ee.removeListener(eventName, fp);
  	}
  return pn;
});
