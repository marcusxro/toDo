window.addEventListener('load', () => {
    const form = document.querySelector("#task-form")
    const inputbox = document.querySelector("#inputbox")
    const lists = document.querySelector("#tasks")
    const header = document.querySelector("h1")

    form.addEventListener('submit', (e) => {
        e.preventDefault()
       
        const values = inputbox.value


        if(!values) {
            header.innerHTML = "please type something"
            return
        } else { 
            console.log("dasdsad")
        }

        const task_el = document.createElement("div")
        task_el.classList.add("task")
        task_el.className = "con"


        const task_content = document.createElement("div")
        task_content.classList.add("content")
        task_content.innerText = values;
//textbox 
        const mytext = document.createElement("input")
        mytext.className = "fluid"
        mytext.classList.add("text")
        mytext.type = "text"
        mytext.value = values
        mytext.setAttribute("readonly", "readonly")
//end of textbox


//actions
        const actions = document.createElement("div") 
        actions.classList.add("actions")

        const edit = document.createElement("button")
        edit.classList.add("edit")
        edit.innerText = "edit"
       
        const deletes = document.createElement("button")
        deletes.classList.add("delete")
        deletes.innerText = "delete"

        actions.appendChild(edit)
        actions.appendChild(deletes)
 
//end of actioon


//appendchild
        task_el.appendChild(actions)
        task_el.appendChild(mytext)
        lists.appendChild(task_el)
        
        inputbox.value = ""
//end of appendchild
        edit.addEventListener('click', () => {
         if(edit.innerText.toLowerCase() == "edit") {
            mytext.removeAttribute("readonly")
            mytext.focus()
            edit.innerText = "save"
         }else {
            mytext.setAttribute("readonly", "readonly")
        edit.innerText = "edit"
         }
        })
    deletes.addEventListener("click", () => {
        lists.removeChild(task_el)
    })
    })

   
})

window.localStorage