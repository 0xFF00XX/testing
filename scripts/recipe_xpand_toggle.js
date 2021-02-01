
var width; //    TO WORK PROPERLY IT HAS TO BE THE SAME AS IN CSS
var height;
//removes all inline styles when window shrinks in real time
function clearScriptCss(){
  if($(window).width() <= 980){
    $("*").removeAttr("style");
  }
}
$(window).resize(clearScriptCss);

console.log(Math.max(document.documentElement.clientWidth, window.innerWidth || 0)); //JUST CHECKING THE VALUE

//FUNCTION THAT WORKS onclick
function xPand(obj){
  if(Math.max(document.documentElement.clientWidth, window.innerWidth) > 981){ //CHECKING THE WIDTH OF THE SCREEN. IF ITS MORE THAN 981 THEN
    //CERTAIN WIDTH AND HEIGHT ARE ASSIGNED
    width = 20;
    height = 50;
  }
  else{//IF NOT, BOOLEAN VALUE ASSIGNED BELOW
    var hasSmallScreen = true;
  }
  var row = obj.parentElement;//gets parent element of clicked object
  var elements = row.getElementsByClassName(obj.className); //gets array of all objects in a row


  if(!hasSmallScreen){//IF NOT SMALL SCREEN PROCCED ELSE DO NOTHING

    //MAKE ALL ELEMENT IN A ROW OF WIDTH 0
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width =  0 +'%';
    }
    // length of clicked element in percents independent of screen size
    currentWidth = Math.round((obj.offsetWidth/row.offsetWidth)*100);
    console.log(Math.round((obj.offsetHeight/row.offsetHeight)*100));//



       if(currentWidth == width)
       {
          obj.style.width = "100%";
          obj.style.height = "100%";
          obj.style.cursor = "default";
        //  console.log(obj.getElementsByClassName("instruction_Content")[0].style);

          //timeout for text to be dicplayed in the box, not out of it
          displayParagraphsBlock(obj);

        }
        else
        {
          //loop to make all blocks initioal size
          for(var i = 0; i<elements.length; i++){
            elements[i].style.width =  width+'%';
            elements[i].style.height = height+'%';
            row.getElementsByTagName("h2")[i].style.display = "block";
            obj.style.cursor = "pointer";
          }
          for (var i = 0; i < row.getElementsByTagName("p").length; i++) {
                row.getElementsByTagName("p")[i].style.display = "none";
          }
          if(currentWidth < width){
              obj.getElementsByTagName("h2").style.display = "block";
              obj.style.width = "100%";
              obj.style.height = "100%";
              obj.style.cursor = "default";
              displayParagraphsBlock(obj);
          }
      }
  }


} //END OF EXPAND


//i placed this function seprately because is mentioned more than once.
function displayParagraphsBlock(obj){
  for (var i = 0; i < obj.getElementsByTagName("p").length; i++) {
    obj.getElementsByTagName("p")[i].style.display = "flex";
  }
}


//mobile menu. described somewhere else in scripts.
function clicker()
{
  if (event.target.tagName != 'INPUT') document.getElementById('box').checked = !document.getElementById('box').checked;
}
