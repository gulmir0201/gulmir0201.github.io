// const url = "https://solar-poised-salad.glitch.me/products";

// // GET REQUESTS
// async function getProducts() {
//   try {
//     const response = await axios(url);
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// // async function getTodosWithFetch() {
// //   try {
// //     const response = await fetch(url);
// //     const data = await response.json();
// //     console.log(data);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // getTodosWithFetch();

// // POST REQUESTS

// async function addProduct() {
//   try {
//     const product = {
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61sWCPz-IfL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
//       title: "Nokia added with axios",
//       price: 899,
//       description: "Nokia phone",
//     };
//     const response = await axios.post(url, product);
//     console.log(response.data);
//     getProducts();
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function addProductWithFetch() {
//   try {
//     const product = {
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61sWCPz-IfL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
//       title: "Nokia added with Fetch",
//       price: 899,
//       description: "Nokia phone",
//     };
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     });

//     const data = await response.json();
//     console.log(data);
//     getProducts();
//     // write your success logic
//     // update the list of products
//   } catch (error) {
//     console.log(error);
//   }
// }

// // document.querySelector("#axios-btn").addEventListener("click", () => {
// //   location.href = `movie.html?movieId=${12}`;

// //   //   addProduct();
// // });

// // document.querySelector("#fetch-btn").addEventListener("click", () => {
// //   addProductWithFetch();
// // });

// // movie list functionality
// // search functionality
// // filtering by genres (optional)
// // go to the specific movie page
// // show movie information (cast, title etc.)
// // show the trailer (optional)

// const apiKey = "95686a04581c305cc6d7e4ccff9d039a";
// const newUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=`;
// const imagePrefix = "https://image.tmdb.org/t/p/w500/";

// const favorites = JSON.parse(localStorage.getItem("favs")) || [];

// const loader = document.querySelector("p");

// async function getMovies() {
//   loader.style.display = "block";
//   try {
//     const {
//       data: { results },
//     } = await axios(newUrl + apiKey);
//     const moviesContainer = document.querySelector(".movies");
//     results.forEach((movie) => {
//       const movieCard = `
//         <div class="movie">
//         <img src="${imagePrefix + movie.poster_path}" />
//         <div>
//           <button class="movie-btn" id="${movie.id}">${movie.title}</button>
//           <button class="favorite-btn" data-movie-id="${
//             movie.id
//           }">Add to favorites</button>
//         </div>
//         </div>
//       `;
//       moviesContainer.insertAdjacentHTML("beforeend", movieCard);
//     });

//     const btns = document.querySelectorAll(".movie-btn");
//     btns.forEach((btn) => {
//       btn.addEventListener("click", function () {
//         location.href = `movie.html?movieId=${this.id}`;
//       });
//     });

//     const favBtns = document.querySelectorAll(".favorite-btn");
//     favBtns.forEach((btn) => {
//       btn.addEventListener("click", function () {
//         const foundMovie = results.find(
//           // TODO: use triple equal or strict equality
//           (movie) => movie.id == this.dataset.movieId
//         );
//         console.log(favorites);
//         favorites.push(foundMovie);
//         localStorage.setItem("favs", JSON.stringify(favorites));
//         renderFavorites();
//       });
//     });
//   } catch (error) {
//     document.querySelector(".error-message").textContent =
//       "Something went wrong";
//   } finally {
//     loader.style.display = "none";
//   }
// }

// function renderFavorites() {
//   const favoritesContainer = document.querySelector(".favorites div");
//   favoritesContainer.innerHTML = "";
//   favorites.forEach((movie) => {
//     const movieCard = `
//       <div class="movie">
//       <img src="${imagePrefix + movie.poster_path}" />
//       <div>
//         <button class="movie-btn" id="${movie.id}">${movie.title}</button>
//         <button class="favorite-btn" data-movie-id="${
//           movie.id
//         }">Remove from favorites</button>
//       </div>
//       </div>
//     `;
//     favoritesContainer.insertAdjacentHTML("beforeend", movieCard);
//   });
// }

// getMovies();
// renderFavorites();

// document.querySelector("#test").addEventListener("click", function (e) {
//   // localStorage.setItem("test", JSON.stringify({ id: 1, title: "iPhone 14" }));
//   const currentItem = JSON.parse(localStorage.getItem("test"));
// });


// function greet(name, owner) {
//     if (name === owner) {
//         return 'Hello boss';
//     } else {
//         return 'Hello guest';
//     }
// }

// console.log(greet('Tomy', 'Tomy')); 
// console.log(greet('Tomy', 'Jerry'));   


// //Task2

// function getQvartal(month) {
//     if (month >=1 && month <=3) {
//         return 'First quarter';
//     }else if (month >=4 && month <= 6){
//             return'second quarter';
//         }else if (month >=7 && month <= 9){
//             return'third quarter';
//     }else if (month >=10 && month <= 12){
//         return'fourth quarter';
// } else{
//     return "error month";
// }
// }
// console.log(getQvartal(2));
// console.log(getQvartal(6));
// console.log(getQvartal(11));



// const url = "https://solar-poised-salad.glitch.me/products";
// async function newProduct() {
    
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//       console.log(error);
        
//     }
// }

// newProduct();



const url = "https://solar-poised-salad.glitch.me/products";
async function newUrl(params) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        
    }
}
newUrl();


// function accum(s) {
//     return s
//         .split('')                  // Split the string into an array of characters
//         .map((char, index) => 
//             char.toUpperCase() +    // Capitalize the first character
//             char.toLowerCase().repeat(index)  // Repeat the character in lowercase `index` times
//         )
//         .join('-');                 // Join the resulting array with hyphens
// }

// // Examples:
// console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); 



// function accum(s){
// return s
// .split ('')
// .map ((char,index) =>
// char.toUpperCase()+
// char.toLowerCase().repeat.(index)
// )
// .join('-')
// }
//     console.log(accum("dddddffff"));
    





