// Search bar filter
const searchInput = document.getElementById('searchInput');
const products = document.getElementsByClassName('product-card');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  Array.from(products).forEach(product => {
    const title = product.querySelector('h3').textContent.toLowerCase();
    product.style.display = title.includes(filter) ? '' : 'none';
  });
});
