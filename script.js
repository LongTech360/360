document.addEventListener('DOMContentLoaded', () => {

    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle navigation menu on burger icon click
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Optional: Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
  const readMoreContainers = document.querySelectorAll('.read-more-container');

  readMoreContainers.forEach(container => {
    const readMoreBtn = container.querySelector('.read-more-btn');
    const hiddenText = container.querySelector('.hidden-text');

    // Only add functionality if the button and hidden text are present
    if (readMoreBtn && hiddenText) {
      readMoreBtn.addEventListener('click', () => {
        container.classList.toggle('expanded');

        if (container.classList.contains('expanded')) {
          readMoreBtn.textContent = 'Show Less';
        } else {
          readMoreBtn.textContent = 'Read More';
        }
      });
    }
  });
});
