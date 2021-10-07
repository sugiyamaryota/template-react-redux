# react templete

# 環境
以下のnodeのバージョンで開発しています。
```
v12.13.0
```

# パッケージ

```
npm i webpack webpack-cli webpack-dev-server fork-ts-checker-webpack-plugin dotenv dotenv-expand
npm i html-webpack-plugin babel-loader style-loader css-loader svg-url-loader url-loader source-map-loader
npm i @babel/core @babel/plugin-external-helpers @babel/preset-env @babel/preset-react @babel/preset-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm i react react-dom react-scripts react-router-dom connected-react-router redux @reduxjs/toolkit
npm i typescript @types/react @types/react-dom @types/react-router-dom @types/react-redux @types/node
npm i history
npm i prettier eslint-plugin-prettier
```

# 備考

## react-hot-loaderからreact-refreshへの移行について
https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#coming-from-react-hot-loader

```
yarn add react-refresh
yarn add @babel/core babel-loader @pmmmwh/react-refresh-webpack-plugin -D
yarn remove react-hot-loader @hot-loader/react-dom
```

## dotenv-webpackの問題について
https://github.com/mrsteele/dotenv-webpack/issues/377

webpackの構成を以下で検討

https://webpack.js.org/guides/production/

## TypeScriptについて

以下のエラーが発生しました。
`Property 'userInfo' does not exist on type 'IntrinsicAttributes`
`Prop does not exist on type 'PropsWithChildren...'`
presenter側で、propsを定義した場合、型情報と一致する必要があります。例えば、logic側で定義したstateを渡してしまうと、上記のエラーが発生します。型で定義した粒度でpropsも定義する必要があります。

## historyについて

https://github.com/supasate/connected-react-router/issues/312#issuecomment-647082777
## Jestについて

スナップショットテスト(UIテスト)
https://jestjs.io/ja/docs/tutorial-react#create-react-app%E3%82%92%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97


https://media-massage.net/blog/ts-jest%E3%81%8C%E5%A4%96%E9%83%A8%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%82%92import%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AE%E5%AF%BE%E5%87%A6%E6%96%B9/

testファイルではmoduleをimportする際、相対パス指定でないと、以下のエラーが出る。
```
Cannot find module 'hoge' from 'src/__test__/hoge.test.ts'
```
https://stackoverflow.com/questions/44349403/jest-error-test-suite-failed-to-run-how-to-solve