const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const MAX_LENGTH = 50;

textInput.addEventListener('input', function() {
    // 1. Trim extra input if it exceeds 50 characters (JavaScript-only solution)
    if (this.value.length > MAX_LENGTH) {
        this.value = this.value.substring(0, MAX_LENGTH);
    }
    
    // 2. Update the counter text dynamically
    charCount.textContent = `Character Count: ${this.value.length}/${MAX_LENGTH}`;
    
    // 3. Apply red color class if the limit is reached (>= 50)
    if (this.value.length >= MAX_LENGTH) {
        charCount.classList.add('limit-reached');
    } else {
        charCount.classList.remove('limit-reached');
    }
});