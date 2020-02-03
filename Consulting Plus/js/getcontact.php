<?php

$email = "dmytro.malonn@gmail.com";

if (isset($_POST["phonenumber"]) ) {

	$result = array(
        'phonenumber' => $_POST["phonenumber"],
        'chooseanimal' => $_POST["chooseanimal"],
        'clientname' => $_POST["clientname"],
        'chooseservice' => $_POST["chooseservice"],
        'choosedatefrom' => $_POST["choosedatefrom"],
        'choosedateto' => $_POST["choosedateto"],
    );

    $headers = "MIME-Version: 1.0" . PHP_EOL .
        "Content-Type: text/html; charset=utf-8" . PHP_EOL .
        'From: Animal Planet Feedback <feedback@animalplanet.com>' . PHP_EOL .
        'Reply-To: feedback@animalplanet.com' . PHP_EOL;


	switch($_POST["form_number"]) {
		case 1: {
			$message = "".$_POST["form_subject"].": 
			<br>- Номер: ".$_POST["phonenumber"].",
			<br>- Ім'я клієнта: ".$_POST["clientname"].".";
			break;
		}
		case 2:{
			$message = "".$_POST["form_subject"].": 
			<br>- Номер: ".$_POST["phonenumber"].",
            <br>- Ім'я клієнта: ".$_POST["clientname"].",
			<br>- Вибраний сервіс: ".$_POST["chooseservice"].".";
		 	break;
		}
        case 3:{
			$message = "".$_POST["form_subject"].": 
			<br>- Номер: ".$_POST["phonenumber"].",
            <br>- Залишає від: ".$_POST["choosedatefrom"].",
            <br>- До: ".$_POST["choosedateto"].",
			<br>- Вибраний сервіс: ".$_POST["chooseanimal"].".";
		 	break;
		}
	}

    mail($email, $_POST["form_subject"], $message, $headers);

	echo json_encode($result);
}

?>