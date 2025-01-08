// recupero il bottone dal DOM

const shareBtn = document.querySelector('.share');
const cardFooter = document.querySelector('.card-footer');
const shareBox = document.getElementById('share');

// aggancio un ascoltatore di eventi al bottone
shareBtn.addEventListener('click', () => {
    // aggiungo e tolgo le classi necessarie per mostrare i link
    
    shareBox.classList.remove('d-none');
    shareBox.classList.add('d-flex');
})