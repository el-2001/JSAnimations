const rightFadeIn= document.querySelector('.right-fade-in');
const htmlScroll = document.querySelector('html');
const leftFadeIn = document.querySelector('.left-fade-in');

window.addEventListener('scroll', ()=>{
    console.log(htmlScroll.scrollTop);
   if(htmlScroll.scrollTop  > 40){
    rightFadeIn.style.transform = 'translateX(0%)';
    rightFadeIn.style.opacity = '1';
   }
   if(htmlScroll.scrollTop > 100){
    leftFadeIn.style.transform = 'translateX(0%)';
    leftFadeIn.style.opacity = '1';
   }
})