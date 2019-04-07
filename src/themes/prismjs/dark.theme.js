const style = `
/*
 * ------------------------------------
 * Prism.js dark theme
 */

code[class*="language-"],
pre.ag-paragraph {
  color: #f8f8f2;
  /*font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;*/
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  overflow: visible;
}

/* Code Fence */
pre.ag-paragraph {
  padding: 1em;
  margin: 1em 0;
  border-radius: 0.3em;
}

/* Inline Code */
:not(pre) > code[class*="language-"],
pre.ag-paragraph {
  background: #272822;
}

/* Inline Code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #f8f8f2;
}

.namespace {
  opacity: .7;
}
 
.token.property,
.token.tag,
.token.constant,
.token.symbol {
  color: #f92672;
}
 
.token.boolean,
.token.number {
  color: #ae81ff;
}
 
.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin {
  color: #a6e22e;
}

.token.inserted {
  color: #22863a;
  background: #f0fff4;
}

.token.deleted {
  color: #b31d28;
  background: #ffeef0;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
  color: #e6db74;
}
 
.token.keyword {
  color: #66d9ef;
}
 
.token.regex,
.token.important {
  color: #fd971f;
}
 
.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}
`

export default style
