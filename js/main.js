const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq =>{
    faq.addEventListener('click', function(){
            faq.classList.toggle('show')
            faq.classList.toggle('imgrotate')
    })
})



const navlink = document.querySelector('.navlinks')
const navlinka = document.querySelectorAll('.navlinks a')
const navOpen = document.querySelector('.open')
const navClose = document.querySelector('.close')


function navopen(){
    navlink.style.top ="0%";
    navOpen.style.display = "none"
    navClose.style.display = "block"
}

function navclose(){
    navlink.style.top ="-120%";
    navOpen.style.display = "block"
    navClose.style.display = "none"
}

navlinka .forEach(navLink => {
    navLink.addEventListener('click', function(){
        navclose()
    })
  })
