// // sliders
// let slideContainers=[...document.querySelector('.slider')];
// let prevButtons=[...document.querySelector('.prev-button')];
// let nextButtons=[...document.querySelector('.next-button')];

// slideContainers.forEach((item,i)=>{
//     let containerDimensions=item.getBoundingClientRect();
//     let containerWidth=containerDimensions.width;

//     nextButtons[i].addEventListener('click',()=>{
//         item.scrollLeft += containerWidth - 200;
//     })

//     prevButtons[i].addEventListener('click',()=>{
//         item.scrollLeft -= containerWidth +200;
//     })
// });


// Video Cards
let cardContainers=[...document.querySelectorAll('.card-container')];
let preButtons=[...document.querySelectorAll('.pre-button')];
let nxtButtons=[...document.querySelectorAll('.nxt-button')];

cardContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtButtons[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth - 200;
    })

    preButtons[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth +200;
    })
});