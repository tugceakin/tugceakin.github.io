<?php
// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// create email body and send it	
$to = 'tugce.eylul.akin@hotmail.com'; // put your email address here
$email_subject = "Contact form submitted by:  $name";
$email_body = "You have received a new message. \n\n".
				  " Here are the details:\n \nName: $name \n ".
				  "Email: $email_address\n Message: \n $message";
//$headers = "From: noreply@yourdomain.com\n"; 
// Since this email form will be generated from your server. The From email address will be best using something like this noreply@yourdomain.com
//$headers .= "Reply-To: $email_address";	

$headers = 'Content-type: text/html; charset=iso-8859-1' . "\n\n" .
'From: tugce.akin@tugceakin.com' . "\n\n" . 'Reply-To: $email_address' . "\n\n";
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
