define([
    'jquery',
    'qunit',
    '../mockjs/component',
],function( $, QUnit, pn){

	function run(){
		var page;

		QUnit.module("final",{
			beforeEach:function(){
				page = new pn('.pagination');
			}
		});

		QUnit.test( "init test", function( assert ) {
      assert.ok($('.pagination li').first().hasClass("prev"));
		});

    QUnit.test("click test", function( assert ){
      $('.pagination li').first().next().find('a').click();
      assert.ok($('.pagination li').first().next().hasClass("selected"));
    })
    // QUnit.test("click Test", function ( assert ){
    //   $('.pagination li').first().next().trigger("click");
    //   assert.ok($('.pagination li').first().next().hasClass("selected"));
    // }



	}

	return {run:run};
})
