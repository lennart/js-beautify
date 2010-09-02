#!/usr/bin/env node
var sys = require('sys');
var js = require('./beautify.module');

function beautify() {
  stdin = process.openStdin();
  stdin.setEncoding('utf8');
  stdin.on('data', function(term) {
    sys.print(js.beautify(term));
  });
}

beautify();
