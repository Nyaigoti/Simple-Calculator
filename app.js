(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn__clear');
    let equal = document.querySelector('.btn__equal');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "Please enter";
        } else{
            let equal = eval(screen.value);
            screen.value = equal;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = '';
    })

})();