$(document).ready(function() {
	var $formLogin = $("#loginForm"),
		$btn = $formLogin.find("#btn");

   	if($formLogin.length>0) {
        var login = $formLogin.bind("invalid-form.validate",
            function() {
                // $msg.html("<div>Campos incompletos o rut invalido</div>");
            }).validate({
                errorPlacement: function(error, element) {},
                submitHandler: function(form) {
                    if(!$btn.hasClass("disabled")) {
                        $btn.addClass("disabled");
                        $.ajax({
                            type: "POST",
                            data: $(form).serializeArray(),
                            url: "http://www.clinicaucsancarlos.cl/agendamientoSAP/index.php?sec=log&do=in&callback=?",
                            dataType: "json",
                            // jsonp: "lala",
                            success: function(data) {
                            	alert(data.MENSAJE);
                            	// console.log(data);
                                // $msg.html(data.MENSAJE);
                                // if(data.ERROR == 0) { //OK
                                //     window.location.reload(true);
                                // } else {
                                //     $btn.removeClass("disabled");
                                // }
                            },
                            error: function() {
                            	alert("error");
                            }
                        }); 
                    }
                    return false;
                },
                success: function(label) {}
            });
    } 
});