const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerFirst = document.querySelector('footer p:first-of-type');
footerFirst.textContent = `© ${currentYear} 🙏🏼 Steven Tran 🙏🏼 California, US`;

const footerSecond = document.querySelector('footer p:nth-of-type(2)');
footerSecond.textContent = `Last modified: ${lastModifiedDate} MDT`;