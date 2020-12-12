<?php

function put($type, $args)
{
    include "../writer.php";
    $write = new Write();
    switch ($type) {

        case "Contacts":
            return $write->contacts($args);
        case "Portfolio":
            return $write->portfolio($args);
        case "SocIcons":
            return $write->socIcon($args);
        case "About":
            return $write->about($args);
    }
    http_response_code(404);
    return ["status" => false, "massage" => "data don't founded !!!"];
}