$('#send').on('click', sendText);
function sendText() {

  //console.log($('#new-message').val()); 이렇게 작성하내용은 소스창에서 확인하려고 작성해본것임
 // var newMessage = $('#new-message').val();
//$('.chatbox').append('<div class="friend-bubble bubble">잘 지내?</div>')
  //말풍선이 오른쪽에 안생기고 왼쪽에 생기는 이유는 friend bubble bubble이라는 클래스를 사용했기 때문임!

var newMessage = $('#new-message').val();
if(newMessage != '') {  //newMessage가 빈문자열이 아닐때만 보내지도록 설정!!
$('.chatbox').append('<div class="my-bubble bubble">' + newMessage + '</div>')
  //이렇게 작성하면 새로운 내용을 입력할 수 있게된다.
$('#new-message').val('');// 이내용을 작성해주면 메시지를 보내고 난후 화면이 빈문자열의 상태가 된다!
  //하지만 현재 여기까지 작성한단계에서는 빈문자일때도 전송버튼을 클릭하면 메시지가 보내진다!
  //그러므로 위에 if문을 작성해주어야함!
} //먼저 이렇게 기본형식을 작성해주기!!!
}