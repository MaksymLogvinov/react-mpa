
const path = require('path');
const getFilesFromDir = require('./config/files');
const PAGE_DIR = path.join('src', 'apps', path.sep);

const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlFiles = getFilesFromDir(PAGE_DIR, ['.html']);
const htmlPlugins = htmlFiles.map(filePath => {
  const fileName = filePath.replace(PAGE_DIR, '');
  return new HtmlWebPackPlugin({
    chunks: [fileName.replace(path.extname(fileName), ''), 'vendor'],
    template: filePath,
    filename: fileName
  });
});

const entry = getFilesFromDir(PAGE_DIR, ['.tsx']).reduce((obj, filePath) => {
  const entryChunkName = filePath.replace(path.extname(filePath), '').replace(PAGE_DIR, '');
  obj[entryChunkName] = `./${filePath}`;
  return obj;
}, {}); 

module.exports = {
  entry: entry,
  plugins: [...htmlPlugins],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src', 'components'),
      stores: path.resolve(__dirname, 'src', 'stores')
    },
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    }
  }
};
