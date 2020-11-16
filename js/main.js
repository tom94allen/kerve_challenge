const scrWidth = screen.width;
const deskSpan = document.getElementsByClassName('desk-span');
const mobSpan = document.getElementsByClassName('mob-span');

if(scrWidth <= 768)
{
    for(var i = 0; i < deskSpan.length; i++)
    {
        deskSpan[i].classList.add('hidden');
    }
    for(var i = 0; i < mobSpan.length; i++)
    {
        mobSpan[i].classList.remove('hidden');
    }    
}else{
    for(var i = 0; i < deskSpan.length; i++)
    {
        deskSpan[i].className = 'desk-span';
    }
    for(var i = 0; i < mobSpan.length; i++)
    {
        mobSpan[i].className = 'mob-span hidden'
    }
}


function expandMobNav(){
    const iconBtn = document.getElementById('icon');
    const mainNav = document.getElementById('main-nav');
    const navBar = document.getElementById('navBar');
    const icon = document.getElementById('icon-btn');
    const contactMob = document.getElementById('contact-mob');

    if(mainNav.className === 'nav-cont' && navBar.className === 'nav-bar')
    {
        contactMob.classList.remove('hidden');
        mainNav.className += " responsive";
        navBar.className += " responsive";
        icon.className = "fas fa-times";
    }else{
        contactMob.className += " hidden";
        mainNav.className = "nav-cont";
        navBar.className = "nav-bar";
        icon.className = "fa fa-bars";
    }
    
}

function scrollDown(){
    const compHeading = document.getElementById('comp-heading');
    compHeading.scrollIntoView();
}