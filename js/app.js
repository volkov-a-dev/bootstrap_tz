console.log('js');
$('#datetimepicker1').datepicker();
function check()
{
    var inp = $('[name=optradio]');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            if(inp[i].value === 'messageId') {
                $('fast-message__messageId').addClass('show-message-id');
            }
            if(inp[i].value === 'creatMessage') {
                document.getElementsByClassName('fast-message__messageId').classList = 'show-creat-message';
            }
        }
    }
}
