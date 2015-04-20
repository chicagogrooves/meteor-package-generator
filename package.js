Package.describe({
 name: "deanius:package-kitchen",
 summary: "Source for http://package-kitchen.meteor.com - not for installation",
 version: "1.1.0",
 git: "https://github.com/chicagogrooves/meteor-package-kitchen",
 debugOnly: true
});

Npm.depends({
  "unzip": "0.1.11",
  "streamifier": "0.1.1"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.2");
  api.use(["meteor", "spacebars", "templating", "underscore", "iron:router"]);
  api.use("deanius:worksheet@1.0.0");
  api.use("deanius:promise");
  api.use("mrt:session-amplify");
  api.addFiles("server/methods.js", ["server"]);
  api.addFiles("shared/jszip.js", ["client", "server"]);
  api.addFiles("client/templates/code.html", ["client"]);
  api.addFiles("client/templates/mocha.html", ["client"]);
  api.addFiles("client/templates/packageJs.html", ["client"]);
  api.addFiles("client/templates/readme.html", ["client"]);
  api.addFiles("client/templates/tinytest.html", ["client"]);
  api.addFiles("client/allFiles.html", ["client"]);
  api.addFiles("client/flair.html", ["client"]);
  api.addFiles("client/kitchen.html", ["client"]);
  api.addFiles("client/package.html", ["client"]);
  api.addFiles("client/packageModel.js", ["client"]);
  api.addFiles("client/routes.js", ["client"])
  api.addFiles("client/zip.js", ["client"]);
  api.addFiles("client/helpers.js", ["client"]);

  // we don't actually need to export, globals will leak!!
  //api.exports("packageModel");
});
