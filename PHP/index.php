<?php

// --------------------------------------------------
  // br makes a new line in the html
  // echo "Hello World!</br>";
  // \n makes a new line in the souce file only
  // echo "Hello World!</br>";

// --------------------------------------------------
  $first_name = 'Edwin';
  $last_name = 'Rivera';
  $full_name = $first_name.' '.$last_name;
  
  $birth_year = '1989';
  $current_year = '2016';
  $age = $current_year - $birth_year;

  // echo "My name is {$full_name}</br>";
  // echo "I'm {$age} years old</br>";

//---------------------------------------------------
  // echo "My name is $full_name.\n";

  // if (strlen($full_name) > 12)
  //   echo "It's a long name.\n";
  // else
  //   echo "It's a short name.\n";

  // echo str_repeat('=', 12) . "\n";

  // echo "I am $age years old.\n";
  
  // if ($age > 21)
  //   echo "Sake! Sake! Sake!\n";
  // elseif ($age === 21)
  //   echo "Just slipped by! Sake! Sake! Sake!\n";
  // else
  //   echo "No Sake for me :(\n";

//---------------------------------------------------
  // $students_array = [
  //   'Peleke' => ['Sengstacke', 23, 'Syracuse'],
  //   'Julius' => ['Caesar', 2116, 'Rome']
  // ];

  // foreach ($students_array as $student => $data) {
  //   $full_name = $student .' '. $data[0];
  //   echo "My name is $full_name.\n";

  //   if (strlen($full_name) > 12)
  //     echo "It's a long name.\n";
  //   else
  //     echo "It's a short name.\n";

  //   $age = $data[1];

  //   echo "I'm $age years old.\n";
  //   if ($age > 21)
  //     echo "Sake! Sake! Sake!\n";
  //   else if ($age === 21)
  //     echo "Just slipped by! Sake! Sake! Sake!\n";
  //   else
  //     echo "No sake for me :(\n";

  //   echo str_repeat('=', 12) . "\n";
  // }

//---------------------------------------------------
  // require './helpers.php';

  // $students_array = [
  //   'Peleke' => ['Sengstacke', 23, 'Syracuse'],
  //   'Julius' => ['Caesar', 2116, 'Rome']
  // ];

  // foreach ($students_array as $student => $data) {
  //   introduce_student($student, $data[0]);

  //   drinks_sake($data[1]);

  //   separate();
  // }

//---------------------------------------------------
  // function introduce_student($first_name, $last_name) {
  //   $full_name = $first_name . " " . $last_name;

  //   println("My name is $full_name.");

  //   if (strlen($full_name) > 12)
  //     println("It's a long name.");
  //   else
  //     println("It's a short name.");
  // }

  // function println($string) {
  //   echo "$string\n";
  // }

  // function drinks_sake($age) {
  //   println("I'm $age years old.");

  //   if ($age > 21)
  //     println("Sake! Sake! Sake!");
  //   else if ($age === 21)
  //     println("Just slipped by! Sake! Sake! Sake!");
  //   else
  //     println("No sake for me :(");
  // }

  // function separate($separator = '=', $repetitions = 12) {
  //   println(str_repeat($separator, $repetitions));
  // }

//---------------------------------------------------
  // class User {
  //   public $firstName;
  //   private $lastName;
  //   private $emailAddress;

  //   public function __construct ($email, $first, $last = "") {
  //     $this->firstName = $first;
  //     $this->lastName = $last;
  //     $this->emailAddress = $email;
  //   }

  //   public function fullName() {
  //     return $this->firstName . " " . $this->lastName;
  //   } 

  //   public function setImageUrl($url) {
  //     $this->imageUrl = $url;
  //   }
  // }

//---------------------------------------------------
  
?>