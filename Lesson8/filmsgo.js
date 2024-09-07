// //AXIOS
// const url = "https://solar-poised-salad.glitch.me/products/";
// async function getProducts() {
//     try {
//         const response = await axios (url);
//         console.log(response.data);
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// getProducts();


// const apiKey = "52b7b526b3e99037f7c582dacc663862";
// const newUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

// async function getFilms() {
//     try {
//         const response = await axios(newUrl);
//         const { results } = response.data;
//         console.log(results);

//         showProduct(results); 
//     } catch (error) {
//         console.log(error);
//     }
// }

// getFilms();

// const body = document.querySelector("body");

// function showProduct(products) {
//     const box = document.querySelector(".navBar");
//     box.innerHTML = '

//     products.forEach(element => {
//         const card = `

//             <div class="box">
//           <img src="${element.poster_path}"/>
        
//             <h3 class="title">Title: ${element.original_title}</h3>
//             <h4 class="votes">IMdB: ${element.vote_average}</h4>
         
//           <p class="discription">${element.overview}</p>
//           <div><button class="addFavorite">Add to Favorite</button></div>
//         </div>
        
//     `;
        
//         // <div class="box">
        

//         //     <p>${element.title}</p>
//         //     <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}">
            
//         // </div>`;
//         box.insertAdjacentHTML('beforeend', card);
//     });
// }

// document.querySelectorAll(".btn").forEach(button => {
//     button.addEventListener("click", (event) => {
//         const genre = event.target.getAttribute("data-genre");
//         filterByGenre(genre);
//     });
// });

// function filterByGenre(
//     genre_ids) {
//     const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${
//         genre_ids}`;
    
//     axios(url)
//         .then(response => {
//             const results = response.data.results;
//             showProduct(results); 
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

// const apiKey = "52b7b526b3e99037f7c582dacc663862";
// const newUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

// async function getFilms() {
//     try {
//         const response = await axios(newUrl);
//         const { results } = response.data;
//         console.log(results);

//         showProduct(results); 
//     } catch (error) {
//         console.log(error);
//     }
// }

// getFilms();

// function showProduct(products) {
//     const box = document.querySelector(".navBar");
//     box.innerHTML = ''; 

//     products.forEach(element => {
//         const imageUrl = element.poster_path ? `https://image.tmdb.org/t/p/w500${element.poster_path}` : 'default-image-path.jpg';
//         const card = `
//             <div class="box">
//                 <img src="${imageUrl}" alt="${element.original_title}" />
                
//                 <h4 class="votes">IMDB: ${element.vote_average}</h4>
//                 <p class="description">${element.overview}</p>
//                 <div><button class="addFavorite">Add to Favorite</button></div>
//             </div>
//         `;
//         box.insertAdjacentHTML('beforeend', card);
//     });
// }

// const genresContainer = document.querySelector(".genres");

// async function getGenres() {
//   try {
//     const { data } = await axios(
//       "https://api.themoviedb.org/3/genre/movie/list?language=en",
//       options
//     );
//     console.log(data.genres);
//     data.genres.forEach((genre) => {
//       const content = `<p class="genreItem" data-genre-id="${genre.id}">${genre.name}</p>`;
//       genresContainer.insertAdjacentHTML("beforeend", content);
//     });

//     const genreContainer = document.querySelectorAll(".genreItem");
//     genreContainer.forEach((genre) => {
//       genre.addEventListener("click", function () {
//         const currentGenre = data.genres.find(
//           (genre) => genre.id === parseInt(this.dataset.genreId)
//         );
//         console.log(currentGenre);
//         filterByGenres(currentGenre.id);
//       });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// getGenres();

// async function filterByGenres(genreId) {
//   try {
//     const { data } = await axios(
//       `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
//       options
//     );
//     render(data.results);
//   } catch (error) {
//     console.log(error);
//   }
// }
const apiKey = "52b7b526b3e99037f7c582dacc663862";
const newUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

async function getFilms() {
    try {
        const response = await axios(newUrl);
        const { results } = response.data;
        console.log(results);

        showProduct(results); 
    } catch (error) {
        console.log(error);
    }
}

getFilms();

function showProduct(products) {
    const box = document.querySelector(".navBar");
    box.innerHTML = ''; 

    products.forEach(element => {
        const imageUrl = element.poster_path ? `https://image.tmdb.org/t/p/w500${element.poster_path}` : 'default-image-path.jpg';
        const card = `
            <div class="box">
                <img src="${imageUrl}" alt="${element.original_title}" />
                <h4 class="votes">IMDB: ${element.vote_average}</h4>
                <p class="description">${element.overview}</p>
                <div><button class="addFavorite">Add to Favorite</button></div>
            </div>
        `;
        box.insertAdjacentHTML('beforeend', card);
    });
}

const genresContainer = document.querySelector(".genres");

async function getGenres() {
  try {
    const { data } = await axios(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en`
    );
    console.log(data.genres);

    data.genres.forEach((genre) => {
      const content = `<p class="genreItem" data-genre-id="${genre.id}">${genre.name}</p>`;
      genresContainer.insertAdjacentHTML("beforeend", content);
    });

    
    document.querySelectorAll(".genreItem").forEach((genre) => {
      genre.addEventListener("click", function () {
        const genreId = this.getAttribute("data-genre-id");
        filterByGenres(genreId); 
      });
    });

  } catch (error) {
    console.log(error);
  }
}
getGenres();

async function filterByGenres(genreId) {
  try {
    const { data } = await axios(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`
    );
    console.log(data.results);
    showProduct(data.results); 
  } catch (error) {
    console.log(error);
  }
}

//Add to favorite

const favBtns = document.querySelectorAll(".addFavorite-btn");


favBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const foundMovie = results.find(
            (movie) => movie.id == this.dataset.movieId 
        ); 
        if (foundMovie) {
            console.log(foundMovie);
            addToFav(foundMovie); 
        } else {
            document.querySelector(".error-message").textContent = "Movie not found"; 
        }
    });
});


async function addToFav(object) {
    try {
        const response = await fetch("YOUR_API_URL", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object) 
        });

        const data = await response.json();
        console.log(data); 
        
    } catch (error) {
        document.querySelector(".error-message").textContent = "Error adding movie to favorites"; 
        console.log(error); 
    } finally {
        loader.style.display = "none";
    }
}


function renderAddToFav() {
    const myFavorites = document.querySelector(".favorites");
    myFavorites.innerHTML = ""; 

    favorites.forEach((movie) => {
        const movieCard = `
            <div class="box">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.original_title}" />
                <h4 class="votes">IMDB: ${movie.vote_average}</h4>
                <p class="description">${movie.overview}</p>
            </div>
        `;
        myFavorites.insertAdjacentHTML("beforeend", movieCard); 
    });
}

const favorites = [];