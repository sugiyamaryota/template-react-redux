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

以下のエラーが発生しました。webpack の devserver の設定で、hot プロパティを true にすると解決しました。
https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/169#issuecomment-672240627

```
[ReactRefreshPlugin] Hot Module Replacement (HMR) is not enabled! React Refresh requires HMR to function properly.
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

スナップショットテスト(UI テスト)とは。

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

## storybook

storybook の導入を行ったところ、下記に遭遇しました。
https://github.com/prettier/eslint-plugin-prettier/issues/253

`eslint-config-prettier`をインストールしたところ、下記に遭遇しました。

```
Error: "prettier/@typescript-eslint" has been merged into "prettier" in eslint-config-prettier 8.0.0.
```

`eslintrc.json`の extends で該当の記述を削除しました。

```
Definition for rule 'import/extensions' was not found
```

https://stackoverflow.com/questions/68878189/eslint-definition-for-rule-import-extensions-was-not-found

```
Definition for rule 'jsx-a11y/label-has-associated-control' was not found  jsx-a11y/label-has-associated-control
```

router を使用している components を stories に追加すると、以下のエラーが出ました。

```
"Error: Invariant failed: You should not use <Link> outside a <Router>"
```

https://github.com/storybookjs/storybook/issues/8892
https://qiita.com/daikiojm/items/da3299d7b90d38194d85

storiesOf と CSF の記述の差が分かりませんでした。下記を参考にしました。

https://awesome-linus.com/2020/03/03/change-storybook-to-csf/

### storybook と jest

リグレッションテスト（Regression Test）とは。
動作していた機能に不具合が起きていないか確認するためのテスト

以下のエラーが出ました。mock ファイルの作成と jest.config.js の rootDir から src を除外して、相対パス指定をしなおすと、こちらのエラーは解決しました。
https://jestjs.io/docs/webpack
https://github.com/kulshekhar/ts-jest/issues/364#issuecomment-611741215

```
SyntaxError: Unexpected token '.'
```

https://jestjs.io/docs/configuration#testenvironment-string

下記エラーが出ました。jsdom の環境で動作させる必要があるので、下記をコメントアウトで追加します。

```
renders primary button with default args

The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.
Consider using the "jsdom" test environment.
```

```
/**
 * @jest-environment jsdom
 */
```

## babel.config.js

以下のエラーが起きていました。tsconfig の incluede に該当のパスを追加と、.eslintrc の env に node を設定したところ、解決しました。

```
parsing error parseroptions.project has been set for @typescript-eslint/parser
```

https://www.jacobparis.com/blog/bug-parser-options
https://chaika.hatenablog.com/entry/2020/04/13/130000
