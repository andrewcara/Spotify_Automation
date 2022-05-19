var fs = require("fs");
var text = fs.readFileSync("./track_ids.txt").toString('utf-8');
const arr = text.split(/\r?\n/);

new_arr = arr.map(i => 'spotify:track:' + i);
