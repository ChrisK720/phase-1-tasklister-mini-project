// Type task in input field

// THINGS NEEDED:
// id of form = "create-task-form"
// id of field = "new-task-description"

// STEPS:
// add an eve lis to from => event should be 'submit' (MAKE SURE e.preventDef())
// This covers first 2 tasks

// Callback function for submit event:
 //  Function should:
 // total => see task appear after sumission
// STEPS:
// 1) e.preventDef()
// 2) get the value of fied where input was made. con In = document.getElementById("new-task-description").value
// 3) define ul and appened a li with In as it's text content
// 3:
// con ul = document.getElementById("tasks")
// con newItem = document.createElement('li')
// new newItem.textContent = In
// ul.appendChild(newItem)

// This should complete project only Fetch lab remaining

function mini (){
     const form = document.getElementById('create-task-form')
     const field = document.getElementById('new-task-description')
     form.addEventListener('submit', (e) => {
          e.preventDefault()
          const inp = field.value
          const ul = document.getElementById('tasks')
          const listItem = document.createElement('li')
          listItem.textContent = inp
          ul.appendChild(listItem)

     })
}

mini()






// document.addEventListener("DOMContentLoaded", () => {
//      document.querySelector("form").addEventListener("submit", (e) =>{
//      e.preventDefault()
//      const p = document.createElement('p')
//           p.id = 'paratas'
//           document.getElementById('paratas').addEventListener()
//           document.getElementById('paratas').append(task)
     
 
//      })
// })