let fontLange = document.querySelector("#fontLange"),
    introduction = document.querySelector("#introduction")

introduction.addEventListener("input", function () {
    if (introduction.textLength < 256) {
        fontLange.innerText = introduction.textLength;
    }
})
window.onload = function () {
    fontLange.innerText = introduction.textLength;
    let img = document.querySelector('.showImg')
    img.setAttribute('src', './img/person-circle.svg')
}

let orgImg = document.getElementById('orgImg')

orgImg.addEventListener("change", function (e) {
    const file = this.files[0]
    const filereader = new FileReader();
    filereader.onload = function (e) {
        let img = document.querySelector('.showImg')
        img.setAttribute('src', e.target.result)
    }
    filereader.readAsDataURL(file);
})

let from = document.querySelector('form')

document.getElementById("sumBtn").addEventListener("click", function () {
    var ormData = [{
        img: from.orgImg.value,
        name: from.orgName.value,
        email: from.orgEmail.value,
        contrycode: from.orgCountryCode.value,
        phone: from.orgPhone.value,
        phoneex: from.orgPhoneEx.value,
        leng: from.selectLen.value,
        currency: from.selectCurr.value,
        introduction: from.introduction.value
    },]
    
    localStorage.setItem("ormData",JSON.stringify(ormData))
    console.log(ormData)

})
function GetFromValue(FeomValue) {
    let tepmvalue = from.FeomValue.value
    debugger
    return tepmvalue
}

