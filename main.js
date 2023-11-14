let input = document.querySelector('input');

input.addEventListener('click', function(event) {
    event.target.style.outline = '0'
})
input.addEventListener('focus', function(event) {
    event.target.style.outline = '0';
})


let list = document.querySelector('.list');
let btn = document.querySelector('.addbtn')
let noyes = document.querySelector('.sil');
let firstinput = document.querySelector('input');
firstinput.addEventListener('blur', _ => {
    firstinput.setAttribute("value", firstinput.value.trim());
})

function deletefunc(event) {
    if (list.children.length==1){
        let len=document.querySelector("input")
        len.value=""
    }
    else{
        event.target.parentElement.remove()
    }
}
function addlistitem() {
    let bool = false
    let inp = document.querySelectorAll("input")
    inp.forEach(item =>{
        console.log((item.value.trim().replace(/[" "]/ig,"")).length)
    
        if ((item.value.trim()).length !=0){
            bool = true;
        }
        else{
            bool = false;
        }
       
    })
    if (bool){
        list.innerHTML += `<div class="input">
        <input type="text"  name="" id="">
        <button class="sil"></button>
        </div>`;
        list.style.outline = '0'
    }
    let deletebtnnew = document.querySelectorAll('.sil');
    deletebtnnew.forEach(val => {
        val.addEventListener('click', deletefunc)
    })


    let inputs = document.querySelectorAll('input');
    inputs.forEach(val => {
        val.addEventListener('click', function(event) {
            event.target.style.outline = '0'
        })
        val.addEventListener('focus', function(event) {
            event.target.style.outline = '0';
        })
        val.addEventListener('blur', _ => {
            val.setAttribute("value", val.value.trim());
        })
    })


    let inpdiv = document.querySelectorAll('.input');
    inpdiv.forEach(el => {
        el.style.border = 'none'
    })
    list.style.border = '1px solid #C4C4C4';
}

btn.addEventListener('click', addlistitem);


// SORT
let arr = [];
let counter = 0;
let sortbtn = document.querySelector('.sortbtn');
sortbtn.addEventListener('click', sorter);
sortbtn.addEventListener('click', demo);
sortbtn.addEventListener('click', firstsort);

function demo() {
    let deletebtnnew = document.querySelectorAll('.sil');
    deletebtnnew.forEach(val => {
        val.addEventListener('click', deletefunc)
    })
}

function firstsort() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(el => {

        el.addEventListener('click', function(event) {
            event.target.style.outline = '0'

        })
        el.addEventListener('focus', function(event) {
            event.target.style.outline = '0';
        })

        el.addEventListener('blur', _ => {
            el.setAttribute("value", el.value.trim());
        })
    })

    let inpdiv = document.querySelectorAll('.input');
    inpdiv.forEach(el => {
        el.style.border = 'none'
    })
    list.style.border = '1px solid #C4C4C4';
}


function sorter() {

    let allist = document.querySelectorAll('input');

    allist.forEach(el => arr.push(el.value.trim()))
    console.log(arr);
    list.innerHTML = '';

    if (counter == 0) {
        domcreator(counter);
        counter++;
        azalart.src = "assets/down.png"
    } else {
        domcreator(counter);
        counter--;
        azalart.src = "assets/up.png"
    }
    arr = [];
}

function domcreator(el) {
    if (el == 0) {
        let element = ''
        arr.sort(function(a, b) {
            if ((a!="")&&(b!="")){
                if (a > b) {
                    return 1;
                } else if (a < b) {
                    return -1;
                } else {
                    return 0;
                }
            }
        });

        arr.map(c => {
            element += `<div class="input">
            <input type="text" name="" id="" value="${c}">
            <button class="sil"></button>
        </div>`;
        });
        list.innerHTML = element
        console.log(arr);

    } else {
        let element = ''

        arr.sort(function(a, b) {
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            } else {
                return 0;
            }
        });
        arr.map(c => {
            element += `<div class="input">
            <input type="text" name="" id="" value="${c}">
            <button class="sil"></button>
        </div>`;

        });
        list.innerHTML = element
        console.log(arr);
    }
}

//Hover
let azalart = document.querySelector('.sort1')
sortbtn.addEventListener('mouseover', _ => {
    var img = document.getElementById('foto').getAttribute('src');
    if (img == "assets/down.png") {
        azalart.src = 'assets/down bold.png'
    } else if (img == "assets/up.png") {
        azalart.src = 'assets/up bold.png'
    }
})
sortbtn.addEventListener('mouseout', _ => {
    var img = document.getElementById('foto').getAttribute('src');

    if (img == "assets/down bold.png") {
        azalart.src = 'assets/down.png'

    } else if (img == "assets/up bold.png") {
        azalart.src = 'assets/up.png'

    }
})