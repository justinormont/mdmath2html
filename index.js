var fs = require("fs");
var path = require("path");
var program = require('commander')
  .version(require('./package.json').version)
  .usage('[options] <file ...>')
  .option('-t, --title', 'Title of file')
  .option('-f, --force', 'Ignore file format')
  .parse(process.argv);
var build = require('./build.js');

if (program.title) console.log('Html title:', program.title);
for (var i = 0, f = program.args.length; i < f; i++) {
  render(program.args[i]);
}

function render(mdFile){
  var file = path.parse(mdFile);
  if ( /^.(md(tex)?|mark(down|math))$/i.test(file.ext) || program.force ){
  console.log('Markdown File %s to %s', file.base, file.name + '.html');
  fs.readFile(mdFile, function(err, data) {
    if (err) throw err;
    fs.writeFile(file.name + '.html', build(data.toString(), program.title || 'markdown to html'), 'utf8');
  });
  } else {
    throw new Error('This is not markdown file.\n You can use option -f');
  }
}

// Error
process.on('uncaughtException', function(err) {
  console.error("Exception", err.stack);
});
