// thanks @samuelmr

var current_url = 'http://pubtrans.it/hsl/disrupt/current';
var count_url = 'http://pubtrans.it/hsl/disrupt/';
var line_url = 'http://pubtrans.it/hsl/disrupt/line/';

// get current disruptios
var xhr1 = new XMLHttpRequest();
xhr1.onreadystatechange = handleCurrentDisruptions;
xhr1.open("GET", current_url, false);
xhr1.send();
function handleCurrentDisruptions() {
 if ((this.readyState == 4) && (this.status == 200)) {
  var res = JSON.parse(this.responseText);
  // do what you want with the res object
  for (var i=0; i<res.length; i++) {
   var dis = res[i];
   alert(dis['line'] + ': ' + dis['fi']);
  }
 }
}

// get disruption counts grouped by lines
var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = handleDisruptCounts;
xhr2.open("GET", count_url, false);
xhr2.send();
function handleDisruptCounts() {
 if ((this.readyState == 4) && (this.status == 200)) {
  var res = JSON.parse(this.responseText);
  // do what you want with the res object
  alert(res.disruptions.length + ' lines with disruption history');
 }
}

// get all disruptions for one line
var line = '97V';
var xhr3 = new XMLHttpRequest();
xhr3.onreadystatechange = handleDisruptions;
xhr3.open("GET", line_url + line, false);
xhr3.send();
function handleDisruptions() {
 if ((this.readyState == 4) && (this.status == 200)) {
  var res = JSON.parse(this.responseText);
  // do what you want with the res object
  alert(res.length + ' historical disruptions for line ' + line);
 }
}
