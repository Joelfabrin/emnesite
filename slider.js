document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.media-slider-container');

  containers.forEach((container) => {
    const slider = container.querySelector('.media-slider');
    const prev = container.querySelector('.slider-arrow--prev');
    const next = container.querySelector('.slider-arrow--next');

    if (!slider || !prev || !next) {
      return;
    }

    const scrollDistance = () => slider.clientWidth * 0.9;

    const updateButtons = () => {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      prev.disabled = slider.scrollLeft <= 0;
      next.disabled = slider.scrollLeft >= maxScrollLeft - 1;
    };

    prev.addEventListener('click', () => {
      slider.scrollBy({ left: -scrollDistance(), behavior: 'smooth' });
    });

    next.addEventListener('click', () => {
      slider.scrollBy({ left: scrollDistance(), behavior: 'smooth' });
    });

    slider.addEventListener('scroll', () => {
      window.requestAnimationFrame(updateButtons);
    });

    window.addEventListener('resize', updateButtons);

    updateButtons();
  });
});
