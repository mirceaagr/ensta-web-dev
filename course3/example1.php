<?php 
    echo "Teest";
    
    $myVariable = "My variable";
    echo $myVariable;
    var_dump($myVariable);
    
    $name = "Mircea";
    $surname = "Agr";
    echo $name . ' ' . $surname. '<br />';
    $name = 1;
    echo $name . ' ' . $surname. '<br />';
    echo 1+1; echo  '<br />';
    echo 10/5; echo '<br />';
    echo 10*4; echo '<br />';
    echo 5%3; echo '<br />';
    
    for ($i = 0; $i < 10; $i++) {
         print("Iteration " . $i . "<br />");
    }
    
    $x = 0;
    $num = 1;
    while($x < 5){
        $num++;
        echo $num . "<br />";
        ++$num;
        echo $num . "<br />";
        $x++;
    }
    
    $arr = array("Isabelle","Louis", "Soline", "Antoine", 1);
    foreach ($arr as $key =>  $a) {
        echo $a . "<br />";
    }
    echo $arr[1]; // targeting Louis
    
    $ages = [
        "Isabelle"=>"16",
        "Louis"=>54, 
        "Soline"=>102.5, 
        "Antoine"=>21
        ];
        
    foreach ($ages as $name => $age) {
        if ($age < 18) {
            echo $name . " you are definetly not allowed to drink beer";
        }
        echo "Name:" . $name . ":" . $age . " ans<br />";
    }
    // asume I am a stalker and I want to know more about my students
    $stalker = [
        "Isabelle"=>[
                'age'=>"16",
                "eyeColor"=>"brown"
            ],
        "Louis"=>[
            "age"=>54,
            "car"=>"Ferrari"
            ], 
        "Soline"=>102.5, 
        "Antoine"=>21
        ];
    
    echo "<ul>";
    foreach ($stalker as $name => $personData) {
        echo "<li>";    
        echo "<b>" . $name . "</b>";
        // check if personData is Array
        if (is_array($personData)) {
            foreach ($personData as $key => $value) {
                echo "-->" . $key . ":" . $value . "<br />";
            }
        }
        echo "</li>";
    }
    echo "</ul>";

    function plusOne($number){
        return $number + 1;
    }

    echo plusOne(5);

    $student = "Isabelle";
    switch ($student) {
        case 'Isabelle':
            echo "Have more courage";
            break;

        case 'Louis':
            echo "Twingo is not a real car";
            break;

        case 'Soline':
            echo "No more locks for you";
            break;

        case 'Antoine':
            echo "Mad skills bro";
            break;
        
        default:
            // the rest of the class
            echo "Attendance is required to pass";
            break;
    }
    
// SuperGLOBALS

/*    var_dump($_REQUEST);
    var_dump($_SERVER);
    var_dump($_COOKIE);
    var_dump($_SESSION);*/

    
    
    

?>