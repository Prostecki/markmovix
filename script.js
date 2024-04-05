const catalogue = [
    {
      "cover": "img/starwars.jpeg",
      "title": "Star Wars: Episode IV - A New Hope",
      "description": "This epic film follows a group of rebels fighting against the evil Empire, striving to restore freedom to the galaxy.",
      "release_year": 1977,
      "genre": "Science Fiction, Adventure, Fantasy",
      "duration": "121 minutes"
    },
    {
      "cover": "img/theDarkKnight.jpeg",
      "title": "The Dark Knight",
      "description": "Gotham's enemies unite to destroy Batman, and only the intervention of the Dark Knight can save the city.",
      "release_year": 2008,
      "genre": "Action, Thriller, Drama",
      "duration": "152 minutes"
    },
    {
      "cover": "img/matrix.jpeg",
      "title": "The Matrix",
      "description": "Programmer Neo discovers that his reality is a lie created by artificial intelligence and joins the fight for humanity's freedom.",
      "release_year": 1999,
      "genre": "Science Fiction, Action",
      "duration": "136 minutes"
    },
    {
      "cover": "img/Inception.jpeg",
      "title": "Inception",
      "description": "A thief who enters the dreams of others to steal secrets from their subconscious finds himself tasked with planting an idea into a target's mind.",
      "release_year": 2010,
      "genre": "Science Fiction, Action, Thriller",
      "duration": "148 minutes"
    },
    {
      "cover": "img/PulpFiction.jpeg",
      "title": "Pulp Fiction",
      "description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "release_year": 1994,
      "genre": "Crime, Drama",
      "duration": "154 minutes"
    },
    {
      "cover": "img/Shawshank.jpeg",
      "title": "The Shawshank Redemption",
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "release_year": 1994,
      "genre": "Drama",
      "duration": "142 minutes"
    },
    {
      "cover": "img/forrestGump.jpeg",
      "title": "Forrest Gump",
      "description": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      "release_year": 1994,
      "genre": "Drama, Romance",
      "duration": "142 minutes"
    },
    {
      "cover": "img/LOTR.jpeg",
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "description": "A young hobbit, Frodo Baggins, embarks on a perilous journey to destroy the One Ring and save Middle-earth from the Dark Lord Sauron.",
      "release_year": 2001,
      "genre": "Fantasy, Adventure, Drama",
      "duration": "178 minutes"
    },
    {
      "cover": "img/thegodfather.jpeg",
      "title": "The Godfather",
      "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "release_year": 1972,
      "genre": "Crime, Drama",
      "duration": "175 minutes"
    },
    {
      "cover": "img/thegodfather2.jpeg",
      "title": "The Godfather: Part II",
      "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      "release_year": 1974,
      "genre": "Crime, Drama",
      "duration": "202 minutes"
    },
    {
      "cover": "img/thedarkknightrises.jpeg",
      "title": "The Dark Knight Rises",
      "description": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
      "release_year": 2012,
      "genre": "Action, Thriller",
      "duration": "164 minutes"
    },
    {
      "cover": "img/interstellar.jpeg",
      "title": "Interstellar",
      "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "release_year": 2014,
      "genre": "Science Fiction, Adventure, Drama",
      "duration": "169 minutes"
    },
    {
      "cover": "img/fightclub.jpeg",
      "title": "Fight Club",
      "description": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      "release_year": 1999,
      "genre": "Drama",
      "duration": "139 minutes"
    },
    {
      "cover": "img/greenmile.jpeg",
      "title": "The Green Mile",
      "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      "release_year": 1999,
      "genre": "Drama, Crime, Fantasy",
      "duration": "189 minutes"
    },
    {
      "cover": "img/LOTR3.jpeg",
      "title": "The Lord of the Rings: The Return of the King",
      "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      "release_year": 2003,
      "genre": "Fantasy, Adventure, Drama",
      "duration": "201 minutes"
    },
    {
      "cover": "img/gladiator.jpeg",
      "title": "Gladiator",
      "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      "release_year": 2000,
      "genre":"Fantasy, Adventure, Drama",
      "duration": "155 minutes"
    }
];

console.log(catalogue);

//container for all films
const mainContent = document.getElementById('main-content');

for (let i = 0; i < catalogue.length; i++) {

    //Create a movieCard
    const movieCard = document.createElement('div');
    movieCard.classList.add('movieCard');

    //create and append a movieTitle
    const movieTitle = document.createElement('h3');
    movieTitle.textContent = catalogue[i].title;

    //create, append a movieCover and declare a class coverImages 
    const movieCover = document.createElement('img');
    movieCover.src = catalogue[i].cover;
    movieCover.classList.add('coverImages');

    //create and append a movieDescription
    const movieDescription = document.createElement('p');
    movieDescription.textContent = catalogue[i].description;

    //create and append a movieYear
    const movieYear = document.createElement('p');
    movieYear.textContent = catalogue[i].release_year;

    ////create and append a movieGenre
    const movieGenre = document.createElement('p');
    movieGenre.textContent = catalogue[i].genre;

    ////create and append a movieDuration
    const movieDuration = document.createElement('p');
    movieDuration.textContent = "Duration: " + catalogue[i].duration;

    //set an id for opening each card separately
    movieCard.setAttribute('id', i+1);
    movieCard.addEventListener('click', function() {
      const id = this.getAttribute('id');
    });
    
    //adress to movieCard and append elements in common container
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieCover);
    movieCard.appendChild(movieYear);
    movieCard.appendChild(movieGenre);
    movieCard.appendChild(movieDuration);
    // movieCard.appendChild(movieDescription);
    //append a common container to html
    mainContent.appendChild(movieCard);

}


const header = document.querySelector('header');
const navLinks = document.querySelectorAll('a');
const logo = document.querySelector('.logo');

//Change styles of header during scrolling
let prevScrollpos = window.pageYOffset;

window.onscroll = () => {

    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
        header.style.transform = 'translateY(0)';
        header.style.backgroundColor = 'rgb(83, 83, 83)';
        header.style.transition = '0.5s';
        navLinks.forEach(link => {
            link.style.color = 'black';
        });
    } else {
        header.style.backgroundColor = 'rgb(83, 83, 83)';
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
    };
};


