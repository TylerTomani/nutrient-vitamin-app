const vitamins = document.getElementById('vitamins')
const topics = document.querySelectorAll('.topic')
const subTopicsAs = document.querySelectorAll('.sub-topic > li > a')
const subTopics2As = document.querySelectorAll('.sub-topic-2 > li > a')
let topicFocus = true
let subTopicFocus = false
let subTopic2Focus = false
let topicClicked = false
topics.forEach(topic =>{
    topic.addEventListener('focusin', e =>{
        topicFocus = true
        subTopicFocus = false
        subTopic2Focus = false
    })
})
subTopicsAs.forEach(subTopicA => {
    subTopicA.addEventListener('focusin', e => {
        topicFocus = false
        subTopicFocus = true
        subTopic2Focus = false
    })
    subTopicA.addEventListener('focusin', e => {
        topicFocus = false
        subTopicFocus = true
        subTopic2Focus = false
    })
})
subTopics2As.forEach(subTopic2A => {
    subTopic2A.addEventListener('focusin', e => {
        topicFocus = false
        subTopicFocus = false
        subTopic2Focus = true
    })
})

topics.forEach(topic => {
    topic.addEventListener('click', e => {
        topicClicked = !topicClicked
        if(topicClicked){
            topicFocus = false
            subTopicFocus = true
        }
    })
})

addEventListener('keydown', e => {
    let key = e.key
    if(key === 'v' ||  key === 'V'){
        vitamins.focus()
    }
    topics.forEach(topic =>{
        if(topicFocus){
            if(topic.id[0] === key && topic.classList.contains('topic')){
                topic.focus()
            }
        } 
    })
    subTopicsAs.forEach(subTopicA => {
        let gparent = subTopicA.parentElement.parentElement
        if(subTopicFocus){
            if(subTopicA.id[0] === key && gparent.classList.contains('sub-topic')){
                subTopicA.focus()
            }
        }
    })
    subTopics2As.forEach(subTopic2A => {
        let gparent = subTopic2A.parentElement.parentElement
        const b1 = document.getElementById('b1')
        const b12 = document.getElementById('b12')
        if(subTopic2Focus){
            if(subTopic2A.id[1] === key && gparent.classList.contains('sub-topic-2')){
                console.log(subTopic2A)
                subTopic2A.focus()
            }
            if(key == '1'){
                b1.focus()
            }
            if(key == '9'){
                b12.focus()
            }
        }
    })

})

