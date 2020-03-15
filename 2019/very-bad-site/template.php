<?php

$whilelist = array("index", "loadme");


require_once 'common.php';

$file = $_GET['load'];

$file = str_replace(chr(0), "", $file); // Null bytes removed! awesome

require_once($file);
