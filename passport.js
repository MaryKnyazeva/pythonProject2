const node_for_click = document.getElementById("for_click")

function find_edit(){
    const surname  = document.getElementsByTagName('div')[7]
    const name = document.getElementsByTagName('div')[8]
    const middle_name = document.getElementsByTagName('div')[9]
    const sex = document.getElementsByTagName('div')[10]
    console.log(surname.innerText)
    console.log(name.innerText)
    console.log(middle_name.innerText)
    console.log(sex.innerText)

    surname.innerText = 'Knyazeva'
    name.innerText = 'Maria'
    middle_name.innerText = 'Alexandrovna'
    sex.innerText = 'female'


}

node_for_click.addEventListener("click",find_edit)
