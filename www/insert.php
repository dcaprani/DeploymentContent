<?php
 $con=mysqli_connect("localhost:65412","root","d1p5t1ckDr0pper%","TTCPlayer");
 // Check connection
 if (mysqli_connect_errno())
   {
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
   }
 
$sql="INSERT INTO Player (firstname, lastname, prefix, mobile, email)
 VALUES
 ('$_POST[firstname]','$_POST[lastname]','$_POST[prefix]','$_POST[mobile]','$_POST[email]')";
 
if (!mysqli_query($con,$sql))
   {
   die('Error: ' . mysqli_error($con));
   }
 echo "1 record added";
 
mysqli_close($con);
 ?> 