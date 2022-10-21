<?php
    require '../../modelo/modelo_departamentos.php';
    $MU = new Modelo_EstadoCivil();//Instaciamos
    $area = strtoupper(htmlspecialchars($_POST['a'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Registrar_EstadoCivil($departamentos);
    echo $consulta;

?>