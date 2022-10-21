var  tbl_estadocivil;
function listar_EstadoCivil(){
    tbl_estadocivil = $("#tabla_estadocivil").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/estado_civil/controlador_listar_estadoCivil.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_estado_civil"},
            
        
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
            
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_estadocivil.on('draw.td',function(){
      var PageInfo = $("#tabla_estadocivil").DataTable().page.info();
      tbl_estadocivil.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_estadocivil').on('click','.editar',function(){
	var data = tbl_estadocivil.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_estadocivil.row(this).child.isShown()){
		var data = tbl_estadocivil.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_estadocivil_editar').value=data.nombre_estado_civil;
    document.getElementById('txt_codigo_estadocivil').value=data.cod_estado_civil;
    
})


function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}7

function Registrar_EstadoCivil(){
    let estadocivil = document.getElementById('txt_estadocivil').value;
    if(estadocivil.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":".../controller/estado_civil/controlador_registrar_estadoCivil.php",
        type:'POST',
        data:{
            a:estadocivil
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo Estado Civil Registrado","success").then((value)=>{
                    document.getElementById('txt_estadocivil').value="";
                    tbl_estadocivil.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El Estado Civil ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

function Modificar_EstadoCivil(){
    let cod  = document.getElementById('txt_cod_estado_civil').value;
    let estadocivil = document.getElementById('txt_estadocivil_editar').value;
    if(estadocivil.length==0 || id.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/estado_civil/controlador_modificar_estadoCivil.php",
        type:'POST',
        data:{
            cod:cod,
            estadoc:estadocivil
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_estadocivil.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El Estado civil ingresado ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
}