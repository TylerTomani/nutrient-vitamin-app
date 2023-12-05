
const iframe = document.querySelector('iframe')
let loaded = false
let currentTopic
ulLiAs.forEach(ulLiA => {
    if(ulLiA.hasAttribute('autofocus')){
        iframe.src = ulLiA.href
        console.log(e.target)       
    }
    ulLiA.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        iframe.src = e.target.href
        if(loaded){
            iframe.focus()
            currentTopic = e.target
        }
        loaded = !loaded
        
    })
})
iframe.addEventListener('focusout', e => {
    currentTopic.focus()
})