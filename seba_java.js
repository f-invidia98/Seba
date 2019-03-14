



var slideIndex = 0;
showSlides();

function showSlides() {

  var i;
  var slides = $(".slideshow")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";

  if (slideIndex==1) {
    $('.first_line').html('prima immagine');
    $('.second_line').html('spero');
  }
  if (slideIndex==2) {
    $('.first_line').html('seconda immagine');
    $('.second_line').html('vada');
  }
  if (slideIndex==3) {
    $('.first_line').html('terza immagine');
    $('.second_line').html('bene');
  }
  if (slideIndex==4) {
    $('.first_line').html('quarta immagine');
    $('.second_line').html('ciao');
  }
  if (slideIndex==5) {
    $('.first_line').html('quinta immagine');
    $('.second_line').html('seba');
  }


  setTimeout(showSlides, 200); // Change image every 2 seconds
}
