(function(){
  var positionOfDiv;
  var ele;

  window.onload = function() {
    ele = document.getElementById('box');
    positionOfDiv = ele.getBoundingClientRect().top;
  }

  window.onscroll = function() {
    if(document.body.scrollTop > positionOfDiv){
      stickToTop();
    }
    else{
      removeFromTop();
    }
  };

  function stickToTop() {
    ele.className = "fix";
  }

  function removeFromTop() {
    ele.className = "unfix";
  }
})();
