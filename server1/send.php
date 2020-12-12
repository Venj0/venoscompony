<?php

function sendSms($to,$code){}
function sendEmail($data) {


    $subject = "ask form ".$data->name;
    if($data->phone !=="") $subject.="\n\nphone number is :".$data->phone;
    $headers = 'From: '.$data->email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();



    // the message
    $msg =$data->msg;

// use wordwrap() if lines are longer than 70 characters
    $msg = wordwrap($msg,700);
    mail("siradeghyansmbat@gmail.com", $subject, $msg, $headers);

    return array("status"=>true);
// send email
}
