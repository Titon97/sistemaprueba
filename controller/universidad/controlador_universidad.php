<?php
require '../../modelo/modelo_universidad.php';
$MU= new Modelo_universidad(); 
$consulta = $MU->listar_universidad();
if($consulta){
    echo json_encode ($consulta);
}else{
    echo '{
        "sEcho": 1,
        "iTotalRecords": "0",
        "iTotalDisplayRecords": "0",
        "aaData": []
    }';
}
?>