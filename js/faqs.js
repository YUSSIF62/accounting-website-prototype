//Accordion Implementation
let accordion_triggers = document.querySelectorAll(".accordion-question");

accordion_triggers.forEach((module)=>{
      module.addEventListener("click", ()=>{
          let current = document.querySelector(".accordion-question.active")
          if(current && current !== module){
              current.classList.toggle("active")
              current.nextElementSibling.style.maxHeight = 0
          }
          module.classList.toggle("active")
          
          let module_details = module.nextElementSibling
  
          if(module.classList.contains("active")){
              module_details.style.maxHeight = module_details.scrollHeight + 'px'
          }else{
              module_details.style.maxHeight = 0;
          }
      })
  })