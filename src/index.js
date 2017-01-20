"use strict";

let appId = process.env.APP_ID || undefined;

const Alexa = require("alexa-sdk");

let handlers = {
  "LaunchRequest": function() {
    // 
  }
};

exports.handler = function(event, context) {
  let alexa = Alexa.handler(event, context);
  alexa.appId = appId;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
