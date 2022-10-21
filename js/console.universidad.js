function listar_universidades(){
    var table = $("#tbl_universidades").DataTable({
        "ordering":false,
        "paging": false,
        "searching": { "regex": true },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 100,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controlador/controlador_universidad.php",
            type:'POST'
        },
        "columns":[
            {"data":"posicion"},
            {"data":"cod_universidad"},
            {"data":"nombre_universidad"},
            {"data":"cod_pais"},
            {"defaultContent":"<button style='font-size:13px;' type='button' class='editar btn btn-primary'><i class 'fa fa-edit'></i></button>"}
        ],
 
        "language":idioma_espanol,
        select: true
    });
 
 }