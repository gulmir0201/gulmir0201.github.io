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

const body = document.querySelector("body");

function showProduct(products) {
    const box = document.querySelector(".navBar");
    box.innerHTML = ''; 

    products.forEach(element => {
        const card = `
        <div class="box">
            <p>${element.title}</p>
            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}">
            
        </div>`;
        box.insertAdjacentHTML('beforeend', card);
    });
}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", (event) => {
        const genre = event.target.getAttribute("data-genre");
        filterByGenre(genre);
    });
});

function filterByGenre(genre) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}`;
    
    axios(url)
        .then(response => {
            const results = response.data.results;
            showProduct(results); 
        })
        .catch(error => {
            console.log(error);
        });
}

