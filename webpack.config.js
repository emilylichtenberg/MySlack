const path = require('path');

module.exports = {
	context: __dirname,
	entry: ["regenerator-runtime/runtime.js", './frontend/slack.jsx'],
	output: {
		path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/env', '@babel/react' ]
					}
				}
			}, 
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
				  {
					loader: 'url-loader',
					options: {
					  limit: 8192,
					}
				  },
				],
			   type: 'javascript/auto'
			  }
		]
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: [ '.js', '.jsx', '*' ]
	}
};