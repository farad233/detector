<?php
//Сбор данных из полей формы. 
$adress = $_POST['name'];
$phone = $_POST['phone'];
$question = $_POST['question'];
$mail = $_POST['mail'];

$token = "1495187750:AAHPCkzIUHiu2AqKMYkV8J9I8Ssdg72nltk";
$chat_id = "-1001466630197";

$arr = array(
  'mail: ' => $mail,
  'question: ' => $question,
  'name: ' => $adress,
  'phone: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


if ($sendToTelegram) {
  header('Location: success.html');
} else {
  echo "Error";
}


?>