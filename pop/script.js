


document.getElementById('openWindow').addEventListener('click', 
function() {
  document.getElementById('modal').style.display = 'block';
});

document.querySelector('.door').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
});
