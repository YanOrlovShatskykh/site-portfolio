<?php

if(isset($_POST['username'])) {

  // echo json_encode($_POST['username'], JSON_UNESCAPED_UNICODE);

  $username = $_POST['username'];
  $phone = $_POST['phone'];
  $comment = $_POST['comment'];

  //create email message for admin
  $admSubject = "Заявка с сайта-портфолио.";
  $admMessage = "<h2>Заявка с сайта-портфолио.</h2>";
  $admMessage .= "<h3>С тобой хочет связаться - $username, номер телефона - <a href='tel:$phone'>$phone</a>.</h3>";
  $admMessage .= "<h3>Комментарий: $comment</h3>";
  $admEmail = "yan.orlov.shatskykh@gmail.com";
  $headers = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

  //from
  $headers .= 'From: admin@awesome-ht.ml' . "\r\n";

  //        send messages for user and admin
  mail($admEmail, $admSubject, $admMessage, $headers);

  // echo json_encode($admMessage, JSON_UNESCAPED_UNICODE);

  /* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
  где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

  //в переменную $token нужно вставить токен, который нам прислал @botFather
  $token = "";

  //нужна вставить chat_id (Как получить chad id, читайте ниже)
  $chat_id = "";

  //Далее создаем переменную, в которую помещаем PHP массив
  $arr = array(
  'Имя пользователя: ' => $username,
  'Телефон: ' => $phone,
  'Комментарий:' => $comment
  );
  
  //При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };
  
  //Осуществляется отправка данных в переменной $sendToTelegram
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMeвssage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

  //Если сообщение отправлено, напишет "Thank you", если нет - "Error"
  if ($sendToTelegram) {
    echo 'true';
  } else {
    echo 'false';
  }  
}
