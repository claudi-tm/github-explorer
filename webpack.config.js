const { dirname } = require("path");
const path = require("path");

module.exports = {
	// diz qual é a pagina principal da noss aplicação
	// entry: "src/index.jsx",
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirnamem, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};
