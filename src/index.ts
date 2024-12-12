
const button = document.getElementById('change-text-button') as HTMLButtonElement;
const paragraph = document.getElementById('text-content') as HTMLParagraphElement;

// Add an event listener to the button that changes the text of the paragraph
button.addEventListener('click', () => {
    paragraph.textContent = "The content has been updated!";
