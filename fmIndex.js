fmData.forEach(arr => {

    let rowDiv = document.createElement('section')
    rowDiv.classList.add('result')
    
    arr.forEach((ele, index) => {

        let div = document.createElement('div')

        if (index === 5){
            if (ele === 'check'){
                let but = document.createElement('button')
                but.classList.add('button-ok')
                but.innerHTML = "OK"
                div.appendChild(but)
            }else if(ele === 'value'){
                let inp = document.createElement('input')
                inp.type = 'text'
                inp.placeholder = 'Record value'
                div.appendChild(inp)
            }else if (ele === 'passfail'){
                let passButton = document.createElement('button')
                passButton.classList.add('button-passfail')
                passButton.innerHTML = 'Pass'
                let failButton = document.createElement('button')
                failButton.classList.add('button-passfail')
                failButton.innerHTML = 'Fail'

                div.appendChild(passButton)
                div.appendChild(failButton)
            }
        }else{
            div.innerHTML = ele
        }

        
        rowDiv.appendChild(div)
    })

    document.querySelector('.results').appendChild(rowDiv)
})