<?php

function sendSms($to,$code){}
function sendEmail($to,$code){


    $subject = "registration Code";

    $headers = 'From: register@credx.am' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();



    // the message
    $msg = "Your email verification code is ".$code."\n\ndont reply-to this mail";

// use wordwrap() if lines are longer than 70 characters
    $msg = wordwrap($msg,70);
    mail($to, $subject, $msg, $headers);

// send email
}
