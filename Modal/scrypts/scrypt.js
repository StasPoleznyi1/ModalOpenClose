const modalController = ({modal, btnOpen, btnClose}) =>
{
    const buttonElems = document.querySelectorAll(btnOpen);
const modalElem = document.querySelector(modal);

modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
`;
const closeModal = event => {
    const target = event.target;

    if (target === modalElem || target.closest(btnClose)
        || event.code === 'Escape'
    ) {
        modalElem.style.visibility = 'hidden';
        modalElem.style.opacity = 0;
        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
        }, 300)
    }
}
const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', closeModal);

};

buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
});

modalElem.addEventListener('click', closeModal);
}
modalController({
    modal: '.modal1',
    btnOpen: '.section__button1',
    btnClose: '.modal__close'
});
modalController({
    modal: '.modal2',
    btnOpen: '.section__button2',
    btnClose: '.modal__close'
});