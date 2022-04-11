const activityName = document.querySelector('#activityName'),
    activityStartDate = document.querySelector('#activityStartDate'),
    activityStartTime = document.querySelector('#activityStartTime'),
    activityEndDate = document.querySelector('#activityEndDate'),
    activityEndTime = document.querySelector('#activityEndTime'),
    activityTag = document.querySelector('#activityTag'),
    activityShortURL = document.querySelector('#activityShortURL'),
    ActivityRefWebUrl = document.querySelector('#ActivityRefWebUrl'),
    RefWebDescription = document.querySelector('#RefWebDescription'),
    citySelect = document.querySelector('#citySelect'),
    districtSelect = document.querySelector('#districtSelect'),
    offline = document.querySelector('#offline'),
    online = document.querySelector('#online'),
    StreamingWeb = document.querySelector('#StreamingWeb'),
    Address = document.querySelector('#Address'),
    AddressDetail = document.querySelector('#AddressDetail'),
    onlineCard = document.querySelector('.onlineCard'),
    offlineCard = document.querySelector('.offlineCard'),
    onlineLab = document.querySelector('.onlineLab'),
    offlineLab = document.querySelector('.offlineLab');
const submitBtn = document.querySelector('#sumBtn')

let tagInput = document.querySelector('#tagInput')
let TagArray = []
let ActivityInfo = {}
activityTag.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        let inputString = activityTag.value.trim()
        if (inputString != '') {
            CreateSpan(inputString)
        }
        activityTag.value = ''
        inputString = ''
    }
})

function CreateSpan(string) {
    let span = document.createElement('span')
    let btn = document.createElement('button')
    span.innerText = string
    span.classList.add('btn', 'btn-info', 'mx-1')
    span.setAttribute('id', 'spanInput')
    btn.classList.add('btn-close')
    btn.classList.add('p-2')
    btn.setAttribute('aria-label', 'Close')
    span.append(btn)
    tagInput.append(span)
    span.addEventListener('click', function () {
        TagArray.splice(TagArray.indexOf(this.innerText), 1)
        span = tagInput.removeChild(this)
        CheckTagArray()
    })
    TagArray.push(`${string.toString()}`)
    CheckTagArray()
}

function CheckTagArray() {
    if (TagArray.length == 5) {
        activityTag.disabled = true
        activityTag.classList.add('visually-hidden')
    } else {
        activityTag.disabled = false
        activityTag.classList.remove('visually-hidden')
    }
}

function GatObject() {
    return {
        "ActivityDraftId": 1,
        "ActivityName": activityName.value,
        "Image": "https://i.imgur.com/JmwfFko.png",
        "StartDate": activityStartDate.value,
        "StartTime": activityStartTime.value,
        "EndDate": activityEndDate.value,
        "EndTime": activityEndTime.value,
        "Tag": TagArray,
        "ActivityRefWebUrl": ActivityRefWebUrl.value,
        "RefWebDescription": RefWebDescription.value,
        "City": citySelect.value,
        "District": districtSelect.value,
        "Address": Address.value,
        "AddressDetail": AddressDetail.value,
        "StreamingWeb": StreamingWeb.value,
    }
}

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