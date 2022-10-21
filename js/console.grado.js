function listar_grado(){
    var table = $("#tbl_grado").DataTable({
        "ordering":false,
        "paging": false,
        "searching": { "regex": true },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 100,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controlador/controlador_grado.php",
            type:'POST'
        },
        "columns":[
            {"data":"posicion"},
            {"data":"cod_grado"},
            {"data":"nombre_grado"},
            {"defaultContent":"<button style='font-size:13px;' type='button' class='editar btn btn-primary'><i class 'fa fa-edit'></i></button>"}
        ],
 
        "language":idioma_espanol,
        select: true
    });
 
 }