$('#home').on('click', clickHome); //$를 쓴다는건 jquery를 활용했다는 말임
      //#을 이용하여 아이디가 home인 요소를 선택 , .on 메소드 사용
      //on메소드에서 파라미터 click을 사용 -> 이거는 onclick의 사용과 같은 방법임.
      //즉 home이라는 아이딜 가지고있는 태그에 click을 하면 clickHome이라는 함수를 실행하게 하란말임.
      $('#seoul').on('click', clickSeoul);
      $('#tokyo').on('click', clickTokyo);
      $('#paris').on('click', clickParis);
      //여기까지 이렇게 작성해주면 위의 div 태그안의 a 태그 안의 
      //onclick 부분의 내용은 다 지워주고 나머지만 그대로 놔두면 된다!!

      $('#photo').on('mouseenter', mouseEnterPhoto);
      $('#photo').on('mouseleave', mouseLeavePhoto);
      //이부분에 이렇게 코드를 작성해주면 위의 img id작성 부분에서
      //width 의 뒷부분은 삭제해줘도 되는 것임!!

      //사용자가 키보드를 누르는 이벤트를 위해서 작성
      //$(document)는 페이지 전체를 의미하는 것임!!!
      $(document).on('keydown', processKeyEvent);

    // 사진을 바꿔주는 함수
    function clickHome() {
    //   document.getElementById('photo').src = 'images/home.png';
      $('#photo').attr('src', 'images/home.png');
      $('#home').css('font-weight', 'bold');
      $('#seoul').css('font-weight', 'normal');
      $('#toyko').css('font-weight', 'normal');
      $('#paris').css('font-weight', 'normal');
    //   document.getElementById('home').style.fontWeight = 'bold';
    //   document.getElementById('seoul').style.fontWeight = 'normal';
    //   document.getElementById('tokyo').style.fontWeight = 'normal';
    //   document.getElementById('paris').style.fontWeight = 'normal';
    }

    function clickSeoul() {
    //   document.getElementById('photo').src = 'images/seoul.png';
    //제이쿼리 형식으로 작성 밑부분에!!
      $('#photo').attr('src', 'images/seoul.png');
      $('#seoul').css('font-weight', 'bold');
      $('#home').css('font-weight', 'normal');
      $('#toyko').css('font-weight', 'normal');
      $('#paris').css('font-weight', 'normal');
    //   document.getElementById('seoul').style.fontWeight = 'bold';
    //   document.getElementById('home').style.fontWeight = 'normal';
    //   document.getElementById('tokyo').style.fontWeight = 'normal';
    //   document.getElementById('paris').style.fontWeight = 'normal';
    }

    function clickTokyo() {
    //   document.getElementById('photo').src = 'images/tokyo.png';
    $('#photo').attr('src', 'images/tokyo.png');
    $('#tokyo').css('font-weight', 'bold');
      $('#home').css('font-weight', 'normal');
      $('#seoul').css('font-weight', 'normal');
      $('#paris').css('font-weight', 'normal');
    //   document.getElementById('tokyo').style.fontWeight = 'bold';
    //   document.getElementById('home').style.fontWeight = 'normal';
    //   document.getElementById('seoul').style.fontWeight = 'normal';
    //   document.getElementById('paris').style.fontWeight = 'normal';
    }
    
    function clickParis() {
    //   document.getElementById('photo').src = 'images/paris.png';
    $('#photo').attr('src', 'images/paris.png');
    $('#paris').css('font-weight', 'bold');
      $('#home').css('font-weight', 'normal');
      $('#toyko').css('font-weight', 'normal');
      $('#seoul').css('font-weight', 'normal');
    //   document.getElementById('paris').style.fontWeight = 'bold';
    //   document.getElementById('home').style.fontWeight = 'normal';
    //   document.getElementById('seoul').style.fontWeight = 'normal';
    //   document.getElementById('tokyo').style.fontWeight = 'normal';
    }
    //사진에 그림자
    function mouseEnterPhoto() {
        $('#photo').css('box-shadow', '5px 10px');

    } 
    function mouseLeavePhoto() {
        $('#photo').css('box-shadow', 'none');
    }

    //키보드 이벤트 핸들링
    function processKeyEvent(event) {
        if (event['key'] === '1') {
            clickHome();
        } else if (event['key'] === '2') {
            clickSeoul();
        } else if (event['key'] === '3') {
            clickTokyo();
        } else if (event['key'] === '4') {
            clickParis();
        }
    }