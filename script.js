const copyButton = document.getElementById('copy-email');

copyButton.addEventListener('click', (e) => {
  e.preventDefault(); 
  navigator.clipboard.writeText("mattias.nordin02@gmail.com");

  copyButton.classList.add("copied");
  copyButton.classList.add("no-hover");

  setTimeout(() => {
    copyButton.classList.remove("copied");
    copyButton.classList.remove("no-hover");
  }, 2000);
});