<?php
    require '../../modelo/modelo_departamentos.php';
    $MU = new Modelo_();//Instaciamos
    $cod = strtoupper(htmlspecialchars($_POST['cod'],ENT_QUOTES,'UTF-8'));   
    $depto = strtoupper(htmlspecialchars($_POST['departamento'],ENT_QUOTES,'UTF-8')); 
    $descr = strtoupper(htmlspecialchars($_POST['descripcion'],ENT_QUOTES,'UTF-8')); 
    $consulta = $MU->Modificar_Departamento($cod,$depto,$descr);
    echo $consulta;

?>