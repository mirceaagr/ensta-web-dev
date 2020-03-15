<!DOCTYPE html>
<html>
    <head>
        <title>1.php</title>
    </head>
    
    <body>
        <!--I can inject code via $_SERVER["PHP_SELF"]-->
        <!-- /%22%3E%3Cscript%3Ealert('hacked')%3C/script%3E -->
        <!-- TO avoid XSS use htmlspecialchars -->
        <!-- TRIM the inputs -->
        <!--stripslashes()-->
        <!--check required values with empty-->
        <!--filter_var($email, FILTER_VALIDATE_EMAIL) to validate if input is email -->
        <form action="<?=htmlspecialchars($_SERVER["PHP_SELF"])?>" method="POST">
            <fieldset>
                <legend>Personal Info</legend>
                Name: <input type="text" name="name" required/>
                E-mail:<input type="text" name="email" required>
                <div>
                    Gender:
                    <label for="male">Male</label>
                    <input id="male" type="radio" name="gender" value="Male"/>
                    <label for="female">Female</label>
                    <input id="female" type="radio" name="gender" value="Female"/>
                    <label for="other">Attack Helicopter</label>
                    <input id="other" type="radio" name="gender" value="Attack Helicopter"/>
                
                </div>
            </fieldset>
            
            <fieldset>
                <legend>Job Info</legend>
                Job:
                <select>
                    <option value="front-end">Front end web developer</option>
                    <option value="back-end">Back end web developer</option>
                    <option value="full-stack">Full Stack</option>
                </select>
                
            
            </fieldset>
            
            
            <input type="submit" value="Submit"/>
        </form>
        <?php
           require("pages/about.php");
  
        ?>        
        <?php if ($_SERVER["REQUEST_METHOD"] == "POST"): ?>
            <div>
                  <h2>Hello <?=$_POST['name']?></h2>
                  <p>Your email is <?=$_POST['email']?></p>
            </div>
        <?php endif; ?>
        
    </body>
</html>