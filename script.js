$(function(){
  let color = ($('.color-picker').val());;
  $('.color-picker').change(function(){
    color = ($('.color-picker').val());
  });
  $('.cell').click(function(){
    $(this).css('background-color', color);
  });
  $('.reset').click(function(){
    $('.cell').css('background-color', 'white');
  });
});
