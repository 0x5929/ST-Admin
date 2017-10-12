
	'use strict';

//	github.com/preboot/angularjs-webpack/blob/master/webpack.config.js for reference

	//	loading necessary modules
		
	var webpack = require('webpack');
	var path    = require('path');	//necesasry?


	//	exporting the config obj
	module.exports = {

			devtool: '#inline-source-map',	//	this creates a source map to console errs

			entry: {	//	this is where webpack will start doing its magic
				app: './src/app/app.js',	//	entry file
				// vendor: ['angular']		//	framework
			},
			output: {
				//	options related to how webpack emits results 


				path: path.resolve(__dirname, '/dist'),	//needs to be an absolute path
				//	the target directory for all output files

				// filename: "bundle.js",	//string
				filename: "[name].js"	//for mulitple entry points (not our case for SPA)
			},
			module: {
				//	configuration regarding modules
				rules: [
					//	rules for modules (configure loaders, parser options, etc.)
					{test: /\.html$/, use: ["html-loader"]},
					{test: /\.js$/, use: ["val-loader"], exclude: [path.resolve(__dirname, 'node_modules/')]},
					// {test: /\.css$/, use: "style-loader!css-loader"}
				]
			},
			plugins: [
				new webpack.HotModuleReplacementPlugin()	//default with webpack
			],

			devServer: {
				proxy: {	//	proxy URLS to backend development server
					'/api': 'http://localhost:8080',
					contentBase: path.join(__dirname, 'public'),
					historyApiFallback: true,	//	true for index.html upon 404, object for mulitple paths
					hot: true, 	//	hot module replacement. Depends on HotmOduleReaplacementPlugin
					https: false,	//	true for self-signed, object for certificate authority
					noInfo: true	//	only errors and warnings on hot reload
				}
			}

		};

		

		// //set environment 
		// /*
		//  * Env
		//  * Use npm lifecyle event to identify the environment
		// */

		// var ENV = process.npm_lifecycle_event;
		// var isTest = ENV === 'test' || ENV === 'test-watch';	//wtf is test watch
		// var isProd = ENV === 'build';


		


