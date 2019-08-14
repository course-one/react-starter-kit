const path = require( 'path' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

/*-------------------------------------------------*/

module.exports = {

    // webpack optimization mode
    mode: ( 'development' === process.env.NODE_ENV ? 'development' : 'production' ),

    // entry files
    entry: [
        './src/scss/app.style.scss', // stylesheet
        './src/index.js', // react
    ],

    // output files and chunks
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name].js'
    },

    // module/loaders configuration
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ]
            }
        ]
    },

    // webpack plugins
    plugins: [

        // extract css to external stylesheet file
        new MiniCssExtractPlugin( {
            filename: 'styles.css'
        } ),

        // prepare HTML file with assets
        new HTMLWebpackPlugin( {
            filename: 'index.html',
            template: path.resolve( __dirname, 'src/index.html' )
        } ),

        // copy static files from `src` to `dist`
        new CopyWebpackPlugin( [
            { from: path.resolve( __dirname, 'src/assets' ), to: path.resolve( __dirname, 'dist/assets' ) }
        ] )
    ],

    // resolve files configuration
    resolve: {
        
        // file extensions
        extensions: [ '.js', '.jsx', '.scss' ],

        // import alias
        alias: {
            'components': path.resolve( __dirname, 'src/js/components' ),
            'hocs': path.resolve( __dirname, 'src/js/hocs' ),
            'utils': path.resolve( __dirname, 'src/js/utils' ),
            'services': path.resolve( __dirname, 'src/js/services' ),

            // scss global import alias in `.scss` file using `@import '~scss-global';`
            'scss-global': path.resolve( __dirname, 'src/scss/global/index.scss' )
        }
    },

    // webpack optimizations
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                
                vendor: {
                    chunks: 'all', // both : consider sync + async chunks for evaluation
                    name: 'vendor', // name of chunk file
                    test: /node_modules/, // test regular expression
                }
            }
        }
    },

    // development server configuration
    devServer: {
        port: 8088
    },

    // generate source map
    devtool: 'source-map'

};