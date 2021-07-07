$(function(){
  $('.cell').click(function(){
    if ($(this).is('.red')){
      $(this).toggleClass('white');
    }
  });
});
