/**
 * Created by cpingn on 2017/11/17.
 */
function showmore()
{
    var add=9-$('#notificationsList').children().length;
    for(var i=0;i<add;i++) {
        $("#notificationsList").append(
            $('<div class="media">' +
                '<div class="pull-left">' +
                '<img width="40" src="img/profile-pics/ok.png" alt="">' +
                '</div>' +
                '<div class="media-body">' +
                '<small class="text-muted">Nova - On 11/11/2017</small>' +
                '<br>' +
                '<a class="t-overflow" href="">The problem has been solved!' +
                'Leave the valve protection cap in place until the cylinder has been secured in place and is ready to be used. ' +
                '</a>' +
                '</div>')
        );
    }
    $("#notifications").css({
        "height":"570px"});
    $("#notificationsList").css({
        "height":"516px"});
    console.log($("#messageList"));
}
