<?php
  function readFile(fname)
  {
    $myfile = fopen(fname, "r") or die("Unable to open file!");
    $x = fread($myfile,filesize(fname));
    fclose($myfile);
    return $x;
  }
?>
