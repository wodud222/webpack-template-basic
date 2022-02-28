// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


// export
module.exports = {
 // parcel index.html
 // 파일을 읽어들이기 시작하는 진입점 설정
 entry: './js/main.js',
 output: {
   // 따로 지정하지 않아도 기본값으로 생성
   // path: path.resolve(__dirname, 'dist')
   // filename: 'main.js',
    clean: true
 },

 module: {
    rules: [
        {
            test: /\.s?css$/,
            use: [
                'style-loader', // html으로 삽입을 하는 역할
                'css-loader', // js에서 css를 해석하기 위한 패키지
                'postcss-loader', //
                'sass-loader'
            ]
        },
        {
            test: /\.js$/,
            use: [
                'babel-loader'
            ]
        }
    ]
 },
 
 // 번들링 후 결과물의 처리방식 등 다양한 플러그인들을 설정
 plugins: [
     new HtmlPlugin({
         template: './index.html'
     }),
     new CopyPlugin({
         patterns: [
             {from: 'static'}
         ]
     })
 ],

 devServer: {
     host: 'localhost'
 }
}