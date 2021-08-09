
const hamberger = document.querySelector('.hamberger');
const times = document.querySelector('.times');
const mobilenav = document.querySelector('.mobile-nav');


hamberger.addEventListener('click', function(){
    mobilenav.classList.add('open');

});


times.addEventListener('click', function(){
    mobilenav.classList.remove('open');
});


