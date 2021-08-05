const body = document.querySelector('body');

const hamburger = document.querySelector('.mobile-navbar');
const openMenuContainer = document.querySelector('article.mobile-menu');
const closeMenuBtn = document.querySelector('.close-menu-btn');

hamburger.addEventListener('click', () => {
  openMenuContainer.classList.toggle('d-none');
});

closeMenuBtn.addEventListener('click', () => {
  openMenuContainer.classList.toggle('d-none');
});

const featuredSpeakers = [
  {
    id: 1,
    fullName: 'Jane Cooper',
    image: './media/images/speakers/featured-speaker-1.jpg',
    alt: 'speaker-1',
    title: 'Co-founder at Barone LLC.',
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
  },
  {
    id: 2,
    fullName: 'Wade Warren',
    image: './media/images/speakers/featured-speaker-2.jpg',
    alt: 'speaker-2',
    title: 'CTO at Acme Co.',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
  },
  {
    id: 3,
    fullName: 'Cameron Williamson',
    image: './media/images/speakers/featured-speaker-3.jpg',
    alt: 'speaker-3',
    title: 'CEO at Biffco Enterprises Ltd.',
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
  },
  {
    id: 4,
    fullName: 'Leslie Alexander',
    image: './media/images/speakers/featured-speaker-4.jpg',
    alt: 'speaker-4',
    title: 'Lead SWE at Binford Ltd.',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
  },
  {
    id: 5,
    fullName: 'Robert Fox',
    image: './media/images/speakers/featured-speaker-5.jpg',
    alt: 'speaker-5',
    title: 'Senior SWE at Abstergo Ltd.',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
  },
  {
    id: 6,
    fullName: 'Jacob Jones',
    image: './media/images/speakers/featured-speaker-6.jpg',
    alt: 'speaker-6',
    title: 'Associate SWE at Big Kahuna Burger Ltd.',
    address: '3517 W. Gray St. Utica, Pennsylvania 57867',
  },
];
