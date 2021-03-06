// markdownText: String markdown with math text
// title: String, title of html page.
module.exports = function(markdownText, title, options) {
  const path = require('path');
  const markdown2html = require('./markdown-parser.js');
  return '<!DOCTYPE html><html><head><title>' + title + '</title>' + '<meta charset="utf-8">' +
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
    '<meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<link rel="stylesheet" href="' + path.resolve(__dirname, '../node_modules/github-markdown-css/github-markdown.css') + '">' +
    '<link rel="stylesheet" href="' + path.resolve(__dirname, '../node_modules/highlight.js/styles/tomorrow.css') + '">' +
    '<style>.markdown-body {box-sizing: border-box;min-width: 200px;margin: 0 auto;padding: 45px;}</style>' +
    '<script type="text/javascript" async src="' + path.resolve(__dirname, '../node_modules/mathjax/MathJax.js') + '"></script>' +
    '<script type="text/javascript" async src="' + path.resolve(__dirname, '../node_modules/mathjax/config/TeX-MML-AM_HTMLorMML-full.js') + '"></script>' +

    //'<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML"></script>' +

    //'<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML-full"></script>'+
    //'<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"></script>'+
    //'<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/config/default.js"></script>'+
    //'<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/config/AM_HTMLorMML-full.js"></script>'+
    //'<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/config/TeX-AMS-MML_HTMLorMML-full.js"></script>'+
    //'<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/config/TeX-MML-AM_HTMLorMML-full.js"></script>'+
    '</head><body class="markdown-body">' + markdown2html(markdownText,options) + '</body></html>';
};

/*
<script src='http://cdn.mathjax.org/mathjax/latest/MathJax.js' type='text/javascript'>
    MathJax.Hub.Config({
        HTML: ["input/TeX","output/HTML-CSS"],
        TeX: { extensions: ["AMSmath.js","AMSsymbols.js"],
               equationNumbers: { autoNumber: "AMS" } },
        extensions: ["tex2jax.js"],
        jax: ["input/TeX","output/HTML-CSS"],
        tex2jax: { inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                   displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
                   processEscapes: true },
        "HTML-CSS": { availableFonts: ["TeX"],
                      linebreaks: { automatic: true } }
    });
  </script>
  */
