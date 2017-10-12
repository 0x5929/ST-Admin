(function() {

	'use strict';
//	COULD I POTENTIALLY LOAD ALL THE NECESSARY LIBS, EVEN IF THEY WERE LOADED BEFORE, THIS WAY ITS CLEAR WHAT THIS MODULE NEEDS?!?

	//loading library
	var angular = require('angular');
	//loading value
	var studentValue = require('./studentValue.js');

	//defining value, and exporting it to app.js
	module.exports = angular.module('myApp.admin')
						.value('studentValue', studentValue);



}) ();