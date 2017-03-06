var booth = ['img/booth/IMG_00','11','19','23','27','29','35','40','42','43','53','55','61','73','79','87','88','95'];
var pro = ['img/pro/EO4I8','307','325','386','410','433','456','508','514','532','552','618','644'];
var gallery;
var img;
$(document).on('click','.wireButton',function(){
  $('#home').fadeOut(500);
  gallery = $(this).attr('link');
  if (gallery === 'booth'){
    img = booth;
    $('body').css('background-image','url("img/BG_imageOne.JPG")');
  }
  else {
    img = pro;
    $('body').css('background-image','url("img/EO4I8519.JPG")');
  }
  $('.gallery').html('');
  for (var x = 1; x <= 12; x++){
    $('.gallery').append('<img class="galleryPhoto" id="' + x +'">');
    $('#'+ x).attr('src', img[0] + img[x] + '.JPG');
    }
  $('#gallery').delay(500).fadeIn();
});
$(document).on('click','.gallery img', function(){
  $('.modalPhoto').attr('src',$(this).attr('src'));
  $('.modalPhoto').attr('id',$(this).attr('id'));
  $('#gallery').fadeOut();
  $('#modal').delay(500).fadeIn();
})
$(document).on('click','.modal p',function(){
  var move = $(this).attr('class');
  var current = Number($('.modalPhoto').attr('id'));
  if ($(this).attr('class') == 'next'){
    if (current == (img.length -1)){current = 0};
    $('.modalPhoto').attr('src',img[0] + img[current+1] + '.JPG');
    $('.modalPhoto').attr('id', current + 1);
  }
  else {
    if (current == 1){current = img.length};
    $('.modalPhoto').attr('src',img[0] + img[current-1] + '.JPG');
    $('.modalPhoto').attr('id', current - 1);
  }
});
$(document).on('click','.close',function(){
  $(this).parent().fadeOut();
  $('#'+ $(this).attr('link')).delay(500).fadeIn();
})
