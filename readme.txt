 JS Beautifier
---------------

  ...or, more specifically, all of the code powering jsbeautifier.org.

  This little beautifier will reformat and reindent bookmarklets, ugly
  javascript, unpack scripts packed by the popular Dean Edward's packer,
  as well as deobfuscate scripts processed by javascriptobfuscator.com.

  You are free to use this in any way you want, in case you find this
  useful or working for you.

  To beautify from the command-line you can use provided beautify-cl.js
  script, using Rhino javascript engine. See the file contents for the
  details.
  



  Written by Einar Lielmanis, <einar@jsbeautifier.org>

  Thanks to Jason Diamond, Patrick Hof, Nochum Sossonko, Andreas Schneider,
  Dave Vasilevsky, Vital Batmanov, Ron Baldwin, Gabriel Harrison and others.

  Fork Note: I forked this repository and added a node.js shell script and made 
  a module out of beautify.js (beautify.module.js)
  You can use it for example to beautify js code in vim.

  For installation just do

  $ install -m755 beautify.module.js /usr/local/bin/
  $ install -m755 beautify.node.js /usr/local/bin/

  Now you can filter the current buffer through beautify.js by invoking

  %!beautify.node.js

  Enjoy
