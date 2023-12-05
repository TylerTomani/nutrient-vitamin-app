const ulLiAs = document.querySelectorAll('.topic-header ul li a')
const dropUls = document.querySelectorAll('.drop-ul')
const subDropUls = document.querySelectorAll('.sub-drop-ul ')

function hideDropUls(){
    dropUls.forEach(dropUl => {
        let parent = getTopicHeader(dropUl.parentElement)
        let uls = parent.querySelectorAll('ul')
        uls.forEach(ul => {
            if(!ul.classList.contains('show')){
                ul.classList.add('hide')
            } else {
                const subUl = parent.querySelector('ul > li > ul')
                if(subUl.classList.contains('hide')){
                    subUl.classList.remove('hide')
                }
            }
        })
    })
}

function hideSubDropUls(){
    subDropUls.forEach(subDropUl => {
        let parent = subDropUl.parentElement
        let uls = parent.querySelectorAll('ul')
        uls.forEach(ul => {
            if(!ul.classList.contains('show')){
                ul.classList.add('hide')
            }
        })
    })
}
hideSubDropUls()
hideDropUls()

dropUls.forEach(dropUl => {
    dropUl.addEventListener('click', e => {
        const parent = getTopicHeader(e.target.parentElement)
        const ul = parent.querySelector('ul')
        hideSubDropUls()
        if(ul.classList.contains('hide')){
            hideDropUls()
            ul.classList.remove('hide')
        } else {
            ul.classList.add('hide')
        }
    })
})

subDropUls.forEach(subDropUl => {
    subDropUl.addEventListener('click', e => {
        const parent = e.target.parentElement
        const ul = parent.querySelector('ul')
        if(ul.classList.contains('hide')){
            ul.classList.remove('hide')
        } else {
            ul.classList.add('hide')
        }
    })
})


function getTopicHeader(parent){
    if(parent.classList.contains('topic-header')){
        return parent
    } else if(parent.parentElement){
        return getTopicHeader(parent.parentElement)
    } else {
        return null
    }
}
