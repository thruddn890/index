// function readTextFile(file) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function () {
//     if (rawFile.readyState === 4) 
//     {
//         if (rawFile.status === 200 || rawFile.status == 0) 
//         {
//             var allText = rawFile.responseText;
//             alert(allText);
//         }
//     }

// };
// rawFile.send(null);
// }
// readTextFile("file:///C:\Users\thrud\OneDrive\바탕화면\비주얼코드HTML 작성파일모음-본판\portpolio");





//먼저 스크롤할때마다 호출되는 함수 호출!
function scrollHandler() {
    //console.log($(window).scrollTop()); //얘는 브라우저에서 현재 스크롤의 위치
    //console.log($('.about').position().top); //얘는 두번째 섹션인 about섹션의 위의 부분 좌표임!!
    if ($(window).scrollTop() >= $('.about').position().top) {
      $('.menu-right button').css('color', 'green'); //about 밑으로는 다 이색깔로 바꿔주기
      $('.skill').each(function() {
        var skill = $(this);
        var percentage = skill.find('.percentage').text();
        skill.find('.inner-bar').animate({width: percentage}, 1200);
      });  


    } else {
      $('.menu-right button').css('color', 'white');    
    }
    //이내용까지 작성하면 스크롤을 밑으로내리면 오른쪽 두개의 버튼 색깔이 변하게 된다.
    //문제 발생 - 다시 위로올리면 버튼색깔이 흰색으로 바뀌지 않으므로
    //다른 내용 또 추가로 작성해주어야함.
  
    //각 섹션을 보고 현재 스크롤 위치가 그 섹션보다 아래에 있으면
    //그 섹션의 vertical-center을 animate 시키기
    //포트폴리오 3번과제 내용
    $('section').each(function() {
      if ($(window).scrollTop() >= $(this).position().top) {
        $(this).find('.vertical-center').animate({top: '0', opacity: '1'}, 800);
      }
    });
  }
  $(window).on('scroll', scrollHandler);
  
  //처음 페이지가 로딩됐을 때   
  scrollHandler(); //이 코드 적용 내용뭔지 알아오기!!
  
  //포트폴리오 2번과제 내용
  //클릭 이벤트 먼저 등록 - 섹션 스스크롤
  $('.menu-right button').on('click', function() {
    var id = $(this).attr('id');
    if (id == "about-btn") {
      $('html, body').animate({scrollTop: $('.about').position().top}, 1000);  
      //이내용 의미 : 스크롤이 맨위에있는 상태에서
      //about버튼을 누르면 about 섹션부분으로 내려가서 이동하게된다.
    } else if ( id == "project-btn") {
      $('html, body').animate({scrollTop: $('.project').position().top}, 1000);
      //이내용 의미 : 스크롤이 맨위에있는 상상태에서
      //contact버튼을 누르면 contact 섹션부분으로 내려가서 이동하게된다.
    } else if ( id == "contact-btn") {
      $('html, body').animate({scrollTop: $('.contact').position().top}, 1000);
    }
      else if ( id == "home-btn") {
      $('html, body').animate({scrollTop: 0}, 1000);
    } 
  
  });
  
  //포트폴리오 4번과제 코드 내용 ---> 이코드를 이부분에 작성하면 사이트를 실행시키고
  //about을 누르게 되면 이미 퍼센테이지 바가 가득 채워져있음
  //about버튼을 클릭하면 그 순간에 자동으로 채워지도록 코드를 위쪽 if문 안쪽으로 옮겨주어야함!!!
//   $('.skill').each(function() {
//     var skill = $(this);
//     var percentage = skill.find('.percentage').text();
//     skill.find('.inner-bar').animate({width: percentage}, 1200);
//   });