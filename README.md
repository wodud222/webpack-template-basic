# 1.기본 패키지모듈 설치

```
npm i -D webpack webpack-cli webpack-dev-server@next
```

# 2.package.json 개발서버 설정

```
  "devDependencies": {
    "webpack": "^5.69.1", // 번들러가 동작하기 위한 핵심 패키지
    "webpack-cli": "^4.9.2", // CLI(command line interface)를 지원해주는 패키지
    "webpack-dev-server": "^4.0.0-rc.1" // dev명령으로 개발서버를 바로 적용하기

  "scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production" // 개발모드인지 제품모드인지 구별
  },
```

# 3. webpack.config.js 구성요소 정리 (node.js 환경)

```
// import
const path = require('path')

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
 }   
}
```

# 4. dist-html 연결 플러그인 패키지
```
npm i -D html-webpack-plugin

<-- webpack.config.js에 설정 -->
 plugins: [
     new HtmlPlugin({
         temlplate: './index.html'
     })
 ]
```

# 5. static 정적파일 연결

```
npm i -D copy-webpack-plugin

<-- webpack.config.js에 설정>
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
```

# 6. 추가 module 설치

```
npm i -D css-loader style-loader

 module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader', // html으로 삽입을 하는 역할
                'css-loader' // js에서 css를 해석하기 위한 패키지
            ]
        }
    ]
 },
```

# 7. SCSS 설치
```
npm i -D sass-loader sass
```

# 8. Autoprefixer 설치(PostCSS)

```
npm i -D postcss autoprefixer postcss-loader

<-- package.json -->

  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]


<-- .postcssrc.js -->  

module.exports = {
    plugins: [
        require('atoprefixer')
    ]
}
```

# 9. babel 설치

```
01.

npm i @babel/core @babel/preset-env @babel/plugin-transform-runtime

02. 
<-- babelrc.js -->

module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
        ['@babel/plugin-transform-runtime']
    ]
}

03. 
npm i -D babel-loader

<-- webpack.config.js > module -->

     test: /\.js$/,
     use: [
         'babel-loader'
     ]

```