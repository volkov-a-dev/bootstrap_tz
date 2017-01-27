console.log('js');
$('#datetimepicker1').datepicker();
$('#datetimepicker2').datepicker();
$('#timepicker1').timepicker();
$('#timepicker2').timepicker();

function check()
{
    var inp = $('[name=optradio]');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            if(inp[i].value === 'messageId') {
                $('.fast-message__messageId').addClass('show-message-id');
                $('.fast-message__creatMessage').removeClass('show-creat-message');
            }
            if(inp[i].value === 'creatMessage') {
                $('.fast-message__creatMessage').addClass('show-creat-message');
                $('.fast-message__messageId').removeClass('show-message-id');
            }
        }
    }
}
