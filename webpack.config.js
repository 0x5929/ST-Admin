
	'use strict';


	//	loading necessary modules
		
	var webpack = require('webpack');
	var path    = require('path');	

	//	exporting the config obj
	module.exports = {

			target: 'web',
			devtool: 'inline-source-map',	//	this creates a source map to console errs

			entry: {	//	this is where webpack will start doing its magic
				angular: path.resolve(__dirname, './src/lib/js/angular.js'),
				app: path.resolve(__dirname, './src/app/app.js')	//	entry file for application js bundle file

			},
			output: {
				//	options related to how webpack emits results 


				path: path.resolve(__dirname, '/dist'),	//needs to be an absolute path
				//	the target directory for all output files

				// filename: "bundle.js",	//string
				filename: "[name].bundle.js",	//for mulitple entry points (not our case for SPA)
				
				//	webpack needs to make requests (chunk loading and or HMR) to WDS 
				publicPath: "/dist/"	//	todo: needs more specific URL
			},
			module: {
				//	configuration regarding modules
				rules: [
					//	rules for modules (configure loaders, parser options, etc.)
					{test: /\.html$/, use: "html-loader"},
					{test: /\.js$/, use: "val-loader", exclude: [path.resolve(__dirname, 'node_modules/')]},
					{test: require.resolve('angular'), use: ["expose-loader?angular!expose-loader?window" ,"imports-loader?this=>window"]},
					{test: require.resolve('jquery'), use: ["expose-loader?$!expose-loader?jQuery" ,"imports-loader?$=jquery"]},
					{test: /\.css$/, use: "style-loader!css-loader"}
				]
			},
			plugins: [
				new webpack.HotModuleReplacementPlugin(),	//default with webpack
				// new webpack.noErrorsPlugin()
				new webpack.ProvidePlugin({
					$              : 'jquery',
					jQuery         : 'jquery',
					'window.jQuery': 'jquery',
					// 'angular'	   : 'angular',
					'window'	   : 'window'
				}),
				new webpack.optimize.CommonsChunkPlugin({
					name: 'angular',
					filename: 'angular.bundle.js'
				}),
				new webpack.DefinePlugin({
					'window': {}
				})
			],
			resolve: {
				//	todo: enter all the things such as extensions, and paths 
				//	we'd like to resolve to be shorter to type
			},

			devServer: {
				proxy: {	//	proxy URLS to backend development server
					"**": {	//	** means all paths
						target: "http://localhost:8080",
						pathRewrite: {"^/api": ""}
					},
				},
				contentBase: path.join(__dirname, '/src/public/'),
				historyApiFallback: true,	//	true for index.html upon 404, object for mulitple paths
				hot: true, 	//	hot module replacement. Depends on HotmOduleReaplacementPlugin
				https: false,	//	true for self-signed, object for certificate authority
				noInfo: true,	//	only errors and warnings on hot reload
				port: 9090,	//	the port that webpack dev server will listen on
				publicPath: "http://localhost:9090/src/"
			}

		};

		



