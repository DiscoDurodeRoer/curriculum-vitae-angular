<?php

$data = file_get_contents("php://input");

if(!isset($data)){
 	echo false;
}else{
	
	$json = json_decode($data, true);
	$mensajeFinal = "Nombre: " . $json['name'] .  
	                "\nCorreo: " . $json['email'] .  
	                "\nMensaje:\n\n " . $json['mensaje'];
	if(mail("administrador@discoduroderoer.es","Mensaje recibido", $mensajeFinal)):
	    echo true;
	else:
	   echo false;
	endif;

}

?>