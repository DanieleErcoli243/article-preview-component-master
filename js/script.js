// recupero il bottone dal DOM

const shareBtn = document.querySelector('.share');
const activeBtn = document.querySelector('.share-active');
const cardFooter = document.querySelector('.card-footer');
const shareBox = document.getElementById('share');

// aggancio un ascoltatore di eventi al bottone
shareBtn.addEventListener('click', () => {
    // controllo se aggiungere o meno le classi per mostrare i link

    if (shareBox.className === 'd-none') {
        shareBox.classList.remove('d-none');
        shareBox.classList.add('d-flex');

    } else if (shareBox.className === 'd-flex') {
        shareBox.classList.remove('d-flex');
        shareBox.classList.add('d-none');   
    }
})

// aggancio un ascoltatore di eventi al bottone nel box dei link

activeBtn.addEventListener('click', () => {
    shareBox.classList.remove('d-flex');
    shareBox.classList.add('d-none');  
})