<?php
    session_start();
    $websiteTitle = "Mircea Agrigoroaie";// website title
    $websiteDescription = "My resume";// website description
    $websiteKeywords = "resume, web, development";//keywords
    $availableThemes = ['yeti','united','darkly','cerulean'];//we only allow  these themes to be changed
    $theme = isset($_COOKIE['theme']) ? $_COOKIE['theme'] : 'yeti';//setting the default theme
    $year = date('Y');//current year
    $visitor = isset($_SESSION['visitor'])?$_SESSION['visitor']:0;// number of visitors.. 
    $visitor++;// this increments on each page videw
    $_SESSION['visitor'] = $visitor;
    unset($_SESSION['mailSent']); // we reset the mailSent and err session keys
    unset($_SESSION['err']);


    if(isset($_GET['theme'])){
        if(in_array($_GET['theme'], $availableThemes)){
            $theme = $_GET['theme']; //resolve theme from get param
        }
    }
    setcookie("theme",$theme,time() + 3600);// we set the theme cookie for 2 hours
    
    if(isset($_GET['logout'])){
        logout();
    }
    
    function logout(){
        unset($_SESSION['username']);
        session_destroy();
        header("Location: index.php");
    }
 
    function authenticate($username, $password){
   
        if(strtolower($username) === 'mircea' AND $password === 'secret'){
            //we authenticate
            $_SESSION['username'] = $username;
            return header("Location: admin.php");
            // we redirect to the admin page
        }else{
            //we redirect to login page
            $_SESSION['err'] = "Wrong username OR password" ;
            return header("Location: login.php");
            // we redirect to login.php
        }
    }
    
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        if(isset($_POST['username']) && isset($_POST['password'])){
            authenticate($_POST['username'], $_POST['password']);
              // you would probably make a call into a database to retrieve the u/p
            
        }
        
        if(isset($_POST['contactForm'])){
       
            // we process the contact form
            // @TODO -> FIGURE OUT HOW TO SECURE THIS
            $msg = $_POST['message'];
            $to = "mircea@mail.com";
            $headers = "From: webmaster@mirceaagr.com";
            $subject = "Contact from " . $_POST['email'];
            // we need to validate the email address
            // we need to check for spam
            // mail(to, subject, message, headers, parameters);
            if(mail($to, $subject, $meg, $headers)){
                $_SESSION['mailSent'] = true;
            }
            
        }
        
    }    
    
    
