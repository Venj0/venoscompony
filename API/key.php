<?php
function CodeGen($length = 10, $numOnly = 0)
{
$x = ($numOnly) ? "0123456789" : '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
return substr(str_shuffle(str_repeat($x, ceil($length / strlen($x)))), 1, $length);

}