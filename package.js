Package.describe({
  summary: "Unmodified Handlebars 1.0.0, for both client and server",
  version: "1.0.1",
  git: "https://github.com/pfafman/meteor-plain-handlebars.git"
});


Package._transitional_registerBuildPlugin({
  name: "compilePlain",
  use: ['coffeescript'],
  sources: [
    'compile-plain.coffee'
  ]
});


Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.export('PlainHandlebars');
  api.export('PlainTemplate');
  api.add_files(
    [
      'handlebars.js',
      'template.js'
    ],
    ['client', 'server']
  );
});


Package.on_test(function (api) {
  api.use([
    'coffeescript',
    'plain-handlebars',
    'tinytest'
  ]);
  api.add_files(
    [
      'test.plain',
      'plain-tests.coffee'
    ],
    ['client', 'server']
  );
});
