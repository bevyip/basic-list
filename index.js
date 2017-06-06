const personForm = document.querySelector('#personForm')

function handleSubmit(e){
    e.preventDefault()
    const f = e.target
    const name = f.name.value
    const details = document.querySelector('#details') 
    
    var newItem = document.createElement("li")
    newItem.classList.add('notclicked')
    var textNode = document.createTextNode(name)
    newItem.appendChild(textNode);
    newItem.addEventListener("click", function(){
        myFunction()
    });

    function myFunction(){
        if (newItem.classList.contains('notclicked')){
            document.getElementById('details').children[0].classList.add('clicked')
            document.getElementById('details').children[0].classList.remove('notclicked')
        }else{
            document.getElementById('details').children[0].classList.add('notclicked')
            document.getElementById('details').children[0].classList.remove('clicked')
        }
    }

    details.insertBefore(newItem, details.childNodes[0])
    
}

personForm.addEventListener("submit",handleSubmit)