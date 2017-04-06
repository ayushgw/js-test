var constructPyramid = function(){
  var input_box = document.getElementById('input_box');
  var input_value = input_box.value;
  var err = document.getElementById('error');

  var result_box = document.getElementById('result_box');
  result_box.innerHTML = '';

  if(input_value < 15 && input_value > 0){
    make(input_value);
    err.innerHTML = "";
  }
  else {
    err.innerHTML = "<img src='error.png'><div>ERR: Invalid Input! Please enter a number between 1 and 15.</div>";
  }
};

function make(num) {
  var limit = 1;
  for(var i=1; i<=num; i++){
    var print = '';
    var ele = document.createElement('div');

    for(var j=1; j<=limit; j++){
      var span = document.createElement('span');
      span.innerHTML = i;
      span.classList.add('num_width');

      ele.appendChild(span);
    }
    limit += 2;

    ele.classList.add('text_center', 'letter_spacing');
    result_box.appendChild(ele);
  }
}
