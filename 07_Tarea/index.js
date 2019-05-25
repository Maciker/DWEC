// DWEC 07: Iker Macaya Faber

// Variales gloables para cargar la info en un array y el id del rss activo.
var recursos = new Array();
var rss = 1;

$(document).ready(function() {    
    getRecursos();
    populateSelect(rss);
    showRSS(rss);
  
    // Evento cuando cambiamos el valor en el combo select
    // mostraremos el rss seleccionado.
    $("#campoSelect").change(function()
    {
        rss = parseInt($("#campoSelect").val());
        showRSS(rss);
    });

    // Evento asociado al boton anterior. Restaremos uno al rss seleccionado.
    // Si es 0 irmeos al ultimo rss.
    $("#anterior").click(function(){
        if (rss - 1 == 0){
            rss=$('#campoSelect option:last-child').val();
            $('#campoSelect').val(rss).change();
        } else {
            rss-=1;
            $('#campoSelect').val(rss).change();
        }
    })

    // Evento asociado al boton siguiente. Sumares uno al rss seleccionado.
    // Si mayor que el numero de rss que tenemos iremos al primero.
    $("#siguiente").click(function(){
        if (rss + 1 > $('#campoSelect option:last-child').val()){
            rss=1;
            $('#campoSelect').val(rss).change();
        } else {
            rss = rss + 1;
            $('#campoSelect').val(rss).change();
        }
    })

  // Evento asociado al boton Agregar RSS. Agrega un rss a la BD.
    $('#crearRSS').click(function(){
        var nombre = prompt("Teclea el nombre del nuevo RSS: ");
        var link = prompt("Teclea la url del nuevo RSS: ");
        // Si los datos son correctos los cargamos en la BD
        if (nombre !="" && nombre !=null && link!="" && link != null)
        {
            rss = parseInt($('#campoSelect').val());
            var i = parseInt($('#campoSelect option:last-child').val()) + 1;
            // He modificado rss.php para pasarle id, titulo y nombre.
            // hace el insert en BD y carga de nuevo los recursos.
            $.get("rss.php?accion=nueva&id="+i+"&titulo="+nombre+"&url="+link,function()
            {
                getRecursos();
                populateSelect(rss);
                showRSS(rss);
            });
        }
    })

  // Evento asociado al botón borrar. Borrara el rss seleccionado.
    $("#borrarRSS").click(function()
    {
        if (confirm("Esta seguro/a de eliminar este recurso RSS"))
        {
            // Borramos el rss seleccionado en el select y volvemos a cargar los datos
            $.get("rss.php?accion=borrar&id="+$("#campoSelect").val(),function()
            {
                rss = parseInt($('#campoSelect option:first-child').val());
                getRecursos();
                populateSelect(rss);
                showRSS(rss);
            });

        }
    });

    // Funcion que nos añade a un array los datos del rss en BD. La clave del array sera el id de cada recurso.
    function getRecursos() {
        activarIndicadorAjax();
        $.getJSON("rss.php?accion=recursosRSS", function(result){
            $.each(result, function(i, field){
                $.getJSON("rss.php?accion=cargar&url="+field.id, function(data){
                    var info = "<h2> Fuente RSS: "+field.titulo+"</h2>";
                    $.each(data, function(j, f){
                        info += "<h3><a href="+f.url+" target=\"_blank\">"+f.titulo+"</a></h3><p>"+f.descripcion+"</p>";
                    });
                    recursos[i] = info;
                });
            });
        });
    }

    // Funcion para rellenar el select con los rss disponibles
    function populateSelect(rss){
        $.getJSON("rss.php?accion=recursosRSS", function(result){
            var sel = "";
            $.each(result, function(i, field){
            sel += "<option value="+field.id+">"+field.titulo+"</option>";
        });
        $("#campoSelect").html(sel);
        $("#campoSelect option[value="+ rss +"]").attr("selected",true);
    })
  }
})

    // Funcion a la cual pasamos un id y cargamos el rss en pantalla.
    // El titulo de la noticia abrira un enlace a la misma.
    function showRSS(rss){
        // Volcamos el RSS correspondiente en el bloque de noticias.
        $("#noticias").fadeOut("slow",function(){
            $("#noticias").fadeIn("slow").html(recursos[rss]);
            desactivarIndicadorAjax();
        })
    }