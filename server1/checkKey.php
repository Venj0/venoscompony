<?php

function checkKey($key)
{
date_default_timezone_set('GMT');
$t = time();
$h = (int)date("H", $t) + ((int)date("i", $t) - (int)date("i", $t) % 5);

$t1 = $h % 10;
$t2 = (int)($h / 10);

return $key === sha1(substr(sha1($h), $t1, $t2));

}
