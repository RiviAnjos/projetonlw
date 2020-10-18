//criar o mapa
const map = L.map('mapid').setView([-8.0328019, -34.8969382], 13)

//criar e adicionar um titulo
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//criar um icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icone
    marker && map.removeLayer(marker)

    //add icone layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map)

})

//Adicionar o campo de fotos

function addPhotoField() {
    //pegar o conteiner de fotos #images
    const container = document.querySelector('#images')
    //pegar o conteiner para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o colne da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo está vazio, se sim, não adicione ao container de imagens
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""


    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();

}

// troca do sim e não
function toggleSelect(event) {
    //console.log("cheguei?")
    //retirar a class  .active
    document.querySelectorAll('.button-select button')
        .forEach(button => button.classList.remove('active'))
    //pegar o botão clicado colocar a classe .active
    const button = event.currentTarget
    button.classList.add('active')
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    //console.log(input)
    input.value = button.dataset.value
}

function validate(event) {
      
    //validar se lat e lng estão preenchidos
    
    const needsLatAndLng = false;
    if(needsLatAndLng){
        event.preventDefault()
        alert('Selecione um ponto no Mapa!')
    }
    

}