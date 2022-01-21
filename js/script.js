$(function () {
    $(".container .content .ingredients .line .box").click(function () {
        $(this).toggleClass("active");
        $(this).append("✔")

        if (!$(this).hasClass("active")){
            $(this).empty()
        }

    });
});