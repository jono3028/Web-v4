var booth = ['11','19','23','27','29','35','40','42','43','53','55','61','73','79','87','88','95'];

$(document).on('click','.wireButton',function(){
  $('#home').fadeOut();
  var gallery = $(this).attr('link');
  var content = '';
  if (gallery == 'booth'){
    for (var x = 0; x < 12; x++){
      content += '<img class="galleryPhoto" src="img/booth/IMG_00' + booth[x] + '.JPG" link="' + x + '">';
    }
  }
  $('.gallery').html(content);
  $('#gallery').delay(500).fadeIn();
});
$(document).on('click','.gallery img', function(){
  $('.modalPhoto').attr('src',$(this).attr('src'));
  $('.modalPhoto').attr('link',$(this).attr('link'));
  $('#gallery').fadeOut();
  $('#modal').delay(500).fadeIn();
})
$(document).on('click','.modal p',function(){
  var move = $(this).attr('class');
  var current = Number($('.modalPhoto').attr('link'));
  if ($(this).attr('class') == 'next'){
    if (current == (booth.length -1)){current = -1};
    $('.modalPhoto').attr('src','img/booth/IMG_00' + booth[current+1] + '.JPG');
    $('.modalPhoto').attr('link', current + 1);
  }
  else {
    if (current == 0){current = booth.length};
    $('.modalPhoto').attr('src','img/booth/IMG_00' + booth[current-1] + '.JPG');
    $('.modalPhoto').attr('link', current - 1);
  }
});
$(document).on('click','.close',function(){
  $(this).parent().fadeOut();
  $('#'+ $(this).attr('link')).delay(500).fadeIn();
})
