<?php
  function hasCookies()
  {
   return (count ($_COOKIE) > 0);
  }

  function checkGet($var)
  {
   return isset($_GET[$var]);
  }
  
  class FormData 
  {
    public $get_data;
    public $post_data;
    __construct()
   {
     $this->get_data = $_GET;
     $this->post_data = $_POST;
   }
  }
?>
