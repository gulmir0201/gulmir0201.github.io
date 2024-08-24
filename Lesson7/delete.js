// const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";  

//         const productImageInput = document.querySelector("productImage");
//         const productTitleInput = document.querySelector("productTitle");
//         const productDescriptionInput = document.querySelector("productDescription");
//         const productPriceInput = document.querySelector("productPrice");
//         const addProductBtn = document.querySelector("addProductBtn");
//         const imagePreview = document.querySelector("preview");
     
//         addProductBtn.addEventListener("click", function() {
//             const product = {
//                 imageURL: productImageInput.value,
//                 title: productTitleInput.value,
//                 description: productDescriptionInput.value,
//                 price: parseFloat(productPriceInput.value)
//             };
            
//             console.log(product);
            
//             fetch(url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(product)
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log("Product added:", data);
               
//                 productImageInput.value = "";
//                 productTitleInput.value = "";
//                 productDescriptionInput.value = "";
//                 productPriceInput.value = "";
//                 imagePreview.style.display = "none";
//             })
//             .catch(error => console.error("Error:", error));
//         });


// const addProduct = async function () {};
// const addProduct2 = async (tovar) => {
//     try{
//         const response = await fetch (url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(tovar),
//         });
//         const data = await response.json();
//         console.log(data);
//         }catch(error){
//             console.log(error);
            
//         }

        
// };
// async function addProduct3() {}
    

// productItem.innerHTML =`
// <div class="container">
// <img src=${productImageURL} alt="product">
// <h2>${product.title}</h2>
// <h1>${product.price}</h1>
// <P>${product.description}</P>

//     <button type="edit">Edit</button>
//     <button type="delete">Delete</button>
// </div>`;



const url = "https://solar-poised-salad.glitch.me/products/";

const productImageInput = document.getElementById("productImage");
const productTitleInput = document.getElementById("productTitle");
const productDescriptionInput = document.getElementById("productDescription");
const productPriceInput = document.getElementById("productPrice");
const addProductBtn = document.getElementById("addProductBtn");
const productsContainer = document.getElementById("productsContainer");

addProductBtn.addEventListener("click", function() {
    const product = {
        imageURL: productImageInput.value,
        title: productTitleInput.value,
        description: productDescriptionInput.value,
        price: parseFloat(productPriceInput.value)
    };

    addProduct(product);
});

async function addProduct(product) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        console.log("Product added:", data);

       
        productImageInput.value = "";
        productTitleInput.value = "";
        productDescriptionInput.value = "";
        productPriceInput.value = "";

        
        displayProduct(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayProduct(product) {
    const productItem = document.createElement("div");
    productItem.className = "container";
    productItem.innerHTML = `
        <img src="${product.imageURL}" alt="product">
        <h2>${product.title}</h2>
        <h1>${product.price}</h1>
        <p>${product.description}</p>
        <button type="button" class="edit-btn">Edit</button>
        <button type="button" class="delete-btn">Delete</button>
    `;

    
    productItem.querySelector(".edit-btn").addEventListener("click", function() {
        const newTitle = prompt("Enter new title:", product.title);
        const newPrice = prompt("Enter new price:", product.price);
        const newDescription = prompt("Enter new description:", product.description);

        if (newTitle) product.title = newTitle;
        if (newPrice) product.price = newPrice;
        if (newDescription) product.description = newDescription;

        productItem.querySelector("h2").innerText = product.title;
        productItem.querySelector("h1").innerText = product.price;
        productItem.querySelector("p").innerText = product.description;

        updateProduct(product);
    });

    
    productItem.querySelector(".delete-btn").addEventListener("click", function() {
        productItem.remove();
        deleteProduct(product);
    });

    productsContainer.appendChild(productItem);
}

async function updateProduct(product) {
    try {
        const response = await fetch(`${url}/${product.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        console.log("Product updated:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function deleteProduct(product) {
    try {
        const response = await fetch(`${url}/${product.id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        console.log("Product deleted:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}