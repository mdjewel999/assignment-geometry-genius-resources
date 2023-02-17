/* function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  document.addEventListener("mouseover", function(){
    document.Parallelogram.style.backgroundColor = randomColor();
  });
  
  document.querySelector('circle').addEventListener('mouseover', event => {
        event.target.style.fill = randomColor();
  }); */

  $('#random').on('mouseover',function() {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var colorString = '0px 0px 30px 0px ' + color;
    $('#random').css('box-shadow',colorString);
    $('#random').css('-webkit-box-shadow',colorString);
    $('#random').css('-mox-box-shadow',colorString);
});