const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

// Add click event to each gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Get the thumbnail src
        const thumbnailSrc = this.src;
        
        // Remove '-thumbnail' from the src to get full-size image
        const fullSizeSrc = thumbnailSrc.replace('-thumbnail', '');
        
        // Set the lightbox image src
        lightboxImage.src = fullSizeSrc;
        
        // Show the lightbox
        lightbox.style.display = 'flex';
    });
});

// Close lightbox when close button is clicked
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking on the lightbox background
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});