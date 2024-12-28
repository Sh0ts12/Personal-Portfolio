// Select the copy button
const copyButton = document.getElementById('copy-email');

// Add event listener for click
copyButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    navigator.clipboard.writeText('your-email@example.com'); // Replace with your email
    copyButton.classList.add('copied');
    copyButton.classList.add('no-hover'); // Temporarily disable hover

    // Reset after timeout
    setTimeout(() => {
        copyButton.classList.remove('copied');
        copyButton.classList.remove('no-hover'); // Re-enable hover
    }, 2000); // Adjust timing as needed
});
