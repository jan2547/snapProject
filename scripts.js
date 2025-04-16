/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


// This is an array of objects that store all anime infos
let animeList = [
  {
    title: "EIGHTY-SIX",
    genre: "Action, Drama, Sci-Fi",
    episodes: 23,
    rating: 5,
    imageURL: "image/EIGHTY-SIX.jpg"
  },
  {
    title: "Solo Leveling",
    genre: "Action",
    episodes: 26,
    rating: 4.9,
    imageURL: "image/Solo Leveling.jpg"
  },
  {
    title: "The Apothecary Diaries",
    genre: "Drama, Mystery, Historical",
    episodes: 38,
    rating: 5,
    imageURL: "image/The Apothecary Diaries.jpg"
  },
  {
    title: "A Sign of Affection",
    genre: "Romance",
    episodes: 12,
    rating: 4.9,
    imageURL: "image/A Sign of Affection.jpg"
  },
  {
    title: "BLUE LOCK",
    genre: "Drama, Sport",
    episodes: 38,
    rating: 4.7,
    imageURL: "image/BLUE LOCK.jpg"
  },
  {
    title: "Chainsaw Man",
    genre: "Action, Supernatural",
    episodes: 12,
    rating: 4.9,
    imageURL: "image/Chainsaw Man2.jpg"
  },
  {
    title: "Kaiju No. 8",
    genre: "Action, Sci-Fi",
    episodes: 12,
    rating: 4.9,
    imageURL: " image/Kaiju No. 8.jpg"
  },
  {
    title: "Classroom of the Elite",
    genre: "Drama, Thriller",
    episodes: 38,
    rating: 4.8,
    imageURL: "image/Classroom-of-the-Elite.jpg"
  },
  {
    title: "Nina the Starry Bride",
    genre: "Romance, Fantasy",
    episodes: 12,
    rating: 4.9,
    imageURL: "image/Nina the Starry Bride.jpg"
  },
  {
    title: "Hell's Paradise",
    genre: "Action, Drama, Fantasy",
    episodes: 13,
    rating: 4.9,
    imageURL: "image/Hell's Paradise.jpg"
  },
  {
    title: "HIGH CARD",
    genre: "Action, Fantasy",
    episodes: 24,
    rating: 4.6,
    imageURL: "image/HIGH CARD.jpg"
  },
  {
    title: "The Eminence in Shadow",
    genre: "Fantasy, Action, Drama, Comedy",
    episodes: 32,
    rating: 4.7,
    imageURL: "image/The Eminence in Shadow.jpg"
  },
  {
    title: "Shangri-La Fronter",
    genre: "Action, Adventure, Sci-Fi",
    episodes: 51,
    rating: 4.8,
    imageURL: "image/Shangri-La Fronter.jpg"
  },
  {
    title: "Demon Slayer",
    genre: "Action, Fantasy, Drama",
    episodes: 63,
    rating: 5,
    imageURL: "image/Demon Slayer.jpg"
  },
  {
    title: "I'll Become a Villainess Who Goes Down in History",
    genre: "Drama, Fantasy, Historical",
    episodes: 13,
    rating: 4.8,
    imageURL: "image/I'll Become a Villainess Who Goes Down in History.jpg"
  },
  {
    title: "Frieren- Beyond Journey's End",
    genre: "Adventure, Drama, Fantasy",
    episodes: 28,
    rating: 5,
    imageURL: "image/Frieren- Beyond Journey's End.jpg"
  },
  {
    title: "MASHLE- MAGIC AND MUSCLES",
    genre: "Action, Fantasy, Comedy",
    episodes: 25,
    rating: 4.9,
    imageURL: "image/MASHLE- MAGIC AND MUSCLES.jpg"
  },
  {
    title: "Sacrificial Princess and the King of Beasts",
    genre: "Fantasy, Romance",
    episodes: 24,
    rating: 4.8,
    imageURL: "image/Sacrificial Princess and the King of Beasts.jpg"
  },
  {
    title: "The Rising of the Shield Hero",
    genre: "Action, Fantasy, Adventure",
    episodes: 50,
    rating: 4.7,
    imageURL: "image/The Rising of the Shield Hero.jpg"
  },
  {
    title: "More than a Married Couple, but Not Lovers",
    genre: "Drama, Romance",
    episodes: 12,
    rating: 4.8,
    imageURL: "image/More than a Married Couple, but Not Lovers..jpg"
  },
];

// This function loops through anime list and displays each of them as a card
function showCards(list)
{
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // clear existing cards
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < list.length; i++)
  {
    let anime = list[i];
    const nextCard = templateCard.cloneNode(true); // copy the template card
    editCardContent(nextCard, anime); // edit title and image
    cardContainer.appendChild(nextCard); // add new card to the container
  }
}

//This function fill anime info with actual data
function editCardContent(card, anime)
{
  card.style.display = "block"; //show the card that was hidden by default(in HTML)

  card.querySelector("h2").textContent = anime.title;
  card.querySelector("img").src = anime.imageURL;
  card.querySelector("img").alt = anime.title + " Poster";

  // fill in genre, episodes, rating
  card.querySelector(".genre").textContent = "Genre: " + anime.genre;
  card.querySelector(".episodes").textContent = "Episodes: " + anime.episodes;
  card.querySelector(".rating").textContent = "Rating: " + anime.rating;
}


//main function that runs after the page finishes loading
document.addEventListener("DOMContentLoaded", function ()
{
  // Show all anime when the page first loads
  showCards(animeList);

//filter by genre feature!!!
  // find all genre buttons
  const genreButtons = document.querySelectorAll(".genre-btn");

  //loop through each genre button and handle clicks for filtering
  genreButtons.forEach(function (button)
  {
    button.onclick = function ()
    {
      const genre = button.dataset.genre;
      // remove highlight from all buttons
      genreButtons.forEach(btn => btn.classList.remove("selected"));
      // add highlight to the clicked one
      button.classList.add("selected");
      // filter anime based on selected genre
      let filteredList;
      if (genre === "all")
      {
        filteredList = animeList;// show all if "all"
      }
      else
      {
        filteredList = animeList.filter(function (anime)
        {
          return anime.genre.toLowerCase().includes(genre.toLowerCase());
        });
      }

      // Show filtered cards
      showCards(filteredList);
    };
  });


//Sorting anime based on rating feature!!!
  //get the sorting dropdown element from the HTML
  const sortSelect = document.getElementById("sort-rating");
  //when the user selects a sort option (like High to Low or Low to High).....
  sortSelect.onchange = function ()
  {
    const sortValue = sortSelect.value;// get the selected value

    let sortedList = [...animeList]; // make a copy so we don’t mess up the original one
    //sort by rating: highest to lowest
    if (sortValue === "rating-desc")
    {
      sortedList.sort((a, b) => b.rating - a.rating);
    }
    // sort by rating: lowest to highest
    else if (sortValue === "rating-asc")
    {
      sortedList.sort((a, b) => a.rating - b.rating);
    }

    showCards(sortedList);// show the sorted list on the screen
  };

//Random anime feature!!!
  //get the "Pick a Random Anime" button from the HTML
  const randomBtn = document.getElementById("random-btn");
//when the user clicks the random button
  randomBtn.onclick = function ()
  {
    let filteredList = animeList;//start with the full list

    // check if a genre button is selected (other than "all")
    const selectedGenreBtn = document.querySelector(".genre-btn.selected");
    if (selectedGenreBtn && selectedGenreBtn.dataset.genre !== "all")
    {
      const selectedGenre = selectedGenreBtn.dataset.genre;

      // filter the list to only include anime matching the selected genre
      filteredList = animeList.filter(function (anime)
      {
        return anime.genre.toLowerCase().includes(selectedGenre.toLowerCase());
      });
    }
    // if the list has any anime, pick one at random and show it
    if (filteredList.length > 0)
    {
      const randomIndex = Math.floor(Math.random() * filteredList.length);
      const randomAnime = filteredList[randomIndex];

      showCards([randomAnime]);  // show just the one randomly selected anime card
    }
  };
});





