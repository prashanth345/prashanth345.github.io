let btn = document.getElementById('btn');
let input = document.getElementById('input');


let alertOne = document.getElementById('alert-1');




btn.onclick = function() {

    if (input.value == '') {
        alertOne.style.display = 'block';

    } else {
        let input = document.getElementById('input');
        let store = input.value;

        let addContent = document.getElementById('add-content');



        let span = document.createElement('span');
        span.classList.add('span');


        addContent.insertBefore(span, addContent.childNodes[0]);

        let h1 = document.createElement('h1');
        h1.innerHTML = store;
        h1.classList.add('hone');


        span.insertBefore(h1, span.childNodes[0]);



        input.value = '';


        let i = document.createElement('i');
        i.classList.add('fa');
        i.classList.add('fa-trash');

        span.insertBefore(i, span.childNodes[0]);


        i.onclick = function() {
            span.remove();
        }

        let checkbox = document.createElement('input');
        checkbox.classList.add('checkbox');
        checkbox.setAttribute("type", "checkbox");
        span.insertBefore(checkbox, span.childNodes[0]);
    }

}


let span = document.createElement('span');
let addContent = document.getElementById('add-content');
let clear = document.getElementById('clear-all');

clear.onclick = function() {

    alertTwo.style.display = 'block';



}

let alertTwo = document.getElementById('alert-2');

let cancel = document.getElementById('cancel');

let confirm = document.getElementById('confirm');

function collapseCancel() {
    alertTwo.style.display = 'none';

}


function collapseConfirm() {
    alertTwo.style.display = 'none';
    location.reload();
}

function collapseOk() {
    let alertOne = document.getElementById('alert-1');
    alertOne.style.display = 'none';
}