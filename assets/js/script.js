// get id toogle sidebar
var toogle = document.getElementById('toogle-side');
// event
toogle.addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'block';
});

var close = document.getElementById('toogle-close');
close.addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
});

// var toogelClose = document.getElementById('toogle-close');
// toogelClose.addEventListener('click', function () {
//     var sidebar = document.getElementById('sidebar');
//     sidebar.classList.remove('active');
// });