$(function(){
  $('.cell').click(function(){
    if ($(this).is('.white')){
      $(this).removeClass('white').addClass('black');
    }
    else
    if ($(this).is('.black')){
      $(this).removeClass('black').addClass('red');
    }
    else
    if ($(this).is('.red')){
      $(this).removeClass('red').addClass('orange');
    }
    else
    if ($(this).is('.orange')){
      $(this).removeClass('orange').addClass('yellow');
    }
    else
    if ($(this).is('.yellow')){
      $(this).removeClass('yellow').addClass('green');
    }
    else
    if ($(this).is('.green')){
      $(this).removeClass('green').addClass('blue');
    }
    else
    if ($(this).is('.blue')){
      $(this).removeClass('blue').addClass('purple');
    }
    else
    if ($(this).is('.purple')){
      $(this).removeClass('purple').addClass('white');
    }
  });
  $('.reset').click(function(){
    $('.cell').removeClass('purple blue green yellow orange red black').addClass('white');
  });
});
