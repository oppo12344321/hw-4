document.getElementById('restWork').addEventListener('click', 
function () {
    setTimeout(function () {
        let circle = document.createElement('div');
        circle.className = 'circle';
        let flexDiv = document.querySelector('.rest');
        flexDiv.appendChild(circle);
    }, 1000); 
});