module.exports = {
  name: 'VBNET',
  nameMatchers: ['.vb'],
  singleLineComment: ["'"],
  multiLineComment: [{
    start: "'/*",
    middle: "'  ",
    end: "'*/"
  }]
}
