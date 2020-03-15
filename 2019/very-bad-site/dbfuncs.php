<?php
require_once 'common.php';
require_once 'consts.php';

$con = null;
function connect()
{
    global $con;
    $con = mysqli_connect(DB_HOST, DB_USER, DB_PASS);

    if(!$con)
        die("Unable to connect to: " . DB_USER . ":" . DB_PASS . "@" . DB_HOST . ". Error: " . mysql_error());

    selectDb();
}

function selectDb()
{
    global $con;
    if($con !== null)
        mysqli_select_db($con,DB_DB);
}

function getSelect($query)
{
    global $con;
    if($con === null)
        connect();

    if ($result=mysqli_query($con,$query))
      {
      // Fetch one and one row
      while ($row=mysqli_fetch_row($result))
        {
         $rows[] = $row;
        }
      return $rows;
      // Free result set
      mysqli_free_result($result);
    }

}

function insertQuery($query, $update = false)
{
    global $con;
    if($con === null)
        connect();

    
        $result = mysqli_query( $con, $query);
        if($result !== true) {
            return false;
        }

        return ($update === false) ? true : mysqli_insert_id($con);
    
}
