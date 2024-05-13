// JavaScript for responsive hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

    menuButton.addEventListener('click', function() {
        navigation.classList.toggle('open');
        menuButton.classList.toggle('open');
    });

	const currentYear = new Date().getFullYear();
	const lastModifiedDate = document.lastModified;
	const footerFirst = document.querySelector('footer p:first-of-type');
	footerFirst.textContent = `© ${currentYear} 🙏🏼 Steven Tran 🙏🏼 California, US🙏🏼`;
	const footerSecond = document.querySelector('footer p:nth-of-type(2)');
	footerSecond.textContent = `Last modified: ${lastModifiedDate} MDT`;
});

