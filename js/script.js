// recupero il bottone dal DOM

const shareBtn = document.querySelector('.share');
const cardFooter = document.querySelector('.card-footer');
const shareBox = document.getElementById('share');

// aggancio un ascoltatore di eventi al bottone
shareBtn.addEventListener('click', () => {
    // aggiungo e tolgo le classi necessarie per mostrare i link
    cardFooter.classList.remove('d-flex');
    cardFooter.classList.add('d-none');
    shareBox.classList.remove('d-none');
    shareBox.classList.add('d-flex');
})