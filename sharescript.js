$(window).ready(function(){ 
  
        $(".snsList li a").click(function(){
  
            shareAct(this);
  
        });
  
});

function snsShare(snsName, link, title) {

	if (title === null) return false;

	var snsPopUp;
	var _width = '500';
	var _height = '450';
	var _left = Math.ceil(( window.screen.width - _width )/2);
	var _top = Math.ceil(( window.screen.height - _height )/2);

	switch(snsName){
		case 'twitter' :
			snsPopUp = window.open("http://twitter.com/intent/tweet?url=" + link + "&text=" + title, '', 'width='+ _width +', height='+ _height +', left=' + _left + ', top='+ _top);
			break;

		case 'addurl' :
			var dummy = document.createElement("textarea");
			document.body.appendChild(dummy);
			dummy.value = link;
			dummy.select();
			document.execCommand("copy");
			document.body.removeChild(dummy);
			oneBtnModal("URL이 클립보드에 복사되었습니다.");
			break;
	}
}