$(document).ready(function(){
var firstdata = 
        [
        
          {id:"x",state:"New", sale:"-10",img:"img/photo_gallery.jpg",name:"",info:"", price:"" },
          {id:"y",state:"", sale:"",img:"img/photo_gallery_1.jpg",name:"",info:"", price:"" },
          {id:"z",state:"", sale:"",img:"img/photo_gallery_2.jpg",name:"",info:"", price:"" },
          {id:"w",state:"", sale:"", img:"img/photo_gallery_3.jpg",name:"",info:"", price:"" },
          {id:"j",state:"", sale:"-5%",img:"img/photo_gallery_4.jpg",name:"",info:"", price:"" },
          {id:"q",state:"", sale:"",img:"img/photo_gallery_1.jpg",name:"",info:"", price:"" },
          {id:"i",state:"", sale:"",img:"img/photo_gallery_2.jpg",name:"",info:"", price:"" },
          {id:"ch",state:"", sale:"",img:"img/photo_gallery_3.jpg",name:"",info:"", price:"" },
          {id:"u",state:"", sale:"",img:"img/photo_gallery_4.jpg",name:"",info:"", price:"" }
       
      ];
     
$('#SliderImg').tmpl(firstdata).appendTo(' .slider-for');

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
		
var data = 
        [
        
          {id:"a",state:"", sale:"",img:"img/photo.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"482 p.", price4:"482 000 p." },
          {id:"b",state:"New", sale:"-10%",img:"img/photo_1.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"452 p.",price2:"452 000p.",price3:"482 p.", price4:"482 000 p." },
          {id:"c",state:"New", sale:"",img:"img/photo_2.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"482 p.", price4:"482 000 p." },
          {id:"d",state:"", sale:"", img:"img/photo_3.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"482 p.", price4:"482 000 p." },
          {id:"e",state:"", sale:"-5%",img:"img/photo_4.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"452 p.",price2:"452 000p.",price3:"482 p.", price4:"482 000 p." },
          {id:"f",state:"", sale:"",img:"img/photo_5.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"482 p.", price4:"482 000 p." },
          {id:"g",state:"", sale:"",img:"img/photo_6.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"482 p.", price4:"482 000 p." },
          {id:"h",state:"", sale:"",img:"img/photo_41.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"482 p.", price4:"482 000 p." },
          {id:"d",state:"", sale:"",img:"img/photo_51.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"482 p.", price4:"482 000 p." }
       
      ];
     
$('#SliderImg').tmpl(data).appendTo('#mySlider');

$('.responsive').slick({
  dots: false,
  infinite:true,
 
  speed:2000,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay:false,
  pause: 8e3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});


$('.btn-next').on('click',function(){ 
$('.responsive').slick('slickNext');
$('.btn-next').css('opacity',"0.5");
$('.btn-prev').css('opacity',"1");
});

$('.btn-prev').on('click',function(){ 
$('.responsive').slick('slickPrev');
$('.btn-prev').css('opacity',"0.5");
$('.btn-next').css('opacity',"1");
});

$('.responsive').on('afterChange', function(event, slick, currentSlide, nextSlide){
  
  $('.btn-prev').css('opacity',"1");
  $('.btn-next').css('opacity',"0.5");
  $(".responsive").slick("slickGoTo", 0, true);
});


var data2 = 
        [
        
          {id:"k",state:"",sale:"",img:"img/1.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe",  price1:"",price2:"",price3:"375p.", price4:"" },
          {id:"l",state:"",sale:"",img:"img/2.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"375p.", price4:"" },
          {id:"m",state:"",sale:"",img:"img/3.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"375p.", price4:"" },
          {id:"n",state:"",sale:"",img:"img/4.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"375p.", price4:"" },
          {id:"o",state:"",sale:"",img:"img/5.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"375p.", price4:"" },
          {id:"p",state:"",sale:"",img:"img/6.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"375p.", price4:"" },
          {id:"r",state:"",sale:"",img:"img/7.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"375p.", price4:"" },
          {id:"s",state:"",sale:"",img:"img/1.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"375p.", price4:"" },
          {id:"t",state:"",sale:"",img:"img/2.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"375p.", price4:"" },
          {id:"v",state:"",sale:"",img:"img/3.jpg",name:"Lorem ipsum dolor",info:"sit amet, consectetur adipisicing elit. Veniam illo enim vitae eum sapiente id repudiandae saepe", price1:"",price2:"",price3:"375p.", price4:"" }
      ];
     

$('#SliderImg').tmpl(data2).appendTo('#mySlider2');


$('.responsive2').slick({
  dots: false,
  infinite:true,
 
  speed:2000,
  slidesToShow: 7,
  slidesToScroll: 5,
  autoplay:false,
  pause: 8e3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});


$('.BTN-NEXT').on('click',function(){ 
$('.responsive2').slick('slickNext');
$('.BTN-NEXT').css('opacity',"0.5");
$('.BTN-PREV').css('opacity',"1");
});

$('.BTN-PREV').on('click',function(){ 
$('.responsive2').slick('slickPrev');
$('.BTN-PREV').css('opacity',"0.5");
$('.BTN-NEXT').css('opacity',"1");
});

$('.responsive2').on('afterChange', function(event, slick, currentSlide, nextSlide){
  
  $('.BTN-PREV').css('opacity',"1");
  $('.BTN-NEXT').css('opacity',"0.5");
  $(".responsive2").slick("slickGoTo", 0, true);
});

$( function() {
    $( "#tabs" ).tabs();
  } );

$( "#tabs" ).tabs({
  active: 0
});

var $s = $('select');
var optionTop = $s.find('[value="3"]').offset().top;
var selectTop = $s.offset().top;
$s.scrollTop($s.scrollTop() + (optionTop - selectTop));

$( function() {
    $( "#speed" ).selectmenu();
    $( "#files" ).selectmenu();
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
  } );

    $("#spinner").spinner('changing', function(e, newVal, oldVal) {
    $('#spinner-value').html(newVal);
  });
});

 $(".check").css("opacity","0.3");
    $("#nal").on("click",function(){
    	$(".check").css("opacity","1");
    	$(".check").on("click",function(){
    		 $(".check").css("opacity","0.3");
    	})
    });
    
$(".check-black").css("opacity","0.3");
    $("#del").on("click",function(){
    	$(".check-black").css("opacity","1");
    	$(".check-black").on("click",function(){
    		 $(".check-black").css("opacity","0.3");
    	})
    });
