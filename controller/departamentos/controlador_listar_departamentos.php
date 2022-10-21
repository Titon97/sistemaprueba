<?php
    require '../../modelo/modelo_departamentos.php';
    $MU = new Modelo_Departamentosl();//Instaciamos
    $consulta = $MU->Listar_Departamentos();
    if($consulta){
        echo json_encode($consulta);
    }else{
        echo '{
		    "sEcho": 1,
		    "iTotalRecords": "0",
		    "iTotalDisplayRecords": "0",
		    "aaData": []
		}';
    }
?>