

// import BodyMessage from "@/src/body-message";
/*
export default function MainPage() {
  return (
    <p>Hi there! IDK what I am doing, but if you can see this, I'm somehow doing it correctly.</p>
    )
}
*/
const button = document.getElementById('change-text-button') as HTMLButtonElement;
const paragraph = document.getElementById('text-content') as HTMLParagraphElement;

// Add an event listener to the button that changes the text of the paragraph
button.addEventListener('click', () => {
    paragraph.textContent = "The content has been updated!";
