this.logueado = false;

$("#entrar").click(function() {
	if ($("#usuario").val() == "Rafael" && $("#Contraseña").val() == "123") {
		logueado = true;
		if (logueado == true) {
			alert("¡BIENVENIDO!")
			{
			 
			    window.location = "./pages/Inicio.html"
			}

		}
	}else{
		Swal.fire('¡ERROR! Usuario o Contraseña Incorrecta.');
	}
});

$("#galeria").click(function () {
   window.location = "../pages/Galeria.html"
});
$("#pdf").click(function () {
   window.location = "../pages/Pdf.html"
});
$("#salir").click(function () {
   window.location = "../index.html"
});
$("#Prueba").click(function () {
	window.location = "../pages/Prueba.html"
});


window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});

// Or With jQuery
$(document).ready(function() {
	$('.datepicker').datepicker();
});

$(document).ready(function() {
	$('select').formSelect();
});

$('#Iniciar').click(function () {
	$('#p1').slideDown();
	$('#Iniciar').hide();
});

$('#siguiente').click(function() {
	if ($("#p1").show()) {
		$("#p1").hide();
	}
	if ($("#p2").hide()) {
		$("#p2").show();
	}
})


