'use strict';

module.exports = {
	library_name : 'ng-bootcust',
	app: {
		title: 'ng-bootcust',
		description: 'Gallery of examples for angular-bootstrap web project',
		keywords: 'angular, bootstrap'
	},

	port: 3000,
	publicStaticContentDir : './public',
	assets : ['./assets/css.js', './assets/javascripts.js','./assets/less.js'],
	templateEngine: 'swig',

	templatesDir : 'public/'
};
