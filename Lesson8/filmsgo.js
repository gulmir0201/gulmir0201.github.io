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
const newUrl = `https://api.themoviedb.org/3/movie/upcoming`;

async function getFilms() {
    try {
        const {
            data: { results },
         } = await axios(newUrl + apiKey);
         console.log(results);
         
        const { data } = response;
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}

getFilms();