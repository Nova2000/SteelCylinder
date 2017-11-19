/**
 * Created by cpingn on 2017/11/17.
 */
function showmore()
{
    var add=10-$('#notificationsList').children().length;
    for(var i=0;i<add;i++) {
        $("#notificationsList").append(
            $('<div class="media">' +
                '<div class="pull-left">' +
                '<img width="40" src="img/profile-pics/3.jpg" alt="">' +
                '</div>' +
                '<div class="media-body">' +
                '<small class="text-muted">Nova worgon - On 17/12/2013</small>' +
                '<br>' +
                '<a class="t-overflow" href="">Maecenas venenatis enim condimentum ultrices fringilla. Nulla' +
                'eget libero rhoncus, bibendum diam eleifend, vulputate mi. Fusce non nibh pulvinar,' +
                'ornare turpis id</a>' +
                '</div>')
        );
    }
    $("#notifications").css({
        "height":"570px"});
    $("#notificationsList").css({
        "height":"516px"});
    console.log($("#messageList"));
}
