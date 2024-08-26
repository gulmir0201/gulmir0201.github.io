const URL = "https://solar-poised-salad.glitch.me/products/";

async function myFood() {
   try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      showProduct(data);
   } catch (error) {
      console.log(error);
   }
} 

myFood();

const body = document.querySelector("body");

function showProduct(products) {
    products.forEach(element => {
        const box = document.querySelector(".myDiv");
        const card = `
        <div class="box">
            <p>${element.title}</p>
            <img src="${element.imageUrl}" alt="${element.title}">
            <h3>Price: ${element.price}</h3>
        </div>`;
        box.insertAdjacentHTML('beforeend', card);
    });
}


const button = document.querySelector(".btn");
const inputTitle = document.querySelector("#inputTitle")
const inputPrice = document.querySelector("#inputPrice")
const inputUrl = document.querySelector("#inputUrl")
const inputDescription = document.querySelector("#inputDescription")
const inputId = document.querySelector("#inputId")
    button.addEventListener("click", () => {
        const product={
          
            description:inputDescription.value,
           
            imageUrl: inputUrl.value,
            price: inputPrice.value,
            title:inputTitle.value
                    }
                    addProduct(product)
    
    });

    async function addProduct(object) {
 
        try {
           const response = await fetch(URL,{
            method: "POST",
            headers: {
            "Content-Type": "application/json"
                },
            body: JSON.stringify(object)
           });
           const data = await response.json();
           console.log(data);
           showProduct(data);
        } catch (error) {
           console.log(error);
        }
     } 
     