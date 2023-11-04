async function letsFetch (type) {
    try {
        let res = await fetch(`https://api.sampleapis.com/coffee/${type}`)
        let data = await res.json()
        showData(data)
    } catch (error) {
        window.alert('Oops, something happened...')
        location.reload()
    }
}

let myResults = document.querySelector('#results')

function showData(data) 
{
    myResults.innerHTML = data.map((e) => 
    {
        return `<div class="result"> 
        <img src="${e.image}" width="200" height="200" alt="${e.title}">
        <div id="${e.id}">
        <h3>${e.title}</h3>
        <i><b>Ingredients:</b></i> ${e.ingredients.join(", ")} <br><br>
        <div id="description"><i><b>Description:</b></i> ${e.description} </div>
        </div></div>`
    }).join(" ") 
}