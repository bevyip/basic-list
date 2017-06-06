const personForm = document.querySelector('#personForm')
 

function handleSubmit(e){
    e.preventDefault()
    const f = e.target
    const name = f.name.value
    const details = document.querySelector('#details')
        
    
}
personForm.addEventListener("submit",handleSubmit)