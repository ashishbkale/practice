import $ from 'jquery';


var footer =require('./templates/footer.handlebars')
var source   = $("#entry-template").html();
var template = Handlebars.compile(source)
console.log(footer)