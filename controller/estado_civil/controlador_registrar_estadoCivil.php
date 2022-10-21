<?php
    require '../../modelo/modelo_estadoCivil.php';
    $MU = new Modelo_EstadoCivil();//Instaciamos
    $area = strtoupper(htmlspecialchars($_POST['a'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Registrar_EstadoCivil($estadocivil);
    echo $consulta;

?>