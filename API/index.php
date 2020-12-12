<?php
error_reporting(E_ALL);
ini_set("display_errors", "on");

header('Accept: application/json');
header('Content-Type: text/html');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Origin: *");

include "reader.php";
include "user.php";
include "cookie.php";
include "key.php";
include "send.php";
include "writer.php";




$params = explode("/", $_GET["path"]);

$action = $params[0];
$key = (isset($params[1])) ? $params[1] : "";
$type = (isset($params[2])) ? $params[2] : "";
$arg2 = (isset($params[3])) ? $params[3] : "";

function checkKey($key)
{
    date_default_timezone_set('GMT');
    $t = time();
    $h = (int)date("H", $t) + ((int)date("i", $t) - (int)date("i", $t) % 5);

    $t1 = $h % 10;
    $t2 = (int)($h / 10);

    return $key === sha1(substr(sha1($h), $t1, $t2));
//    return false;
}

if (checkKey($key)) {
    switch ($_SERVER["REQUEST_METHOD"]) {
        case "GET":
            echo json_encode(get($action, $type, $arg2));
            break;
        case "POST":
            if ($action === "Auto") echo json_encode(post($type, $_GET));
            elseif ($action === "Writer") echo json_encode(put($type ));
            else {
                http_response_code(404);
                echo json_encode(["status" => false, "massage" => "data don't founded !!!"]);
            }
            break;
        case "PUT":
//            $json = file_get_contents('php://input');

            die();
    }
} else {
    http_response_code(404);
    echo json_encode(["status" => false, "massage" => "flat api key !!!"]);
}


function get($action, $data, $arg)
{
    if ($action === "reader") {
        $reader = new Reader();
        if ($data === "header") {
            return $reader->header();
        }
        if ($data === "footer") {
            return $reader->footer();
        }
        if ($data === "blog") {
            return $reader->blog($arg);
        }
        if ($data === "blogItem") {
            return $reader->blogItem($arg);
        }
        if ($data === "bankItem") {
            return $reader->bankItem($arg);
        }
        if ($data === "CreditTypes") {
            return $reader->varksTypes();
        }
        if ($data === "AboutMin") {
            return $reader->aboutMin();
        }
        if ($data === "About") {
            return $reader->about();
        }
        if ($data === "Sign") {
            return $reader->sign();
        }
        if ($data === "Slider") {
            return $reader->slider();
        }
        if ($data === "Banks") {
            return $reader->banks();
        }
        if ($data === "Credits") {
            return $reader->credits(explode("-", $arg));
        }
        if ($data === "Languages") {
            return $reader->languages();
        }
        if ($data === "Top") {
            return $reader->top();
        } if ($data === "Logo") {
            return $reader->logo();
        }if ($data === "Sectors") {
            return $reader->sectors();
        }
        http_response_code(404);
        return ["status" => false, "massage" => "data don't founded !!!"];
    }

}

function post($type, $args)
{

    $user = new User();
    $cookie = new Cookie();
    switch ($type) {
        case "GUBPOE":
        {
            return (strrpos($args['pl'], "@") === false) ?
                $user->getUserNameAndIdByPhone($args['pl'], $args['pa']) :
                $user->getUserNameAndIdByEmail($args['pl'], $args['pa']);

//                return ( strrpos($args['pl'], "@")===false)?
//                    ["phone"=>$args['pl'],"pass"=>$args['pa']]:
//                    ["email"=>$args['pl'],"pass"=>$args['pa']];
        }
        case "LI":
        {
            return $cookie->writeUserId($args["id"]);
        }
        case "LO":
        {
            return $cookie->clearUserId();
        }
        case "ILI":
        {
            return "";
//                return $cookie->writeUserId($args["id"]);
        }
        case "GUNBI":
        {
            return $user->getNameById($args["id"]);
        }

        case "SSFR":
        {
            $code = codeGen(6, 1);
            $cookie->writeCode($code, $args["p"]);
            sendSms($args["p"], $code);
            return $code;
        }
        case "SEFR":
        {
            $code = codeGen(10);
            $cookie->writeCode($code, $args["e"]);
            sendEmail($args["e"], $code);
            return $code;
        }

        case "CCFR":
        {
            return $cookie->checkCode($args["c"], $args["d"]);
        }

        case "CNUFTD":
        {
            return ["status" => $user->newUser($args)];
        }
        case "CUPWEAP":
        {
            return $user->changePass($args);
        }
        default:
        {
            http_response_code(404);
            return ["status" => false, "massage" => "bad request !!!"];
        }
    }


    http_response_code(404);
    return ["status" => false, "massage" => "data don't founded !!!"];
}

function put($type )
{

    $json = file_get_contents('php://input');
    $data = json_decode($json);
//    var_dump($json);
//    var_dump($data);
//    die();
    $write = new Write();
    switch ($type) {
        case "socIcons":
            return $write->socIcons($data);
        case "Logo":
            return $write->logo($data);
        case "Sector":
            return $write->sector($data);
        case "Slider":
            return $write->slider($data);
        case "CreditTypes":
            return $write->creditTypes($data);
    }
    http_response_code(404);
    return ["status" => false, "massage" => "data don't founded !!!"];
}

