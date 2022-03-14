const categoryList = [
    { type: 'course', category: '課程' },
    { type: 'exhibition', category: '展覽' },
    { type: 'party', category: '派對' },
    { type: 'reunion', category: '聚會' },
    { type: 'market', category: '市集' },
    { type: 'competition', category: '比賽' },
    { type: 'Performance', category: '表演' },
    { type: 'seminar', category: '研討會' },
    { type: 'sharing session', category: '分享會' },
    { type: 'meeting', category: '見面會' },
    { type: 'promotional activity', category: '宣傳活動' },
    { type: 'tour', category: '導覽' },
    { type: 'experience', category: '體驗' },
]
let category = document.querySelector('#category')
let categoryShow = document.querySelector('.categoryShow')

categoryList.forEach((item, index) => {
    let _tem = creatCategoryCard(item.type, item.category, index)
    categoryShow.append(_tem)
})

function creatCategoryCard(arrayType, arrayCategory, arrayindex) {
    let cloneList = category.content.cloneNode(true)
    let label = cloneList.querySelector('.categorylabel')
    let input = cloneList.querySelector('.categoryInput')

    label.innerText = arrayCategory
    input.setAttribute('id', `category${arrayindex}`)
    input.setAttribute('value', arrayType)
    label.setAttribute('for', `category${arrayindex}`)

    return cloneList
}

document.getElementById("backPageBtn").addEventListener("click", function () {
    history.go(-1)
})