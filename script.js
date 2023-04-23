//your JS code here. If required.
function check(string) {
	for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}
const string = prompt("Enter string.");
alert(c);