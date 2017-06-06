const personForm = document.querySelector('#personForm')

function handleSubmit(e){
    e.preventDefault()
    const f = e.target
    const name = f.name.value
    const details = document.querySelector('#details') 
    
    var newItem = document.createElement("li")
    var textNode = document.createTextNode(name)
    newItem.appendChild(textNode);

    details.insertBefore(newItem, details.childNodes[0])
}
personForm.addEventListener("submit",handleSubmit)