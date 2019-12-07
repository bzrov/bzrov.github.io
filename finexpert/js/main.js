

// собираем все якоря; 
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  header= document.querySelector('.header'),
  animationTime = 300,
  framesCount = 20,
  smoothScrollTo = (()=>{
    let timer, start, factor;

    return  (target, duration) => {
      const offset = window.pageYOffset,
          delta  = target - window.pageYOffset; // Y-offset difference
      duration = duration || 1000;              // default 1 sec animation
      start = Date.now();                       // get start time
      factor = 0;

      if( timer ) {
        clearInterval(timer); // stop any running animation
      }

      const  step = () =>{
        factor = (Date.now() - start) / duration; // get interpolation factor
        if( factor >= 1 ) {
          clearInterval(timer); // stop animation
          factor = 1;           // clip to max 1.0
        } 
        const y = factor * delta + offset;
        window.scrollBy(0, y - window.pageYOffset);
      }

      timer = setInterval(step, 10);
      return timer; // return the interval timer, so you can clear it elsewhere
    };
  })();

anchors.forEach((item)=>{
  // каждому якорю присваиваем обработчик события
  
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    anchors.forEach((item)=>item.classList.remove('link_active'))
    item.classList.add('link_active')
    
    let target
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    if(document.body.clientWidth>768){
      target = document.querySelector(item.getAttribute('href')).offsetTop-header.offsetHeight;;
    } else {
      target = document.querySelector(item.getAttribute('href')).offsetTop
    }
   
    
   
   
    smoothScrollTo(target, 500)
  });
});

const form_consulting= document.querySelector('.form-consulting'),
form = document.querySelector('.form'),
form_fields = Array.prototype.slice.call( form_consulting,0,-1 ),
form_btn =  document.querySelector('.form__btn')



form_consulting.addEventListener("submit", function(event) {
  let status=true;
  event.preventDefault();
  form.classList.remove('form_invalid')
  

  form_fields.forEach(field=>{
    field.parentNode.classList.remove('field_invalid')
    if (field.value == ""){
      status=false;
      field.parentNode.classList.add('field_invalid')
      form.classList.add('form_invalid')
    }
  })
  if(status){
    form_fields.forEach(field=>{
      field.value=""
    })
    form_btn.classList.add("btn_valid")
    form_btn.getElementsByTagName('span')[0].innerHTML="Заявка отправлена";
    setTimeout(()=>{
      form_btn.classList.remove("btn_valid")
      form_btn.getElementsByTagName('span')[0].innerHTML="Отправить заявку";
    },3000)
  }

});
const btn_menu_open=document.querySelector('.btn--menu-open'),
btn_menu_close=document.querySelector('.btn--menu-close')

btn_menu_open.addEventListener('click',()=>{
  header.classList.toggle('header_active');
  btn_menu_open.classList.toggle('btn--menu-close')
})
