addEventListener('load', () => {
  function callApi() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        document.getElementById('quote').innerHTML = data.en;
        document.getElementById('author').innerHTML = data.author;
      })
      .catch((err) => console.log(err));
  }

  callApi();
});
/*
function setbackground()
{
    window.setTimeout( "setbackground()", 5000); //  milliseconds delay

    var index = Math.round(Math.random() * 9);

    var ColorValue = "FFFFFF"; // default color - white (index = 0)

    if(index == 1)
        ColorValue = "66FF33"; 
    if(index == 2)
        ColorValue = "FF0000"; 
    if(index == 3)
        ColorValue = "FF00FF"; 
    if(index == 4)
        ColorValue = "0000FF"; 
    if(index == 5)
        ColorValue = "00FFFF"; 
    if(index == 6)
        ColorValue = "FFFF00"; 
    if(index == 7)
       ColorValue = "CC66FF"; 
    if(index == 8)
        ColorValue = "3366FF"; 
   if(index == 9)
        ColorValue = "CCCCCC"; 

   document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

}
*/
