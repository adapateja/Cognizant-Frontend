
const thumbnails = document.querySelectorAll('.thumbnail');


const selectedImage = document.querySelector('.selected-image');


thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        
        selectedImage.src = this.src;
    });
});
