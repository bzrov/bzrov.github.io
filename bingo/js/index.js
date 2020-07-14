const switch_theme_btn = document.querySelector('.card__content-btn')
const body = document.body
const create_ripple = (parent_node)=>{
    const ripple = document.createElement('span')
    ripple.classList.add('ripple')
    ripple.style.left = (event.clientX - event.currentTarget.offsetLeft) + "px";
    ripple.style.top = (event.clientY - event.currentTarget.offsetTop) + "px";
    
    parent_node.appendChild(ripple)

    setTimeout(()=>{
        ripple.remove()
    },1000)
}

switch_theme_btn.addEventListener('click', (event)=>{
    body.classList.toggle('theme_default')
    body.classList.toggle('theme_dark')

    create_ripple(switch_theme_btn)
    
})