const sidebar_trigger = document.querySelector(".nav-trigger")

const sidebar = document.querySelector("#sidebar")

const close_btn = document.querySelector(".cancel-btn")

sidebar_trigger.addEventListener("click", ()=>{
    sidebar.classList.toggle("sidebar--active")
})

close_btn.addEventListener("click", ()=>{
    sidebar.classList.remove("sidebar--active");
})

// Dropdown implementation
const dropdowns = document.querySelectorAll(".dropdown")

const dropdown_triggers = document.querySelectorAll(".dropdown-trigger")

for(let i = 0; i < dropdowns.length; i++){
     dropdown_triggers[i].addEventListener("mouseover", ()=>{
          dropdowns[i].style.display = "block"
     })
     dropdown_triggers[i].addEventListener("mouseleave", ()=>{
         dropdowns[i].style.display = "none"
     })
}