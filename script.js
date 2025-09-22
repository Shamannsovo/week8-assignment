document.addEventListener('DOMContentLoaded', function () {
  // Slider
  const images = ['images/slide1.jpg','images/slide2.jpg','images/slide3.jpg'];
  let idx = 0;
  const sliderImage = document.getElementById('slider-image');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  function show(i) {
    if (!sliderImage) return;
    sliderImage.src = images[i];
  }

  if (nextBtn) nextBtn.addEventListener('click', function () {
    idx = (idx + 1) % images.length;
    show(idx);
  });
  if (prevBtn) prevBtn.addEventListener('click', function () {
    idx = (idx - 1 + images.length) % images.length;
    show(idx);
  });

  // auto-advance (safe: will do nothing if sliderImage not present)
  if (sliderImage) {
    setInterval(function () {
      idx = (idx + 1) % images.length;
      show(idx);
    }, 4000);
  }

  // Form validation
  window.validateForm = function () {
    const name = (document.getElementById('name') || {}).value || '';
    const email = (document.getElementById('email') || {}).value || '';
    const message = (document.getElementById('message') || {}).value || '';
    const result = document.getElementById('formResult');

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields.');
      return false;
    }

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (result) result.textContent = 'Thank you! Your message is validated (demo).';
    alert('Form looks good — demo only (no server).');
    // return false to keep user on the page (since no backend)
    return false;
  };
});
