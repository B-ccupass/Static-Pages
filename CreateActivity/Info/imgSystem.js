window.onload = function () { }
let actImg = document.getElementById('actImg')
actImg.addEventListener("change", function (e) {
    const file = this.files[0]
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
        let img = document.querySelector('.showImg')
        img.setAttribute('src', e.target.result)
    }
    fileReader.readAsDataURL(file);
})
