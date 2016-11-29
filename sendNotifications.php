<?php

    // Step 1: Download the Twilio-PHP library from twilio.com/docs/libraries, 
    // and move it into the folder containing this file.
    require "twilio-php-master/Services/Twilio.php";
    //require_once('/path/to/twilio-php/Services/Twilio.php'); // Loads the library

    // Step 2: set our AccountSid and AuthToken from www.twilio.com/user/account
    $AccountSid = "ACffd69af9f756493e2caebadb5f450e23";
    $AuthToken = "a525cfd12af276d99ab92e621ad235b1";

    // Step 3: instantiate a new Twilio Rest Client
    $client = new Services_Twilio($AccountSid, $AuthToken);

    $phoneNumber = $_GET["phone"];
    $name = $_GET["name"];
    $question = $_GET["question"];

    // Step 4: make an array of people we know, to send them a message. 
    // Feel free to change/add your own phone number and name here.
    $people = array(
        //"+13106198190" => "Naomi"
        $phoneNumber => $name
    );

    // Step 5: Loop over all our friends. $number is a phone number above, and 
    // $name is the name next to it
    foreach ($people as $number => $name) {

        $sms = $client->account->messages->sendMessage(
            "323-431-9922", // Step 6: Change the 'From' number below to be a valid Twilio number 
            $number, // the number we are sending to - Any phone number
            "Hey $name, help out a classmate! $question" // the sms body
        );
        echo "Sent message to $name"; // Display a confirmation message on the screen
    }

//    foreach ($client->account->messages as $message) {
//        echo $message->body;
//    }
//
//params['From'] and params['Body']
?>