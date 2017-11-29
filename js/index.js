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
                '<small class="text-muted">上海A项目 - 11/11/2017</small>' +
                '<br>' +
                '<a class="t-overflow" href="">问题已解决! ' +
                '请保持阀门保护帽正确闭合且钢瓶已就位待使用. ' +
                '</a>' +
                '</div>')
        );
    }
    $("#notifications").css({
        "height":"512px"});
    $("#notificationsList").css({
        "height":"458px"});
    console.log($("#messageList"));
}
