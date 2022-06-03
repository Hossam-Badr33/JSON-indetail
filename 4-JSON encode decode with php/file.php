<?php
    $text = '["hossam", "Badr", 38]';
    var_dump($text);
    echo ("<br/>");
    $json = json_decode($text);//convert string to object/array
    var_dump($json);
    echo ("<br/>");
    foreach ($json as $arr) {
        echo $arr . "<br/>";
    }
    $array = array ("ahmed","sabry");
    json_encode($array);//convert any-data to string
    var_dump($array);
