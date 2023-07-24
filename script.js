const colorPicker = document.querySelector('.color-picker');
const field = document.querySelector('.field');
const reset = document.querySelector('.reset');
let color = colorPicker.value;

//change color
colorPicker.addEventListener('change', () => {
  color = colorPicker.value;
  console.log(color);
});

//draw
// field.addEventListener('click', e => {
//   if (e.target.closest('.cell')) {
//     e.target.style.backgroundColor = color;
//   };
// });


function fieldPressHandler(e) {
  if (e.target.closest('.cell')) {
    e.target.style.backgroundColor = color;
  };
};
field.addEventListener('mousedown', (e) => {
  if (e.target.closest('.cell')) {
    e.target.style.backgroundColor = color;
  }
  field.addEventListener('mouseover', fieldPressHandler);
});
field.addEventListener('mouseup', () => {
  field.removeEventListener('mouseover', fieldPressHandler);
});
field.addEventListener('mouseleave', () => {
  field.removeEventListener('mouseover', fieldPressHandler);
});

//clear field
reset.addEventListener('click', () => {
  document.querySelectorAll('.cell[style]').forEach(cell => {
    cell.removeAttribute('style');
  });
});