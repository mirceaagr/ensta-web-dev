<?php
	require_once 'common.php';
	unset($_SESSION['authed']);
	unset($_SESSION['userid']);
	unset($_SESSION['username']);
	header('Location:login.php');
?>