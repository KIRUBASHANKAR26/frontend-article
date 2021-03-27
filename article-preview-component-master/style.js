const shareIcon =  document.querySelector('.share-icon');
const shareSocials =  document.querySelector('.icon-container');
shareIcon.addEventListener('click', (e) => {
    e.preventDefault();
    shareSocials.classList.toggle('display-social');
    shareIcon.classList.toggle('share-icon-light-bg');
})