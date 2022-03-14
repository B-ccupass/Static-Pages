const themeList = [
    { Name: '戶外', type: 'outdoor', IconClass: 'bi-activity' },
    { Name: '學習', type: 'Learn', IconClass: 'bi-alarm' },
    { Name: '親子', type: 'parent-child', IconClass: 'bi-apple' },
    { Name: '寵物', type: 'pet', IconClass: 'bi-archive' },
    { Name: '科技', type: 'Technology', IconClass: 'bi-arrow-down-circle' },
    { Name: '商業', type: 'Business', IconClass: 'bi-arrow-repeat' },
    { Name: '創業', type: 'Entrepreneurship', IconClass: 'bi-arrow-through-heart' },
    { Name: '投資', type: 'Invest', IconClass: 'bi-asterisk' },
    { Name: '設計', type: 'design', IconClass: 'bi-balloon' },
    { Name: '藝文', type: 'art', IconClass: 'bi-bandaid' },
    { Name: '手作', type: 'handmade', IconClass: 'bi-bar-chart-fill' },
    { Name: '美食', type: 'delicacy', IconClass: 'bi-bell-fill' },
    { Name: '攝影', type: 'photography', IconClass: 'bi-bookmark-check-fill' },
    { Name: '遊戲', type: 'game', IconClass: 'bi-controller' },
    { Name: '運動', type: 'sports', IconClass: 'bi-border-width' },
    { Name: '健康', type: 'healthy', IconClass: 'bi-box2-heart-fill' },
    { Name: '音樂', type: 'music', IconClass: 'bi-chat-dots' },
    { Name: '電影', type: 'Movie', IconClass: 'bi-camera2' },
]

let theme = document.querySelector('#theme'),
    themeSelect = document.querySelector('#themeSelect'),
    themeShow = document.querySelector('.themeShow')

let selectArray = []
let selectConst = 0
themeList.forEach((item, index) => {
    let _tem = creatThemeCard(item.type, item.Name, item.IconClass, index)
    themeShow.append(_tem)
});

function creatThemeCard(arrayType, arrayName, arrayIconClass, arrayIndex) {
    let cloneList = theme.content.cloneNode(true)
    let label = cloneList.querySelector('.themeLab')
    let input = cloneList.querySelector('.themeInput')
    let i = cloneList.querySelector('.bi')
    let p = cloneList.querySelector('p')

    i.classList.add(arrayIconClass)
    p.innerText = arrayName
    label.setAttribute('for', `theme${arrayIndex}`)
    input.setAttribute('id', `theme${arrayIndex}`)
    input.setAttribute('value', arrayType)

    input.addEventListener("click", function () {
        if (input.checked) {
            if (selectArray.length < 2) {
                selectArray.push(input.value)
            } else {
                input.checked = false
            }
        } else {
            selectArray.splice(input.value, 1)
        }
    })
    return cloneList
}

document.getElementById("backPageBtn").addEventListener("click", function () {
    history.go(-1)
})
