let checkOk = document.querySelector("#checkOk"),
    nextPaggeBtn = document.querySelector("#checkOk");

document.getElementById("nextPaggeBtn").addEventListener("click", function () {
    if (!checkOk.checked) {
        alert("請同意使用者條款")
    } else {
        window.location.assign("../Organizer/Organizer.html")
    }
})