<?php

$data = file_get_contents("php://input");

if(!isset($data)){
 	echo false;
}else{
	
	$json = json_decode($data, true);
	if(isset($json['name']) && isset($json['email']) && isset($json['message'])){

		$mensajeFinal = "Nombre: " . $json['name'] .  
						"\nCorreo: " . $json['company'] .  
						"\nCorreo: " . $json['email'] .  
						"\nMensaje:\n\n " . $json['message'];
		if(mail("administrador@discoduroderoer.es","Mensaje recibido CV", $mensajeFinal)):
			echo true;
		else:
		   echo false;
		endif;
	}else{
		echo false;
	}
}

?>