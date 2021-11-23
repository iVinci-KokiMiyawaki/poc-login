# 開発環境

### Amplify CLIのインストール

https://docs.amplify.aws/cli/start/install/

### `yarn`

package.jsonに記載されたモジュールをインストール

###  `amplify init`

Amplify初期設定（既存の環境を利用）
実行することで `src` 配下に `aws-exports.js` が作成される。

``` sh
$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Do you want to use an existing environment? Yes
? Choose the environment you would like to use: dev
? Choose your default editor: Visual Studio Code
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use default
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything

```

###  `amplify status`

初期設定を行うと下記の状態になる


```sh

$ amplify status

    Current Environment: dev
    
┌──────────┬──────────────────┬───────────┬───────────────────┐
│ Category │ Resource name    │ Operation │ Provider plugin   │
├──────────┼──────────────────┼───────────┼───────────────────┤
│ Auth     │ pocloginxxxxxxxx │ No Change │ awscloudformation │
├──────────┼──────────────────┼───────────┼───────────────────┤
│ Hosting  │ amplifyhosting   │ No Change │ awscloudformation │
├──────────┼──────────────────┼───────────┼───────────────────┤
│ Function │ pocUserList      │ No Change │ awscloudformation │
├──────────┼──────────────────┼───────────┼───────────────────┤
│ Api      │ pocapi           │ No Change │ awscloudformation │
└──────────┴──────────────────┴───────────┴───────────────────┘

REST API endpoint: https://xxxxxxxxxx.amazonaws.com/dev

Amplify hosting urls: 
┌──────────────┬───────────────────────────────────────────┐
│ FrontEnd Env │ Domain                                    │
├──────────────┼───────────────────────────────────────────┤
│ dev          │ https://dev.xxxxxxxxxxxxxx.amplifyapp.com │
└──────────────┴───────────────────────────────────────────┘

```

###  `amplify publish`

ホスティングの開始

### `yarn start`

ローカル環境で立ち上げる場合 [http://localhost:3000](http://localhost:3000)
