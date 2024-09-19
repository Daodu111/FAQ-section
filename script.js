// Select all the toggle icons (SVGs)
const toggleIcons = document.querySelectorAll('.toggle-icon');
// Loop through each icon
toggleIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Get the associated answer (next sibling to the .top-arr div)
    const answer = icon.parentElement.nextElementSibling;
    // Toggle the answer's display
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';  // Show the answer
      icon.innerHTML = '<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>';
    } else {
      answer.style.display = 'none';   // Hide the answer
      icon.innerHTML = '<path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z""/>';
    }


    // Toggle the icon between plus and minus
    //if (icon.innerHTML.includes('M15 3.313A12.187 12.187')) {
      // Change to minus (-) SVG
    //  icon.innerHTML = '<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>';
    //} else {
      // Change to plus (+) SVG
    //  icon.innerHTML = '<path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z""/>';
    //}
  });
});