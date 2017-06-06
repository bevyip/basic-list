const personForm = document.querySelector('#personForm')
 
function renderListItem(name){
        const li = document.createElement('li')
        li.innerHTML = `${name}`
        
        return li
    }

function renderList(name){
        const list = document.createElement('ul')
        
       const li = renderListItem(name)
       list.appendChild(li)
        
        return list 
    }

function handleSubmit(e){
    e.preventDefault()
    const f = e.target
    const name = f.name.value
    const details = document.querySelector('#details') 
    
    details.appendChild(renderList(name))
}
personForm.addEventListener("submit",handleSubmit)