<?php
$name = $_post['name'];
$visitor_email = $_post['email'];
$subject = $_post['subject'];
$message = $_post['message-'];

$email_from = 'csmu@mywebsite.com';

$email_subject = 'New FOrm Submition';

$email_body = "User Name: $name.\n".
               "User Email: $visitor_email.\n".
               "subject: $subject.\n".
               "User Message: $message.\n".

               

$to = 'mohammedmajaz552@gmail.com';

$header = "From $email_from \r\n";

$header ="Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("location:contact.html");

?>