/*
* mento/chatting.html
* */

/*-----------------------------------------------------------*/
/*멘토 신청 버튼 클릭 시 모달*/
/*-----------------------------------------------------------*/
$("#apply_button").on("click", function(){
    $("#modal").show();
});
$("button.cancel").on("click", function(){
    $("#modal").hide();
});

/*한줄평 작성 후 멘토 신청 완료 버튼 클릭 시*/
$("button.applyBtn").on("click", function(){
    /*한줄평 작성 안했을 시*/
    if($(".modal_input").val() == ''){
        $(".modal_input").css("border", "1px solid red");
        $(".modal_input").attr("placeholder", "인사말을 입력해주세요");
        return;
    }
    $("#modal").hide();
    $("#modalSuccess").show();
});