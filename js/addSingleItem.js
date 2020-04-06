const removeItem = (node) => {
    const a = node.parentNode
    const i = a.parentNode
    a.removeChild(node)
    const labels = a.querySelectorAll('.pm-label')

    for (let i = 0; i < labels.length; i++)
        labels[i].innerHTML = `${i + 1}. `
}

const addItem = (p) => {

    const count = p.querySelectorAll('.pm-item').length

    const div = document.createElement('div')
    div.classList.add('form-group')
    const label = document.createElement('div')
    label.innerHTML =  `${count + 1}. `
    label.classList.add('control-label')
    label.classList.add('pm-label')
    label.setAttribute('style', 'text-align:right')

    const itemDiv = document.createElement('div')
    const i = document.createElement('input')
    i.setAttribute('type', 'text')
    i.setAttribute('placeholder', 'Enter PM action item.')
    i.classList.add('pm-item')

    itemDiv.appendChild(i)

    const buttonDiv = document.createElement('div')
    const button = document.createElement('button')
    button.innerHTML = 'Remove'
    button.addEventListener('click', () => { removeItem(itemDiv.parentNode) })
    div.appendChild(label)
    div.appendChild(itemDiv)
    div.appendChild(button)
    p.appendChild(div)
}

const addSection = () => {
    let mainDiv = document.querySelector('#mainSection')
    const count = mainDiv.querySelectorAll('section').length

    const section = document.createElement('section')
    section.id = `s_${count}`
    section.classList.add('mySections')

    const sectionHeader = document.createElement('input')
    sectionHeader.setAttribute('type', 'text')
    sectionHeader.setAttribute('placeholder', 'Enter section header')
    sectionHeader.classList.add('sectionHeader')

    const addItemButton = document.createElement('button')
    addItemButton.classList.add('addItemButton')
    addItemButton.innerHTML = 'Add item'
    addItemButton.addEventListener('click', () => { addItem(section) })

    
    section.appendChild(sectionHeader)
    section.append(addItemButton)

    mainDiv.appendChild(section)
    addItem(section)
}

let lang = 'en'

addSection()
addSection()

