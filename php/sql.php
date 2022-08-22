<?php

function sqlConnect($servername, $username, $password)
{
  $conn = new mysqli($servername, $username, $password);
  if($conn->connect_error)
    die("Cannot connect");
  return $conn;
}

function sqlSelect($conn, $from = "table", $condition = NULL)
{
  $init = "SELECT * FROM " . $from;
  if($condition != NULL)
    $query = $init . "WHERE(" . $condition . ")";
  return $conn->query($query);
}

?>
