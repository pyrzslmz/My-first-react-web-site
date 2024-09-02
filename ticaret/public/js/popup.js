window.onload=function() {
    document.getElementById('popup').style.display = 'block';
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
function selectGender(gender) {
    console.log('Selected gender:', gender);
    closePopup();
}

const contentTop = document.getElementById("content").offsetTop;
const contentBottom = contentTop + document.getElementById("content").offsetHeight;

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 50) {
        document.getElementById("menu").style.position = "fixed";
        document.getElementById("menu").style.top = "0";
    } else {
        document.getElementById("menu").style.position = "static";
    }

    if (document.body.scrollTop >= contentTop && document.body.scrollTop <= contentBottom) {
        document.getElementById("menu").classList.add("white-menu");
    } else {
        document.getElementById("menu").classList.remove("white-menu");
    }
}

