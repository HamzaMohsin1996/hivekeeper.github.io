$(document).ready(function(){
// Color Picker Js
var colorList = [ '000000', '0000aa', '00aa00', '00aaaa', '555555', '5555ff', '55ff55', '55ffff', 
'aa0000', 'aa00aa', 'aa5500', 'aaaaaa','ff5555','ff55ff','ffff55','ffffff' ];
		var picker = $('#color-picker');

		for (var i = 0; i < colorList.length; i++ ) {
			picker.append('<li class="color-item" data-hex="' + '#' + colorList[i] + '" style="background-color:' + '#' + colorList[i] + ';"></li>');
		}

		$('body').click(function () {
			picker.fadeOut();
		});

		$('.call-picker').click(function(event) {
			event.stopPropagation();
			picker.fadeIn();
			picker.children('li').hover(function() {
				var codeHex = $(this).data('hex');

				$('.color-holder').css('background-color', codeHex);
				$('#pickcolor').val(codeHex);
			});
		});

      /*custom file*/
      $("form").on("change", ".file-upload-field", function () {
        $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
      });
$('input[type="checkbox"]').on('change', function() {
  $('input[name="' + this.name + '"]').not(this).prop('checked', false);
});

$('.add-more-disease').click(function(e) {
  e.preventDefault();
  var content = $('.mutiple-select-wrap-inner').html();
      //  $(this).html(content);
  $('#clone-box').clone().appendTo('.mutiple-select-wrap-inner-clone');
});

// Range Slider Js Start

var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();

// Range Slider Js Ends

    $('.btn-collapse').click(function(e) {
      $('.btn-collapse').removeClass("active");
      $('.sidebar-links-ul li').removeClass("active");
      $('.sidebar-links-ul li .second-sidebar').removeClass("active");
      $(this).toggleClass("active");
      $(this).parent().toggleClass("active");
      $(this).siblings().toggleClass("active");
    });
    
    
    $('#hive-tab').click(function(e) {
      $('.hivesense-bg').addClass("remove-bg");
    });
 
    $('#apiary-tab').click(function(e) {
      $('.hivesense-bg').removeClass("remove-bg");
    });
    // Date Picker JQuery
    
      $('.btn-dropdown').click(function(e) {
        $(this).toggleClass("active");
        $(this).parent().toggleClass("active");
        $(this).siblings().toggleClass("show");
      });
      $('.list-btn').click(function(e) {
        $('.add-apiary-wrap-container').toggleClass("active");
      });
      // Video Button js
      $('#myBtn').click(function(e) {
        $(this).toggleClass("active");
      });
      // Audio Button Js
      $('#play-pause').click(function(e) {
        $(this).toggleClass("active");
      });
     
      // Zoom In JQuery
      $('.zoom-in').click(function(e) {
        $('.apiary-list-main-row ').removeClass("full-width");
        $('.main-wrapper-inner ').removeClass("zoom-view");
      });
       // Zoom Out JQuery
       $('.zoom-out').click(function(e) {
        $('.apiary-list-main-row ').addClass("full-width");
        $('.main-wrapper-inner ').addClass("zoom-view");
        
      });
      $('.btn-red-close').click(function(e) {
        $(this).parent().toggleClass("active");
      });
      $('.sidebar-collapse').click(function(e) {
        $(this).parent().parent().parent().toggleClass("active");
      });
      
      
      $(document).on('click', '.list-items',function(e) {
        $(this).toggleClass("active");
      });
      $(document).on('click', '.apiary-list-main-inner-select',function(e) {
        $(this).toggleClass("active");
      });
      $(function () {
        $("#datepicker").datepicker({ 
              autoclose: true, 
              todayHighlight: true
        }).datepicker('update', new Date());
      });
      
     
      var open = false;

  var openSidebar = function(){
    $(".sidebar-nav").addClass("active");
    $("body").addClass("clicked");
    open = true; //This is the new part!
}

var closeSidebar = function(){
    $(".sidebar-nav").removeClass("active");
    $("body").removeClass("clicked");
    $(".second-sidebar").removeClass("active");
    
    open = false;
}
      $('.sidebar-btn').click( function(event) {
        event.stopPropagation();
        var toggle = open ? closeSidebar : openSidebar;
        toggle();
    });
    
    $(document).click( function(event){
        if ( !$(event.target).closest('.sidebar-nav').length ) {
            closeSidebar();   
        }
    });
    
    
// Sidebar Collapse and Hide Menu Js End
$('.arrow-right').click(function(event) {
  event.preventDefault();
  $('.apiary-list-main').animate({scrollLeft:'+=260'},500);
});
$('.arrow-left').click(function(event) {
  event.preventDefault();
  $('.apiary-list-main').animate({scrollLeft:'-=260'},500);
  
});
// Counter Js
$('.minus').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$('.plus').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});

  });
 
  
// Custom Input File Js
function readURL(input, id) {
  $(input).parent().parent().addClass('active');
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imageResult-" + id).attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

/*  ==========================================
  SHOW UPLOADED IMAGE NAME
* ========================================== */
var input = document.getElementById("upload");
var infoArea = document.getElementById("upload-label");

input.addEventListener("change", showFileName);
function showFileName(event) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = "File name: " + fileName;
}




