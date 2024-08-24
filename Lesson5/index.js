// const url = "https://solar-poised-salad.glitch.me/todos"
// const todo = {
//     fullname: input1.value,
//     email: input2.value,
//     isActive: true
// };

// const addTodo = () => {
//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(todo),
//     })
//     .then((Response) => Response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
//     };
//     const getBtn = document.querySelector("get");
//     const createBtn = document.querySelector('#post');

//     getBtn.addEventListener("click", () => {
//         getTodos();
//     });
//     createBtn.addEventListener("click", () => {
//         getTodo();
//     });

//     const fullnameInput = document.querySelector("#fullname");
//     const emailInput = document.querySelector("#email");
//     const saveBtn = document.querySelector("#save");
//     const updateBtn = document.querySelector("#update");

//     const updatedStudent = () => {
//         const student = {
//             fullname: fullnameInput.value,
//             email: emailInput.value,
//             isActive: true,
//         };
    
//         fetch(url + "/1", {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(updatedStudent),
//         })
//         .then((res) => res.json())
//         .then((student) => {
//             console.log(data);
//             getStudents();
//             fullnameInput.value = "";
//             emailInput.value = "";
            
//         })
//         .catch((error) => console.log(error));
        
//     };
//     updateBtn.addEventListener("click", updatedStudent);



    // TASK

    const url = "https://solar-poised-salad.glitch.me/todos";

const myInput = document.querySelector("input");
const myBtn = document.querySelector("button");
const notification = document.querySelector(".alert");
const ul = document.querySelector("ul");

const render = (todos) => {
  ul.innerHTML = "";
  todos.forEach((element) => {
    const li = `<li>${element.title} <input type="checkbox" ${
      element.completed ? "checked" : ""
    } /> <button class="edit-btn" data-index="${
      element.id
    }">Edit</button></li>`;
    ul.insertAdjacentHTML("beforeend", li);
  });

  const editBtns = document.querySelectorAll(".edit-btn");

  editBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {});
  });
};
// render todos function
const getTodos = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => render(data))
    .catch((error) => console.log(error));
};

getTodos();

//
// const addTodo = () => {
//   // logic for adding todo to database
//   const todo = {
//     title: myInput.value,
//     completed: false,
//   };

//   fetch(url + "/1", {
//      method: "PUT",
//                 headers: {
//                 "Content-Type": "application/json",
//             },
//     body: JSON.stringify(todo),
//   })
//     .then((res) => res.json())
//     .then(() => {
//       myInput.value = "";
//       const p = document.createElement("p");
//       p.textContent = "Todo successfully added";
//       notification.prepend(p);
//       notification.style.display = "flex";

//       setTimeout(() => {
//         notification.style.display = "none";
//       }, 3000);

//       getTodos();
//     })
//     .catch((error) => console.log(error));
// };

// myBtn.addEventListener("click", addTodo);
 
 //practice
 const addProduct = () => {
   const todo = {
    title: myInput.value,
    completed: false,
  };

  fetch(url + "/1", {
     method: "PUT",
                headers: {
                "Content-Type": "application/json",
            },
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .then(() => {
      myInput.value = "";
      const p = document.createElement("p");
      p.textContent = "Todo successfully added";
      notification.prepend(p);
      notification.style.display = "flex";

      setTimeout(() => {
        notification.style.display = "none";
      }, 3000);

      getTodos();
    })
    .catch((error) => console.log(error));
};

myBtn.addEventListener("click", addTodo);
 
 

