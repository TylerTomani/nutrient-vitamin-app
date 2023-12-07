const subSectionTitlesH4As = document.querySelectorAll('.sub-section > h4 > a')


addEventListener('keydown', e => {
    subSectionTitlesH4As.forEach(a => {
        if(e.key === a.id[0]){
            a.focus()
            console.log(a)
        }
    })
})

const sourcesLink = document.getElementById('sourcesLink')

sourcesLink.addEventListener('click', e => {
    e.preventDefault()
    const gparent = e.target.parentElement.parentElement
    const ul = gparent.querySelector('ul')
    toggleUl(ul)
})

function toggleUl(ul){
    if(ul.classList.contains('hide')){
        ul.classList.remove('hide')
    } else {
        ul.classList.add('hide')
    }
}