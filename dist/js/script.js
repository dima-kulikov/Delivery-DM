const nav = document.querySelector('.page-nav');

const onEntry = (entries) => {
    entries.forEach(entry=>{
        // console.log(entry);

        if(entry.isIntersecting){
            console.log(entry.target);
            const sectionId = entry.target.getAttribute('id');
            console.log(sectionId);

            const currentActiveLink = nav.querySelector('.active');
            if(currentActiveLink){
                currentActiveLink.classList.remove('active');
            }

            const nextActiveLink = nav.querySelector(`a[href="#${sectionId}"]`);
            nextActiveLink.classList.add('active');

        }

    });
};

const options ={
    threshold: 1
}


const observer = new IntersectionObserver(onEntry, options);
const section = document.querySelectorAll('.section');

section.forEach(section =>{
    observer.observe(section);
});

// --ЗАГРУЗКА ЛЕЙЗИ ЛОАД

// const lazyload = target =>{
//     const options ={};
//     const io = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             console.log(entry);
//         })
//     }, options);

//     io.observe(target);
// };

// const images = document.querySelectorAll('.section img');


// images.forEach(image=>{
//     lazyload(image);
// })


// console.log('44444')

const accordeons = document.querySelectorAll('.section__info-tabs-item');
const replacementIcon = document.querySelectorAll('.section__open-btn');


accordeons.forEach(el => {
    el.addEventListener('click', (evt) => {
        el.classList.toggle('open');
        evt.currentTarget.querySelector('.section__open-btn').classList.toggle('section__open-btn__del-after');
    });
})
// replacementIcon.forEach(el => {
//     el.addEventListener('click', () => {
//         el.classList.toggle('section__open-btn__del-after');
//     });
// })