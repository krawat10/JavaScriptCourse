var div = "<div>hello</div>\n<p>elo</p>\n<span>Welcome</span>";
var regex = new RegExp();

regex = /<(div|p|span)>(.+)<\/\1>/igm; //'\1' to odwołanie do 1 grupy czyli '\1' == '(div|p|span)'
console.log(div.replace(regex, "$2"))
// hello
// elo
// Welcome