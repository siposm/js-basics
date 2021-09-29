
export let workerArray = []

// https://stackoverflow.com/questions/807878/how-to-make-javascript-execute-after-page-load?rq=1
// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

window.addEventListener('DOMContentLoaded', (event) => {

    fetch('https://reqres.in/api/users')
        .then(res => res.json()) // console log res
        .then(data => {
            for (let i = 0; i < data.data.length; i++) {
                workerArray.push(data.data[i])
            }
        }).then( () => {

            console.log(workerArray)

            // html template should be supported : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template

            for (let i = 0; i < workerArray.length; i++) {
                let template = document.getElementById("template").content
                let copyHTML = document.importNode(template,true)
                copyHTML.querySelector(".worker-name").textContent = workerArray[i].first_name + " " + workerArray[i].last_name
                copyHTML.querySelector(".worker-email").textContent = workerArray[i].email
                copyHTML.querySelector(".worker-avatar").src = workerArray[i].avatar
                document.getElementById("worker-container").appendChild(copyHTML)
            }


        })


})