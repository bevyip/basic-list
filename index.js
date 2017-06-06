const personForm = document.querySelector('#personForm')

function handleSubmit(e){
    e.preventDefault()
    const f = e.target
    const name = f.name.value
    const details = document.querySelector('#details') 
    
    var newItem = document.createElement("li")
    newItem.classList.add('notclicked')
    var textNode = document.createTextNode(name)
    var button = document.createElement('button')
    button.textContent = 'delete'
    newItem.appendChild(textNode)
    newItem.appendChild(button)
    newItem.addEventListener("click", myFunction)

    function myFunction(){
        if (newItem.classList.contains('notclicked')){
            this.classList.add('clicked')
            this.classList.remove('notclicked')
        }else{
            this.classList.add('notclicked')
            this.classList.remove('clicked')
        }
    }

    details.insertBefore(newItem, details.childNodes[0])

    button.addEventListener("click", function(){
        details.removeChild(newItem)
    })
    
}

personForm.addEventListener("submit",handleSubmit)