window.onload = function () {
    let img = document.querySelector('.showImg')
    img.setAttribute('src', './img/image.svg')
}

let online = document.querySelector('#online'),
    offline = document.querySelector('#offline'),
    onlineCard = document.querySelector('.onlineCard'),
    offlineCard = document.querySelector('.offlineCard'),
    onlineLab = document.querySelector('.onlineLab'),
    offlineLab = document.querySelector('.offlineLab')

online.addEventListener('click', function () {
    onlineLab.classList.add('disabled')
    offlineLab.classList.remove('disabled')
    offlineCard.classList.remove('show')
})
offline.addEventListener('click', function () {
    offlineLab.classList.add('disabled')
    onlineLab.classList.remove('disabled')
    onlineCard.classList.remove('show')
})

let actImg = document.getElementById('actImg')
actImg.addEventListener("change", function (e) {
    const file = this.files[0]
    const filereader = new FileReader();
    filereader.onload = function (e) {
        let img = document.querySelector('.showImg')
        img.setAttribute('src', e.target.result)
    }
    filereader.readAsDataURL(file);
})