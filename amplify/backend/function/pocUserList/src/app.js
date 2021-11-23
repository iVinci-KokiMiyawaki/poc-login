/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * ユーザ一覧を取得するAPI *
 **********************/

app.get('/items', function(req, res) {
  // Add your code here
  res.json({
    success: 'get call succeed!',
    url: req.url,
    list: [{
      id: 1,
      user_id: 'test1',
      name: 'name1',
      message: 'Test Message1.',
      created_at: '2021-11-21T08:00:00.000Z',
    },
    {
      id: 2,
      user_id: 'test2',
      name: 'name2',
      message: 'Test Message2.',
      created_at: '2021-11-22T12:00:00.000Z',
    },
    {
      id: 3,
      user_id: 'test3',
      name: 'name3',
      message: 'Test Message3.',
      created_at: '2021-11-22T12:00:00.000Z',
    }]
  });
});

/****************************
* Example post method *
****************************/

app.post('/items', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
