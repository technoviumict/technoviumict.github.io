

    
    $('#mc-form').ajaxChimp({
        url: 'https://roc-nijmegen.us4.list-manage.com/subscribe/post-json?u=e8f65e4efc65dd48bc3b38ced&amp;id=e7a79f6070',
        //callback : callbackFunction
    });

    /*function callbackFunction (resp) {
        console.log(resp);
        if (resp.result === 'success') {
            console.log('success verzonden');
        }
    }*/
    
/*
    //$(document).ready(function() {
        $("#mc-form").submit(function( event ) {
            event.preventDefault();
            var url = 'https://roc-nijmegen.us4.list-manage.com/subscribe/post-json?u=e8f65e4efc65dd48bc3b38ced&amp;id=e7a79f6070';
            var data = {};

            var dataArray = $( this ).serializeArray();
            $.each(dataArray, function (index, item) {
                data[item.name] = item.value;
            });
            console.log(data);
            console.log(url);
            $.ajax({
                type: "POST",
                url: url,
                data: data,
                crossDomain: true,
                dataType: 'jsonp',
                success: function(resp, text){
                    console.log('mailchimp ajax submit success: ' + text);
                    console.log(resp);
                },
                error: function (resp, text) {
                    console.log('mailchimp ajax submit error: ' + text);
                    console.log(resp);
                }
            });
        });
    //});


/*
    $.ajax({
        url: "https://roc-nijmegen.us4.list-manage.com/subscribe/post?u=e8f65e4efc65dd48bc3b38ced&amp;id=e7a79f6070",
        type: "POST",
        crossDomain: true,
        contentType: 'application/json',
        data: $form.serialize(),
        dataType: "jsonp",
        success: function(data) {
            console.log('success')
            //success handler
        },
        error: function() {
            //error handler
            console.log('error')
        }
    });
    });
    */
//});
