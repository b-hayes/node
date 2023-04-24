module.exports = {
    //this is the default but were setting it anyway.
    entry: './src/index.js',    //you can also use and  object with multiple entry points
    output: {
        //this is the interesting part of my config. Normally output will go to a dist folder,
        // but I am shoving into the public html of the repo itself because I want to commit the file for deploy hooks.
        filename: '../public/main.js'
    },
    //modules called, loaders are plugins written for webpack to transform file content.
    module: {
        //one or more rules to match file types to loaders
        rules: [
            {
                test: /\.scss$/,
                use: [
                    //this will minify and combine the css into the main.js file.
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        static: {
            directory: './public'
        },
        port: 9999
    }
}