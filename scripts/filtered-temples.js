const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;
const footerFirst = document.querySelector('footer p:first-of-type');
footerFirst.textContent = `© ${currentYear} 🙏🏼 Steven Tran 🙏🏼 California, US`;
const footerSecond = document.querySelector('footer p:nth-of-type(2)');
footerSecond.textContent = `Last modified: ${lastModifiedDate} MDT`; 



document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

    menuButton.addEventListener('click', function() {
        navigation.classList.toggle('open');
        menuButton.classList.toggle('open');
    });



const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
           dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
    },
    {
        templeName: "Ogden Utah",
        location: "Ogden, Utah, United States",
        dedicated: "1972, January, 18",
        area: 112232,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ogden-utah/400x250/ogden-utah-temple-1300442-wallpaper.jpg"
    },
    {
        templeName: "Nashville Tennessee",
        location: "Nashville, Tennessee, United States",
        dedicated: "2000, May, 21",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nashville-tennessee/400x250/nashville-temple-lds-1039735-wallpaper.jpg"
    }
];

    


const container = document.getElementById('temple-cards-container');

function displayTemples(temples) {
    container.innerHTML = '';
    temples.forEach(temple => {
        const card = document.createElement('div');
        card.className = 'temple-card';
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>`;
        container.appendChild(card);
    });
}



displayTemples(temples);

document.querySelector('.navigation').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const filter = event.target.textContent;
        let filteredTemples = temples;

        if (filter === 'Old') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        } 
        else if (filter === 'New') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
        } 
        else if (filter === 'Large') {
            filteredTemples = temples.filter(temple => temple.area > 90000);
        } 
        else if (filter === 'Small') {
            filteredTemples = temples.filter(temple => temple.area < 10000);
        }

        displayTemples(filteredTemples);
        }
    });
});