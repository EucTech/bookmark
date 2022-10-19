const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq =>{
    faq.addEventListener('click', function(){
            faq.classList.toggle('show')
            faq.classList.toggle('imgrotate')
    })
})



const navlink = document.querySelector('navlinks')
const navlinka = document.querySelector('navlink a')
const navopen = document.querySelector('open')
const navclose = document.querySelector('close')


function navopen(){
    navlink.style.top ="40%";
    navopen.style.display = "none"
    navclose.style.display = "block"
}

function navclose(){
    navlink.style.top ="-40%";
    navopen.style.display = "block"
    navclose.style.display = "none"
}

navlinka .forEach(navLink => {
    navLink.addEventListener('click', function(){
      closeNav()
    })
  })
