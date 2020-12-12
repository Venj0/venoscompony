<?php

function get($type)
{
    include "../reader.php";
    $reader = new Reader();
    switch ($type) {

        case"Start" :
            return $reader->start();
        case"Pages" :
            return $reader->pages();



        //
        // admin1
        case"About" :
            return $reader->about();
        case"Contacts" :
            return $reader->contacts();
        case"SocIcons" :
            return $reader->socIcons();
        case"Icons" :
            return $reader->icons();
        case "Portfolio":
            return $reader->portfolio();
        case "Languages":
            return $reader->languages();


        default:
            http_response_code(404);
            return ["status" => false, "massage" => "data don't founded !!!"];
    }


}