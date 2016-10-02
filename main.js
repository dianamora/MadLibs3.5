// in UI programming
// step ONE is to always
//SELECT teh div or button or h1 you are 
// working witih 

// finding the html element with class js-submit
const button = $('.js-submit');

console.log( button ); 

button.click(function() {
  console.log( "Handler for .click() called.")

});