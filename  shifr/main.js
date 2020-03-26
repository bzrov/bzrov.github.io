const shifr_input = document.querySelector('.shifr_input')
const shifr_btn = document.querySelector('.shifr_btn')
const shifr_text = document.querySelector('.shifr_text')
const deshifr_input = document.querySelector('.deshifr_input')
const deshifr_btn = document.querySelector('.deshifr_btn')
const deshifr_text = document.querySelector('.deshifr_text')
const vijiner = document.querySelector('.vijiner')
const vijiner_text = document.querySelector('.vijiner_text')
const devijiner = document.querySelector('.devijiner')
const devijiner_text = document.querySelector('.devijiner_text')
let word = 'personal computer'
word = word.replace(/\s+/g,'')
let shifr = 'file'
let word_shifr ="";
let deshifr_word=""
let arr_main = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_f=     ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e'];
let arr_i=['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let arr_l=['l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
let arr_e =['e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd'];

vijiner.addEventListener('click',function(){
    let counter =0
    for(let i=0;i<word.length;i++){
        let index_of_letter = arr_main.indexOf(word[i])
        if(counter==0){
            word_shifr += arr_f[index_of_letter]
        }
        if(counter==1){
            word_shifr += arr_i[index_of_letter]
        }
        if(counter==2){
            word_shifr += arr_l[index_of_letter]
        }
        if(counter==3){
            word_shifr += arr_e[index_of_letter]
            counter = -1
        }
        counter+=1
    }
    vijiner_text.textContent= word_shifr
})

devijiner.addEventListener('click',function(){
let counterdef =0
for(let i=0;i<word_shifr.length;i++){
    let index_of_deletter; 
    if(counterdef==0){
        index_of_deletter = arr_f.indexOf(word_shifr[i])
        deshifr_word += arr_main[index_of_deletter]
    }
    if(counterdef==1){
        index_of_deletter = arr_i.indexOf(word_shifr[i])
        deshifr_word += arr_main[index_of_deletter]
    }
    if(counterdef==2){
        index_of_deletter = arr_l.indexOf(word_shifr[i])
        deshifr_word += arr_main[index_of_deletter]
    }
    if(counterdef==3){
        index_of_deletter = arr_e.indexOf(word_shifr[i])
        deshifr_word += arr_main[index_of_deletter]
        counterdef = -1
    }
    counterdef+=1
    devijiner_text.textContent= deshifr_word
}
})

 

var kv = [
    ["a", "b", "c", "d", "e"],
    ["g", "e", "i", "j", "k"],
    ['m', 'n', 'o', 'p', 'q'],
    ['r', 's', 't', 'u', 'v'],
    ['w', 'x', 'y', 'z', 'f'],
    ];

function pol_encode(str) {
    var idx;
    var res = "";
    str = str.toLowerCase();
    for (var j = 0; j < str.length; j++) {
        for (var i = 0; i < kv.length; i++) {
            idx = kv[i].indexOf(str.charAt(j));
            if (idx >= 0) {
                res += " " + i + "" + idx;
                break;
            }
        }
    }
    return res;
}

function  pol_decode (str) {
    var row, col;
    var res = "";
    var ar = str.split(" ");
    for (var j = 0; j < ar.length; j++) {
        if (ar[j].length == 2) {
            row = parseInt(ar[j].charAt(0));
            col = parseInt(ar[j].charAt(1));
            res += kv[row][col];
        }
    }
    return res;
}

shifr_btn.addEventListener('click',function(){
    const input_value = shifr_input.value;
    shifr_text.textContent= pol_encode(input_value)
    deshifr_input.value = pol_encode(input_value);
})

deshifr_btn.addEventListener('click',function(){
    const input_value = deshifr_input.value;
    deshifr_text.textContent= pol_decode(input_value)
})