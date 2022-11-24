let cardContainers=[...document.querySelectorAll('.card-container')];
let preButtons=[...document.querySelectorAll('.pre-button')];
let nextButtons=[...document.querySelectorAll('.nxt-button')];

cardContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nextButtons[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth - 200;
    })

    preButtons[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth +200;
    })
});