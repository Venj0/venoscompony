<?php


class Cookie
{
    public function __construct()
    {
    }
    // language
    public function readLang()
    {
        $l = array(
            "language" => 0,
            "lang" => "hy",
        );

        $val = md5("lezoo");
        if (isset($_COOKIE[$val]) and $_COOKIE[$val] != null) {
            $v = $_COOKIE[$val];
            if ($v == sha1("rooske")) {
                $l["language"] = 1;
                $l["lang"] = "ru";
            }
            if ($v == sha1("anglesh")) {
                $l["language"] = 2;
                $l["lang"] = "en";
            }
        } else {
            $this->writeLang(0);
        }

        return $l;
    }

    public function writeLang($language = 0)
    {
        $cookie_name = md5("lezoo");

        $cookie_value = [sha1("haeren"), sha1("rooske"), sha1("anglesh")][$language];
//        if($language == 0){
//            $cookie_value = sha1("haeren");
//        }if($language == 1){
//            $cookie_value = sha1("rooske");
//        }if($language == 2){
//            $cookie_value = sha1("anglesh");
//        }
//        var_dump($cookie_value);
        setcookie($cookie_name, $cookie_value, time() + (86400 * 360), "/"); // 86400 = 1 day
    }

    // user
    public function readUserId()
    {
        $val = md5("mdaca");
        $id = -1;
        $ids = "";
        if (isset($_COOKIE[$val]) and $_COOKIE[$val] != null) {
            $v = $_COOKIE[$val];
            for ($i = 0; $i < strlen($v); $i += 40) {
                $key = substr($v, $i, 40);
//                var_dump($key."<br>");
                $t = -1;
                for ($j = 0; $j < 10; $j++) {
                    if ($key == sha1(md5($j))) {
                        $t = $j;
                        break;
                    }
                }
                $ids .= $t;
            }
            if (strlen($ids) == strlen($v) / 40) {
                $id = intval($ids);
            }
        }
        return $id;
    }

    public function writeUserId($id)
    {
//        var_dump($id);
        $id = strval($id);
        $C_name = md5("mdaca");
        $C_value = "";
//        var_dump($id."<br>");
//        print_r(strlen($id));
        for ($i = 0; $i < strlen($id); $i++) {
            $C_value .= sha1(md5($id[$i]));
        }
        setcookie($C_name, $C_value, time() + (900), "/"); // 86400 = 1 day

//        var_dump($id,"<br>");
    }

    public function clearUserId()
    {
        $cookie_name = md5("mdaca");
        $cookie_value = sha1(-1);
        setcookie($cookie_name, $cookie_value, time() - (3660), "/"); // 86400 = 1 day
        return 1;
    }

    public function writeCode($code,$data)
    {
        $C_name = md5($data);
        setcookie($C_name, sha1(strtolower($code)), time() + (300), "/"); // 86400 = 1 day
    }

    public function checkCode($code, $data)
    {
//        var_dump($code,$data);
        $C_name = md5($data);
        if(isset($_COOKIE[$C_name]) and $_COOKIE[$C_name] == sha1(strtolower($code))){
            setcookie($C_name, "", time() - (300), "/"); // 86400 = 1 day
            return ["status"=>true];
        };
        return ["status"=>false];

    }

    public function blockPC()
    {
        $C_name = md5("adeushatili");
        $t = 86400;
        setcookie($C_name, sha1("anjatvacs"), time() - ($t), "/"); // 86400 = 1 day
    }

    public function checkForBlocked()
    {
        return (isset($_COOKIE[md5("adeushatili")]) and $_COOKIE[md5("adeushatili")] != sha1("anjatvacs")) ? true : false;
    }

    public function writeCountOfLoginExperience($c)
    {
        $C_name = md5("aesqamaamnaceleee");
        $t = 600;
        $k = 0;
        if (!$c) {
            if ($this->checkForBlocked()) $t = 86400;
            else $this->blockPC();
            $k = 1;
        }
        setcookie($C_name, sha1($c), time() + ($t), "/"); // 86400 = 1 day
        return $k;
    }

    public function readCountOfLoginExperience()
    {
        $C_name = md5("aesqamaamnaceleee");
        $c = 3;
        if (isset($_COOKIE[$C_name]) and $_COOKIE[$C_name] != null) {
            $keys = [sha1(0), sha1(1), sha1(2), sha1(3)];
//            $c = array(sha1(0)=>0,sha1(1)=>1,sha1(2)=>2,sha1(3)=>3)[$_COOKIE[$C_name]];
            $c = array_search($_COOKIE[$C_name], $keys);
//            if ($c > -1) {
//
//            }
        }
//        var_dump($c);
//        die();
        return $c;
    }
}

$Cookie = new Cookie();