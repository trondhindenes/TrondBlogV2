const Schema = require('@sanity/schema');
const blockTools = require('@sanity/block-tools');
const readline = require('readline');
const fs = require('fs');
const lineReader = require('line-reader');


let importFile = '../util_scripts/import.json';
let finalFile = '../util_scripts/import_final.json';
let out_items = [];

var fileWriter = fs.createWriteStream(finalFile, {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

const blockContentType = defaultSchema.get('post')
  .fields.find(field => field.name === 'body').type

lineReader.eachLine(importFile, function(line) {
    let line_obj = JSON.parse(line)
    line_obj['body'] = blockTools.htmlToBlocks(line_obj.orig_body, blockContentType)
    delete line_obj.orig_body
    fileWriter(JSON.stringify(line_obj))
});
