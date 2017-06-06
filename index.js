const personForm = document.querySelector('#personForm')
 
function renderListItem(name){
        const li = document.createElement('li')
        li.innerHTML = `Name: ${name}`
        
        return li
    }

function renderList(name){
        const list = document.createElement('ul')
        
        //loop over ['name, 'favColor', 'age']
        Object.keys(name).map(function(fieldName){
            const li = renderListItem(name)
            list.appendChild(li)
        })
        
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