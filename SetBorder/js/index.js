(function(){


    //Pegando elementos html
    const inputTopLeft = document.querySelector('#top-left');
    const inputTopRight = document.querySelector('#top-right');
    const inputBottomLeft = document.querySelector('#bottom-left');
    const inputBottomRight = document.querySelector('#bottom-right');
    const inputAllBorder = document.querySelector('#allBorder')
    var div = document.querySelector('.painel');
    var btn_reset = document.querySelector('.btn_reset')
    
    var valorTopLeft = document.querySelector('.valorTopLeft');
    var valorTopRight = document.querySelector('.valorTopRight');
    var valorBottomLeft = document.querySelector('.valorBottomLeft');
    var valorBottomRight = document.querySelector('.valorBottomRight');

    var valorTopLefts = document.querySelector('.valorTopLefts');
    var valorTopRights = document.querySelector('.valorTopRights');
    var valorBottomLefts = document.querySelector('.valorBottomLefts');
    var valorBottomRights = document.querySelector('.valorBottomRights');
    var valorAllBorder = document.querySelector('.valorAllBorder')

    inputTopLeft.addEventListener('change', () => {
        div.style.borderTopLeftRadius = `${inputTopLeft.value}px`;
        valorTopLeft.textContent = inputTopLeft.value;
        valorTopLefts.textContent = inputTopLeft.value;
    });

    inputTopRight.addEventListener('change', () => {
        div.style.borderTopRightRadius = `${inputTopRight.value}px`;
        valorTopRight.textContent = inputTopRight.value;
        valorTopRights.textContent = inputTopRight.value;
    });

    inputBottomLeft.addEventListener('change', () => {
        div.style.borderBottomLeftRadius = `${inputBottomLeft.value}px`;
        valorBottomLeft.textContent = inputBottomLeft.value;
        valorBottomLefts.textContent = inputBottomLeft.value;
    });

    inputBottomRight.addEventListener('change', () => {
        div.style.borderBottomRightRadius = `${inputBottomRight.value}px`;
        valorBottomRight.textContent = inputBottomRight.value;
        valorBottomRights.textContent = inputBottomRight.value;
    });

    inputAllBorder.addEventListener('change', () => {
        div.style.borderRadius = `${inputAllBorder.value}px`;
        valorAllBorder.textContent = inputAllBorder.value;
    })

    btn_reset.addEventListener('click', () => {
        div.style.borderTopLeftRadius = `0px`;
        valorTopLeft.textContent = 0;
        valorTopLefts.textContent = 0;

        div.style.borderTopRightRadius = `0px`;
        valorTopRight.textContent = 0;
        valorTopRights.textContent = 0;

        div.style.borderBottomLeftRadius = `0px`;
        valorBottomLeft.textContent = 0;
        valorBottomLefts.textContent = 0;

        div.style.borderBottomRightRadius = `0px`;
        valorBottomRight.textContent = 0;
        valorBottomRights.textContent = 0;

        inputAllBorder.value = 0
        div.style.borderRadius = `0px`;
        valorAllBorder.textContent = 0;

    })

})();