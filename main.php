<?php

if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $number = $_POST['number'];
  $maiFrom = $_POST['email'];
  $message = $_POST['message'];
  
  $mailTo = "";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an email from ".$name.".\n\n".$message;

  mail($mailTo, $number, $txt, $headers);
  headers("Location: mail.php?mailsend");
}

?>