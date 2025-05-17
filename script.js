const sections = document.querySelectorAll('.section');

function handleScroll() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top >= -window.innerHeight / 2 && rect.top <= window.innerHeight / 2;

    if (isVisible) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

document.querySelector('.container').addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
