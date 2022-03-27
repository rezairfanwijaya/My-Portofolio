// get id toogle sidebar
var toogle = document.getElementById('toogle-side');
// event
toogle.addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'block';
});

// var toogelClose = document.getElementById('toogle-close');
// toogelClose.addEventListener('click', function () {
//     var sidebar = document.getElementById('sidebar');
//     sidebar.classList.remove('active');
// });