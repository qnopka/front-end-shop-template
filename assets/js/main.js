let addToCartButton = document.querySelector('.main-section');
let cartCounterIcon = document.querySelector('#cart-counter');
let cartCounter = 0;
let cartPrice = 0;

let btnClick = (e) => {
    let target = e.target;

    if (target && target.matches('button.item-buttons-action__cart')) {
        cartCounterIcon.innerHTML = `${++cartCounter}`;

        if (cartCounter === 1) cartCounterIcon.style.display = 'inline-block';

        const itemPrice = +target
            .parentElement
            .previousElementSibling
            .innerHTML
            .replace(/^\$(\d+)\s\D+(\d+).*$/u, '$1.$2');

        cartPrice = cartPrice + itemPrice;
        let buttonInnerTextChange = target.innerHTML;

        target.innerHTML = `Added ${cartPrice.toFixed(2)} $`;

        addToCartButton.removeEventListener('click', btnClick);
        target.disabled = true;

        setTimeout(() => {
            target.innerHTML = buttonInnerTextChange;
            target.disabled = false;
            addToCartButton.addEventListener('click', btnClick);
        }, 1000);
    }
};

addToCartButton.addEventListener('click', btnClick);
