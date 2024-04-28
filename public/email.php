<?php 
    print $_POST;

    $to      = 'helvin159@gmail.com';
    $subject = 'test ';
    $message = 'hello';
    $headers = 'From: admin@lashme3.com'       . "\r\n" .
                 'Reply-To: helvin159@gmail.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>