const bannerText = document.getElementById('banner-text');
const left = document.querySelector('.arrow.left');
const right = document.querySelector('.arrow.right');

left.addEventListener('click', () => {
  bannerText.scrollBy({ left: -50, behavior: 'smooth' });
});

right.addEventListener('click', () => {
  bannerText.scrollBy({ left: 50, behavior: 'smooth' });
});