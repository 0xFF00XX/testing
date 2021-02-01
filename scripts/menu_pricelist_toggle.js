

        // TO REMOVE ALL '#' SIGNES ON RELOAD. JUST IN CASE
        if(performance.navigation.type == 1){
          location.href = window.location.href.substr(0, window.location.href.indexOf('#'));

        }
        //PRECAUTION FOR NOT WORKING BURGER. CHECKS / UNCHECKS
        //THE CHECKBOX IF BURGER CLICKED.
        function clicker()
        {
          if (event.target.tagName != 'INPUT') document.getElementById('box').checked = !document.getElementById('box').checked;
        }

        //CHENGES TABS IN MENU WHEN SPECIFIC CLICKED
        function changeTabs(obj)
        {
          //SCROLLS EVERY MENU SECTION TO THE TOP IN THE BEGINNING.
          //OTHERWISE ITS ANNOUYING.
          document.getElementsByClassName("individualOrders_and_footer")[0].scrollTop = 0;
          //CLEARING SCREEN before displaING THE REST
          document.getElementsByClassName("firstPage")[0].style.display = "none";
          //APPLY SCROLL STYLE FOR BODY
          document.getElementsByClassName("individualOrders_and_footer")[0].style.overflowY = "auto";

          //because I have multiple sections, I made a loop to close All
          //of them
          var x = document.getElementsByClassName("individualOrders_section");
          for(var i = 0; i < x.length; i++)
          {
            document.getElementsByClassName("individualOrders_section")[i].style.display = "none";
          }

          //all below is just manipulation of class names. nothing extraordinary just some splitting and appending.
          //EXTRACTING CLASS SECOND NAME

         	var theClass = obj.className;
          var main = "individualOrders_section ";
          theClass = theClass.split(" ")[1];
          theClass = theClass.concat("Tab");
          main = main.concat(theClass);
          document.getElementsByClassName(main)[0].style.display = "block";

        }//end of onclick
