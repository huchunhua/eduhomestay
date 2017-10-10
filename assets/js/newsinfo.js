$(document).ready(function () {
    showNews(2,3,1);
});
// 消息提示
function showNews(a,b,c) {
    var a = a;
    var b = b;
    var c = c;
    var n = a + b + c;
    var html = '<li  class="dropmenu">' +
                    '<a class="news news-wrap" style="font-family: &#39;Microsoft YaHei&#39;;font-weight:normal;font-size: 1.1em">' +
                        '<span>' + n + '</span>' +
                    '</a>' +
                    '<div class="dropitem">' +
                        '<a href="./weixin_page.html" >' +
                            '<div class="news-wrap">' +
                                '我的学生1' +
                                '<span>' + a + '</span>' +
                            '</div> ' +
                        '</a>' +
                        '<a href="./weixin_page.html" >' +
                            '<div class="news-wrap">' +
                                '我的学生2' +
                                '<span>' + b + '</span>' +
                            '</div> ' +
                        '</a>' +
                        '<a href="./weixin_page.html" >' +
                            '<div class="news-wrap">' +
                                '我的学生3' +
                                '<span>' + c + '</span>' +
                            '</div> ' +
                        '</a>' +
                    '</div>' +
                '</li>';
    if (n > 0) {
        $(".collapse ul").append(html);
    }
}




