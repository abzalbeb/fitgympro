function click_nav() {
    document.querySelector(".click_nav").classList.toggle("click_nav_1")
}

function openModal(){
    document.querySelector('.modal-container').style=`display:block`
    document.querySelector('body').style=`overflow: hidden;`
    document.querySelector('.container-form').style=`display:block`
}
function closeModal(){
    document.querySelector('.modal-container').style=`display:none`
    document.querySelector('body').style=`overflow: scroll;`
    document.querySelector('.container-form').style=`display:none`
}
document.querySelector('#accept-cookies').addEventListener('click', function () {
    document.querySelector('#cookie-bar').style = 'position: relative; !important';
  });