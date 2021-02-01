<html>
  <head>
    <link rel="stylesheet" href="styles/mainStyle.css">
    <style media="screen">
      body{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
          font-family: 'Quicksand', sans-serif;
      }
      span{
        color: silver;
        text-transform: capitalize;
      }
      .back{
        font-weight: bold;

        background-color: #EDE7D9;
        padding: 20px;
        border-radius: 10px;
      }
      a{
        text-decoration: none;
        color: black;
      }
      p{
        margin: 10px;
      }

    </style>
  </head>
  <body>
    <div class="info_">
      <p><h3>Thank you   <span><?php echo $_POST['fname']; ?></span> <span><?php echo $_POST['lname']; ?></span>
        For purchasing our hat!</h3>
      </p>
      <br>
      <p>Details you have entered :</p>
      <p>Phone: <span><?php echo $_POST['tel']; ?></span> </p>
      <p>Email address is: <span><?php echo $_POST['mail']; ?></span> </p>
      <p>Address is: <span><?php echo $_POST['addr1']; ?>, <?php echo $_POST['addr2']; ?></span> </p>
      <p>Quantity: <span><?php echo $_POST['quantity']; ?></span> </p>
    </div>
    <a href="merch.html">
      <div class="back">
        Go Back!
      </div>
    </a>

  </body>
</html>
