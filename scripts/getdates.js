const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerFirstParagraph = document.querySelector('footer p:first-of-type');
footerFirstParagraph.textContent = `Copyright © ${currentYear} 🙏🏼 Steven Tran 🙏🏼 California, US`;

const footerSecondParagraph = document.querySelector('footer p:nth-of-type(2)');
footerSecondParagraph.textContent = `Last modified: ${lastModifiedDate}`;