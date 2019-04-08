var slideIndex = 0;
var stateSlide=1;
var works_var = $(".works")
var works_l=works_var.length+1;
var text_var=1;
var numero_var=1;
var project_number = $(".project"+stateSlide);
var hide;

showSlides(project_number);
text();

function showSlides(slides) {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex=1;
    stateSlide++;
    text_var++;
    numero_var++;


    if (stateSlide==works_l) {
      stateSlide=1;
      text_var=1;
      numero_var=1;
    }
    text();
    slides = $(".project"+stateSlide)
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 400, slides);

}

function text(){
var f_line = $('.text_'+ text_var).html();
var f_line_2 = $('.text_2_'+ text_var).html();
$('.first_line').html(f_line);
$('.second_line').html(f_line_2);
$('.numero_div').html(numero_var);

}
