<?php


error_reporting(E_ALL);
ini_set("display_errors", "on");

header('Accept: application/json');
header('Content-Type: text/html');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

include "../files.php";

include "../checkKey.php";
include "../read.php";
include "../send.php";

$json = file_get_contents('php://input');
$data = json_decode($json);
if(!$data) {

    die();
}
$action = $data->action;
$key = $data->key;
$type = $data->type;
$args = $data->args;


if (checkKey($key)) {
    switch ($action) {
        case "8a8dbce0f6ea4c4f27883b7c52b21458aa4b61fe20b3dede42648ccfca59193e2f9fc547bf3f553763da7d42d040a79c":
            echo json_encode(get($type));
            break;
            case "545e445af7aea2bdbd3c29414284743ed0dd2421cbf169c62480004af8d2de2049df6bdc4001fb5c5b4204726d82ac9a":
            echo json_encode(sendEmail($args));
            break;
        default:
            die();
    }
} elseif (count($key)) {
    http_response_code(404);
    echo json_encode(["status" => false, "massage" => "flat api key !!!"]);
}







