const nav = document.querySelector('.page-nav');

const onEntry = (entries) => {
    entries.forEach(entry=>{
        // console.log(entry);

        if(entry.isIntersecting){
            // console.log(entry.target);
            const sectionId = entry.target.getAttribute('id');
            // console.log(sectionId);

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


const accordeons = document.querySelectorAll('.info-tabs-item__title');
const replacementIcon = document.querySelectorAll('.section__open-btn');


function headerClick () {
    // el.classList.toggle('open');
    console.log(this);
    console.log(this.parentElement);
    this.parentElement.classList.toggle('open');
    this.parentElement.querySelector('.section__open-btn').classList.toggle('section__open-btn__del-after');
    this.preventDefault()
};

accordeons.forEach(el => {
    el.addEventListener('click', headerClick);
})
    

console.log(document.querySelector('.delivery-padding').parentElement);

// Добавление к части ссылки страница

window.location.hash="js";