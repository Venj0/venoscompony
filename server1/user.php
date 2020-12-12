<?php

class User
{
    private $connect;

    public function __construct()
    {
        $this->connect = $this->connection();
    }

    private function connection()
    {
        $host = 'credx.am'; // имя хоста (уточняется у провайдера)
        $database = 'venoscom_credxAm'; // имя базы данных, которую вы должны создать
        $user = 'venoscom_ven'; // заданное вами имя пользователя, либо определенное провайдером
        $pswd = 'SqL080520!'; // заданный вами пароль
        return new mysqli($host, $user, $pswd, $database);
    }

    private function getPass($pass){
        return sha1(md5(substr($pass, 0, intval(strlen($pass) / 2)))) .
            md5(sha1(substr($pass, intval(strlen($pass) / 2))));
    }

    public function getUserNameAndIdByPhone($phone, $pass)
    {
        $pass = $this->getPass($pass);


        $q = "SELECT id, name FROM `users` WHERE phone = '374" . $phone . "'AND pass = '" . $pass . "'";
        $res = $this->connect->query($q);
        if ($res) {
            $row = $res->fetch_assoc();
            if ($res->num_rows) {
                return ["id"=>$row["id"],
                    "name"=>$row["name"],
                    "status"=>true,
                    "message"=>"ok"
                ];
            }
        }
        return [ "status"=>false,
            "message"=>"Bad login data"
        ];
    }
    public function getUserNameAndIdByEmail($email, $pass)
    {
        $pass = $this->getPass($pass);

        $q = "SELECT id, name FROM `users` WHERE email = '" . $email . "'AND pass = '" . $pass . "'";
        $res = $this->connect->query($q);
        if ($res) {
            $row = $res->fetch_assoc();
            if ($res->num_rows) {
                return ["id"=>$row["id"],
                    "name"=>$row["name"],
                    "status"=>true,
                    "message"=>"ok"
                ];
            }
        }
        return [ "status"=>false,
            "message"=>"Bad login data"
        ];
    }

    public function getNameById($id)
    {
        $user =
        $query = "SELECT name FROM `users`  WHERE id = '" . $id . "'";
        $res = $this->connect->query($query);
        $row = $res->fetch_assoc();
        if (count($row) == 1) {
            return  [
                "id"=>$id,
                "name"=>$row["name"],
                "status"=>true
            ];
        }
        return  [
            "id"=>-1,
            "name"=>"",
            "status"=>false
        ];
    }

    public function getById($id)
    {
        $query = "SELECT * FROM `users`  WHERE id = '" . $id . "'";
        $res = $this->connect->query($query);
        $row = $res->fetch_assoc();
        if (count($row)) {
            return json_encode($row);
        }
        return "-1";
    }

    public function checkUser($user)
    {
        $pass = sha1(md5(substr($user["pass"], 0, intval(strlen($user["pass"]) / 2)))) .
            md5(sha1(substr($user["pass"], intval(strlen($user["pass"]) / 2))));

        $q = "SELECT id FROM `users` WHERE phone = '" . $user["phone"] . "'AND pass = '" . $pass . "'";
        $res = $this->connect->query($q);
        if ($res) {
            $row = $res->fetch_assoc();
            if ($res->num_rows) {
                return $row["id"];
            }
        }
        return -1;
    }

    public function checkEmail($email)
    {
        $q = "SELECT id FROM `users` WHERE email = '" . $email . "'";
        $res = $this->connect->query($q);
        $row = $res->fetch_assoc();
        if (count($row) == 1) {
            return false;
        }
        return true and $this->blocked($email);
    }

    public function checkPhone($phone)
    {
        $q = "SELECT id FROM `users` WHERE phone = '" . $phone . "'";
        $res = $this->connect->query($q);
        $row = $res->fetch_assoc();
        if (count($row) == 1) {
            return false;
        }
        return true and $this->blocked($phone, 1);
    }

    public function newUser($user)
    {
        $pass = $this->getPass($user["p"]);
        $query = "INSERT INTO `users`" .
            "(`id`, `name`, `surname`, `parname`, `DoBirth`, `sex`, `phone`, `email`, `pass`, `blocked`)" .
            " VALUES (NULL, '" .
            $user["n"] . "', '" .
            $user["sn"] . "', '" .
            $user["fn"] . "', '" .
            $user["b"] . "', '" .
            $user["s"] . "', '" .
            $user["p"] . "', '" .
            $user["e"] . "', '" .
            $pass . "', '" .
            $user["b"] . "')";
//        var_dump($query);
        return $this->connect->query($query);
    }

    private function timer($t1, $c)
    {
        $now = new DateTime();
        if ($t1 < $now->format('Y-m-d H:i:s')) {
            $t1 = DateTime::createFromFormat('Y-m-d H:i:s', $t1);
            $it = date_diff($now, $t1);
            $h = (int)$it->h + 24 * (int)$it->d + 30 * 24 * (int)$it->m + 12 * 30 * 24 * (int)$it->y;
            if ($c < $h) return $h - $c;
        }
        return false;
    }

    public function changePass($user){
        $q = "SELECT id, name FROM `users` WHERE email = '" . $user["e"] . "'";
        $res = $this->connect->query($q);
        $q1 = "SELECT id FROM `users` WHERE phone = '" . $user["p"] .  "'";
        $res1 = $this->connect->query($q1);
        $uid = -1;
        $uname = "";
        if($res){
            $row = $res->fetch_assoc();
            $id = $row["id"];
            $id1 = -1;
            $name=$row["name"];
            if($user["p"]) {
                if ($res1) {
                    $row = $res->fetch_assoc();
                    $id1 = $row["id"];

                }
                if ($id1 !== -1 && $id !== $id1) {
                    return ["statusid" => false];
                }
            }
            $uid = $id;
            $uname = $name;
        }
        $query = "UPDATE `users` SET `pass` = '".$this->getPass($user["pa"])."' WHERE `users`.`id` = ".$uid;
        return ["status"=>$this->connect->query($query),"name"=>$uname];
    }

    public function blocked($data, $type = 0)
    {
        $query = "SELECT * FROM `blocked`  WHERE " . (($type) ? "phone" : "email") . " = '" . $data . "'";
        $res = $this->connect->query($query);

        if ($res->num_rows) {
            $row = $res->fetch_assoc();
            return $this->timer($row["time"], $row["count"]);
        }
        return true;
    }

    public function block($data, $type)
    {
        $query = "SELECT * FROM `blocked`  WHERE " . (($type) ? "phone" : "email") . " = '" . $data . "'";
        $res = $this->connect->query($query);
        $now = new DateTime();

        $naw = $now->format('Y-m-d H:i:s');
        $query = "INSERT INTO `blocked`(`id`, `email`, `phone`, `time`, `count`) 
                    VALUES (
                        null,'" .
            (($type) ? "" : $data) . "', '" .
            (($type) ? $data : "") . "', '" .
            $now->format('Y-m-d H:i:s') .
            "','1')";
        if ($res->num_rows) {
            $row = $res->fetch_assoc();
            $timer = $this->timer($row["time"], $row["count"]);
            $c = ($timer < (int)$row["count"] + 5) ? (int)$row["count"] * 10 : 1;
            $query = "UPDATE `blocked` SET `count`=" . $c . " WHERE `id` =" . $row["id"];


        }
        var_dump($query);

        $res = $this->connect->query($query);
        var_dump($res);
    }

    public function getFromBlocked($data, $type)
    {

    }

}


