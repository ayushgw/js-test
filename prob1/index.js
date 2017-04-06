var validateInput = function(name, err){
  var name_ele = document.getElementById(name);
  var err_ele = document.getElementById(err);

  var string = name_ele.value;
  var chk = checkString(string);

  // To manipulate css
  if(chk){
    err_ele.innerHTML = "&#10003; That's perfect!";
    err_ele.className= 'green_text';
    name_ele.classList.remove('input_on_err');
  }
  else{
    err_ele.innerHTML = "&#10060; ERR: Doesn't match the criteria";
    err_ele.className= 'red_text';
    name_ele.className= 'input_on_err';
  }
}

// To check if the entered string matches the criteria
function checkString(str){
  var len = str.length;

  for(var i=0; i<len; i++){
    if(str[i] == 'a' && isAlphaNumeric(str[i+1]) && str[i+2] == 'r'){
      return true;
    }
  }
  return false;
}

// To check if char is AlphaNumeric
function isAlphaNumeric(char) {
  if(!char)  { return false }; //incase char is undefined

  var code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
  !(code > 64 && code < 91) && // upper alpha (A-Z)
  !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false;
  }
  return true;
}
