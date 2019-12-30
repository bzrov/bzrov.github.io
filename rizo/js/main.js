const 
word_stroke             = document.querySelectorAll('.word_stroke'),
color_changer           = document.querySelector('.color_changer'),
blue                    = "#3f49cd",
orange                  = "#cda33f",
pink                    = "#ff42b1",
purpl                   = "#baacd4",
yellow                  = "#fff47f",
red                     = "#d5213b",
green                   = "#7fd4ac",
card                    = document.querySelector('.card')
card_form               = document.querySelector('.card__form'),
card_total_cost         = document.querySelector('.card__total-cost'),
card_unit_cost          = document.querySelector('.card__unit-cost'),
card_type               = document.getElementById('type__select'),
card_format             = document.getElementById('format__select'),
card_paper              = document.getElementById('paper__select'),
card_pages              = document.querySelector('.pages__input'),
card_edition            = document.querySelector('.edition__input'),
card_colors_input       = Array.prototype.slice.call(document.querySelectorAll('.colors__input') , 0 ),
card_colors             = document.querySelectorAll('.colors__color'),
btn_close_popup         = document.querySelector('.btn_close-popup'),
calculate_form          = document.querySelector('.calculate__form'),
calculate_input         = document.querySelector('.calculate__input'),
card_contact_form       = document.querySelector('.form__contact'),
card_contact_email      = document.getElementById('email__input'),
card_contact_phone      = document.getElementById('phone__input'),
card_contact_btn        = document.querySelector('.contact__btn'),
cursor_img              = document.querySelector('.img_hover'),
zine                    = document.querySelector('.zine'),
book                    = document.querySelector('.book'),
poster                  = document.querySelector('.poster'),
flyer                   = document.querySelector('.flyer'),
postcard                = document.querySelector('.postcard'),
leaflet                 = document.querySelector('.leaflet'),
btn_open_popup          = document.querySelector('.about__btn'),

arr_material            =[zine,book,postcard,poster,leaflet,flyer],
arr_card                = [card_type,card_format,card_pages,card_colors_input,card_paper,card_edition], // массив упорядочен,порядок не менять!
colors                  = [blue,orange,pink,green,red,yellow,purpl],

fields = {
    type: 0,
    format: 0,
    pages: 0,
    colors: 0,
    paper: 0,
    edition: 0,
},

checkNegativeNums = (num) =>{
    if (num<=0){
        
        return false
    }
    return true
};

let counter     =0

color_changer.addEventListener('mouseover',()=>{
   
    (counter > colors.length-1)&&(counter=0);
    word_stroke.forEach((word)=>{
        word.style.backgroundImage = `linear-gradient(to right,${colors[counter]}, ${colors[counter]})`
    })
    counter++;
})




card_form.addEventListener('change',(e)=>{
    const target = e.target
    updateCardTotal(target)

})



const updateCardTotal = (target) =>{
    Array.isArray(target)&&(target=target[0]);

    target_field = target.dataset.field;
   
       if (target_field ==="pages"){
            checkNegativeNums(target.value) ? (fields.pages = target.value,target.classList.remove('input_invalid') ) : target.classList.add('input_invalid')
        } else if (target_field ==="edition"){
            checkNegativeNums(target.value) ? (fields.edition = target.value,target.classList.remove('input_invalid')) : target.classList.add('input_invalid')
        } else if (target_field ==="colors"){
            let counter=0;
            card_colors.forEach((color)=>{
                color.querySelector('.colors__input').checked && counter++
            })
            
            checkNegativeNums(counter) && (fields.colors = counter*15)

        } else if (target_field === "type"){
            fields.type = target.options[target.selectedIndex].dataset.cost   
        } else if (target_field === "format"){
            fields.format = target.options[target.selectedIndex].dataset.cost   
        } else if (target_field === "paper"){
            fields.paper = target.options[target.selectedIndex].dataset.cost   
        }
         
       return getCardTotal() 
}
const getCardTotal = () =>{
    const amount_for_one = +fields.type + +fields.format + +fields.pages*10 + +fields.colors + +fields.paper,
    amount_total = amount_for_one * +fields.edition;
    card_total_cost.innerHTML=amount_total;
    card_unit_cost.innerHTML=amount_for_one;
}
const onLoad = (arr) =>{
    arr.forEach((item)=>{
        updateCardTotal(item)
    })
}



calculate_form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input_value = calculate_input.value.toLowerCase();
    if (input_value===""){
        calculate_form.classList.add("form_invalid")
    } else {
        document.body.style.overflowY="hidden";
        card.classList.remove('hide')
        card.classList.add('show')
        calculate_form.classList.remove("form_invalid")
        const arr=[
            ["зин","книга","лифлет","постер","листовка","открытка"],
            ["а7","а6","а5","а4","а3"],
            ["стр","страниц","страницы","с"],
            ["черный","розовый","синий","зеленый","желтый","фиолетовый","оранжевый","красный"],
            ["газетная","офсетная","мелованная","офисная","дизайнерская"],
            ["штук","шт","штуки","штука"]
        ]
        card_colors_input.forEach((color_input)=>{
            color_input.checked=false
        })
        arr.forEach((item,idx)=>{
            item.forEach((word,word_idx)=>{
                if (input_value.indexOf(word) >= 0){
                    if (idx === 2 || idx === 5){
                        const input_value_arr = input_value.split(" ")
                        input_value_arr.indexOf(word) > 0  && (arr_card[idx].value = input_value_arr[input_value_arr.indexOf(word) - 1])
                    } else if(idx===3){
                        card_colors_input.forEach((color_input)=>{ 
                            word === color_input.dataset.color&&(color_input.checked=true); 
                        })
                    } else {
                       arr_card[idx].options[word_idx].setAttribute("selected", "selected")
                    };
                } 
            })
        })
    }

})

btn_open_popup.addEventListener('click',()=>{
    document.body.style.overflowY="hidden";
    card.classList.remove('hide')
    card.classList.add('show')
})
btn_close_popup.addEventListener('click',()=>{
    card.classList.remove('show')
    document.body.style.overflowY="scroll";
    card.classList.add('hide')
})



card_contact_form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const contact_email_value = card_contact_email .value,
    contact_phone_value =  card_contact_phone.value;
    if (!checkNegativeNums(card_edition.value) || !checkNegativeNums(card_pages.value) || card_pages.value === "" || card_edition.value === "" || (contact_email_value === "" && contact_phone_value == "")){

        contact_email_value === "" && card_contact_email.classList.add('input_invalid');
        contact_phone_value === "" && card_contact_phone .classList.add('input_invalid');
        card_contact_btn.classList.add('btn__invalid');
        setTimeout(()=>{
            card_contact_btn.classList.remove('btn__success');

        },3000)
    } else {
        card_contact_email.classList.remove('input_invalid');
        card_contact_phone .classList.remove('input_invalid');
        card_contact_btn.classList.remove('btn__invalid');
        card_contact_btn.classList.add('btn__success');
        card_contact_btn.getElementsByTagName('span')[0].innerHTML="успешно"
        setTimeout(()=>{
            card_contact_btn.classList.remove('btn__success');
            card_contact_btn.getElementsByTagName('span')[0].innerHTML="заказать";
        },5000)
        
    }
    if (!(contact_email_value === "" && contact_phone_value == "")){
        card_contact_email.classList.remove('input_invalid');
        card_contact_phone .classList.remove('input_invalid');
    }
})


if (window.innerWidth>968){
    arr_material.forEach((item)=>{
        item.addEventListener('mousemove', e => {
            cursor_img.src = `./img/${item.dataset.material}.jpg`;
            cursor_img.classList.add("block");
            cursor_img.setAttribute("style", "transform: translateX("+(e.pageX - 10)+"px) translateY("+(e.pageY + 50)+"px);")
        })
        item.addEventListener('mouseout', e => {
            cursor_img.classList.remove("block");
        })
    })
}






window.onload = ()=>onLoad(arr_card)
