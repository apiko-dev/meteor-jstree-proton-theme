Package.describe({
  name: 'jss:jstree-proton-theme',
  summary: 'Bootstrap theme for jss:jstree.',
  version: '3.1.1',
  git: 'https://github.com/JSSolutions/meteor-jstree-proton-theme'
});

Package.onUse(function(api) {

  api.use('twbs:bootstrap@3.3.5', 'client');

  api.addFiles([
    'theme/style.css'
  ], 'client');

  api.addFiles([
    'theme/32px.png',
    'theme/30px.png',
    'theme/throbber.gif'
  ], 'client', {isAsset: true});

});