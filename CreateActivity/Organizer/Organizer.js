let nextPageBtn = document.querySelector("#nextPageBtn"),
    backPageBtn = document.querySelector("#backPageBtn"),
    newOrgan = document.querySelector("#newOrgan"),
    userName = document.querySelector("#userName"),
    input = document.querySelectorAll("input")

nextPageBtn.onclick = function () {
    if (newOrgan.checked) {
        window.location.assign("/UserCenter/ApplyOrganizer/ApplyOrganizer.html")
    }
    if (userName.checked) {
        window.location.assign("../Theme/Theme.html")
        console.log(userName)
    }
}

backPageBtn.onclick = function () {
    history.go(-1)
}