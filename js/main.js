const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq =>{
    faq.addEventListener('click', function(){
            faq.classList.toggle('show')
            faq.classList.toggle('imgrotate')
    })
})