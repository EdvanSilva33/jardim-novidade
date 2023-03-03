$(document).ready(function () {
    $('#form').submit(function (e) {
        e.preventDefault();

    });
   
    $('#tel').mask('(00) 00000-0000 ', { placeholder: "(00) 00000-0000" });
   
    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3,

            },
    
            email: {
                required: true

            },
          
            mensagem:{
                required:true,
                minlength:10,
            },
            tel:{
                required:true,
                

            }
            
            
        },
        messages: {

            nome: {
                required: '<span class="mensagem-error">O nome e obrigatorio!</span>',
                minlength: jQuery.validator.format('<span class="mensagem-error">No minimo {0} characteres!!</span>')
            },

        
            email: {
                required: '<span class="mensagem-error">Campo de preenchimento obrigatório.</span>',
                email: '<span class="mensagem-error">Introduza um e-mail valido!</span>'

            },

           tel:{
            required: '<span class="mensagem-error">Campo de preenchimento obrigatório.</span>'

           },
            mensagem: {
                required: '<span class="mensagem-error">Mensagem é obrigatório.</span>'
            }

        },


        submitHandler: function (form) {
            form.submit();
            alert('Mensagem enviada com sucesso!')
        },


        invalidHandler: function (e, validate) {
            let camposFaltando = validate.numberOfInvalids();
            if (camposFaltando) {
                alert(`existem ${camposFaltando} campos incorretos`)
            }
        }
    })
});