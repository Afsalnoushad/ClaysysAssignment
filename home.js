    const slideshow = document.querySelector('.slideshow');
    const images = Array.from(slideshow.getElementsByTagName('img'));
    let currentSlide = 0;

    function showSlide() {
      images.forEach((image) => {
        image.style.display = 'none';
      });

      images[currentSlide].style.display = 'block';
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % images.length;
      showSlide();
    }

    function previousSlide() {
      currentSlide = (currentSlide - 1 + images.length) % images.length;
      showSlide();
    }

    showSlide(); 

    setInterval(nextSlide, 3000); 