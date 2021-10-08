# Overview

Redux を使用したテンプレートを作成しています。

# Environment

## node version

以下の node のバージョンで開発しています。

```
v12.13.0
```

# Package

webpack5 系を使用した場合、dotenv で error が出るようなので、4 系を使用しています。

## dependencies

```shell
# webpack
yarn add webpack webpack-cli webpack-dev-server

# webpack/loader
yarn add html-webpack-plugin fork-ts-checker-webpack-plugin babel-loader style-loader css-loader svg-url-loader url-loader source-map-loader

# webpack/env
yarn add dotenv dotenv-expand

# webpack/babel・typescript
yarn add @babel/core @babel/plugin-external-helpers @babel/preset-env @babel/preset-react @babel/preset-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser

# react
yarn add react react-dom react-scripts react-router-dom connected-react-router redux @reduxjs/toolkit

# typescript
yarn add typescript @types/react @types/react-dom @types/react-router-dom @types/react-redux @types/node

# history
yarn add history

# prettier
yarn add prettier eslint-plugin-prettier
```

## devDependencies

```shell
# webpack
yarn add -D webpack-merge

# react-refresh
yarn add -D react-refresh @pmmmwh/react-refresh-webpack-plugin

# jest
yarn add -D jest ts-jest react-test-renderer @types/jest @types/react-test-renderer babel-jest

# huskyrc・lint-staged
yarn add -D husky lint-stage
```

# Issue

## react-refresh について

`react-hot-loader`から`react-refresh`への移行について、下記に記載があります。
https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#coming-from-react-hot-loader

```
yarn add react-refresh
yarn add @babel/core babel-loader @pmmmwh/react-refresh-webpack-plugin -D
yarn remove react-hot-loader @hot-loader/react-dom
```

## dotenv-webpack の問題について

https://github.com/mrsteele/dotenv-webpack/issues/377

webpack の構成を以下で検討

https://webpack.js.org/guides/production/

## TypeScript について

以下のエラーが発生しました。

```
Property 'userInfo' does not exist on type 'IntrinsicAttributes
...
Prop does not exist on type 'PropsWithChildren...'
```

presenter 側で、props を定義した場合、型情報と一致する必要があります。
例えば、logic 側で定義した state を渡してしまうと、上記のエラーが発生します。
型で定義した粒度で props も定義する必要があります。

## history について

https://github.com/supasate/connected-react-router/issues/312#issuecomment-647082777

## Jest について

スナップショットテスト(UI テスト)

https://jestjs.io/ja/docs/tutorial-react#create-react-app%E3%82%92%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97

https://media-massage.net/blog/ts-jest%E3%81%8C%E5%A4%96%E9%83%A8%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%82%92import%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AE%E5%AF%BE%E5%87%A6%E6%96%B9/

jest.config.js の transform で指定した拡張子がありませんでした。
そのため、import を使用していた場合にエラーが発生していました。
テスト用のファイルを ts にしてそのエラーは解決しました。

test ファイルでは module を import する際、相対パス指定でないと、以下のエラーが出ます。

```
Cannot find module 'hoge' from 'src/__test__/hoge.test.ts'
```

https://stackoverflow.com/questions/44349403/jest-error-test-suite-failed-to-run-how-to-solve
