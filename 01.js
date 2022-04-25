fetch(`/Organizer/EditOrganizer/${id}`, { method: 'GET' })
.then(res => {
console.log(res)
location.assign(res.url)
})