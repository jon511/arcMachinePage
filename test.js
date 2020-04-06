const fmItems = []

const fmTitle = new FmTitle();
let selectedLanguage = 'en'
const languageChangeRequested = () => {
    const currentLang = FmTitle.language[selectedLanguage]

    document.querySelector('#fmTitle Label').innerHTML = currentLang.Title
    document.querySelector('#fmProgram Label').innerHTML = currentLang.Program
    document.querySelector('#fmLine Label').innerHTML = currentLang.Line
    document.querySelector('#fmDocNumber Label').innerHTML = currentLang.DocumentNumber
    document.querySelector('#fmRevision Label').innerHTML = currentLang.Revision
    document.querySelector('#fmRevisionDate Label').innerHTML = currentLang.RevDate
    document.querySelector('#fmReleaseBy Label').innerHTML = currentLang.ReleaseBy
    document.querySelector('#fmApproval Label').innerHTML = currentLang.Approval
    document.querySelector('#createButton').innerHTML = currentLang.Create

    
    const itemLang = FmTitle.itemLanguage[selectedLanguage]
    console.log(itemLang)

    document.querySelector('.col2').innerHTML = itemLang.Item
    document.querySelector('.col3').innerHTML = `${itemLang.Requirement} / ${itemLang.Gage}`
    document.querySelector('.col4').innerHTML = itemLang.Responsible
    document.querySelector('.col5').innerHTML = itemLang.Frequency
    document.querySelector('.col6').innerHTML = itemLang.ResultType

    document.querySelector('#item label').innerHTML = itemLang.Item
    document.querySelector('#result label').innerHTML = itemLang.ResultType
    document.querySelector('#gage label').innerHTML = itemLang.Gage
    document.querySelector('#requirement label').innerHTML = itemLang.Requirement
    document.querySelector('#frequency label').innerHTML = itemLang.Frequency
    document.querySelector('#responsible label').innerHTML = itemLang.Responsible
    document.querySelector('#addButton').innerHTML = itemLang.AddItem
    
}

let langSel = document.getElementById('lan')

langSel.addEventListener('change', () => {
    selectedLanguage = langSel.value
    languageChangeRequested()
    //createPreview()
})

languageChangeRequested(document.getElementById('lan').value)

const createButtonclicked = () => {
    let title = document.querySelector('#fmTitleValue').value
    let program = document.querySelector('#fmProgramValue').value
    let line = document.querySelector('#fmLineValue').value
    let docNumber = document.querySelector('#fmDocNumberValue').value
    let rev = document.querySelector('#fmRevisionValue').value
    let revDate = document.querySelector('#fmRevisionDateValue').value
    let releaseBy = document.querySelector('#fmReleaseByValue').value
    let approval = document.querySelector('#fmApprovalValue').value
    fmTitle.addInfo(langSel.value,title, program, line, docNumber, rev,revDate, releaseBy, approval)
    
    createPreview()
}
document.querySelector('#createButton').addEventListener('click', createButtonclicked)


const createPreview = () => {
    document.querySelector('.createFormClass').classList.add('hidden')
    let preDiv = document.querySelector('#fmSheetHeader')
    preDiv.innerHTML = ``
    let h2 = document.createElement('h2')
    const currentTitleData = fmTitle.TitleData[selectedLanguage]
    const currentLang = FmTitle.language[selectedLanguage]
    console.log(currentTitleData)
    h2.innerHTML = `FM Sheet ${currentTitleData.Title} Preview`
    
    const titleDiv = document.createElement('div')
    titleDiv.innerHTML = currentTitleData.Title
    titleDiv.classList.add('titleClass')
    const programDiv = document.createElement('div')
    programDiv.innerHTML = `<strong>${currentLang.Program}:</strong> ${currentTitleData.Program}`
    programDiv.classList.add('programClass')
    const topLine = document.createElement('div')
    topLine.classList.add('topLine')
    const lineSpan = document.createElement('span')
    lineSpan.innerHTML = `<strong>${currentLang.Line}</strong>: ${currentTitleData.Line}`
    // lineSpan.classList.add('lineClass')
    const docNumSpan = document.createElement('span')
    docNumSpan.innerHTML = `<strong>${currentLang.DocumentNumber} </strong>${currentTitleData.DocumentNumber}`
    // docNumSpan.classList.add('docNumClass')
    const revSpan = document.createElement('span')
    revSpan.innerHTML = `<strong>${currentLang.Revision}: </strong>${currentTitleData.Revision}`
    // revSpan.classList.add('revClass')
    topLine.appendChild(lineSpan)
    topLine.appendChild(docNumSpan)
    topLine.appendChild(revSpan)
    const bottomLine = document.createElement('div')
    bottomLine.classList.add('bottomLine')
    const revDateSpan = document.createElement('span')
    revDateSpan.innerHTML = `<strong>${currentLang.RevDate}</strong>: ${currentTitleData.RevDate}`
    // revDateSpan.classList.add('revDateClass')
    const relBySpan = document.createElement('span')
    relBySpan.innerHTML = `<strong>${currentLang.ReleaseBy}: </strong>${currentTitleData.ReleaseBy}`
    // relBySpan.classList.add('relByClass')
    const appSpan = document.createElement('span')
    appSpan.innerHTML = `<strong>${currentLang.Approval}: </strong>${currentTitleData.Approval}`
    // appSpan.classList.add('approvalClass')
    bottomLine.appendChild(revDateSpan)
    bottomLine.appendChild(relBySpan)
    bottomLine.appendChild(appSpan)


    //preDiv.appendChild(h2)
    preDiv.appendChild(titleDiv)
    preDiv.appendChild(programDiv)
    preDiv.appendChild(topLine)
    preDiv.appendChild(bottomLine)

}

const updateItemsForm = () => {

    let sampleDiv = document.querySelector('#formPreview')
    sampleDiv.innerHTML = `<div id="sampleDiv" class="sampleDivClass">
    <div class="col1"></div>
    <div class="col2">Item To Inspect</div>
    <div class="col3">Requirement / Gage</div>
    <div class="col4">Responsible</div>
    <div class="col5">Frequency</div>
    <div class="col6">Result</div>
</div>`


    fmItems.forEach((item, index) => {
        const row = document.createElement('div')
        row.classList.add('sampleDivClass')

        const col1 = document.createElement('div')
        col1.classList.add('col1')
        col1.innerHTML = `${index + 1}`

        const col2 = document.createElement('div')
        col2.classList.add('col2')
        col2.innerHTML = item.data[selectedLanguage].item

        const col3 = document.createElement('div')
        col3.classList.add('col3')
        col3.innerHTML = `${item.data[selectedLanguage].requirement} / ${item.data[selectedLanguage].gage}`

        const col4 = document.createElement('div')
        col4.classList.add('col4')
        col4.innerHTML = item.data[selectedLanguage].responsible

        const col5 = document.createElement('div')
        col5.classList.add('col5')
        col5.innerHTML = item.data[selectedLanguage].frequency

        const col6 = document.createElement('div')
        col6.classList.add('col6')
        if (item.data[selectedLanguage].resultType == 'checkbox'){
            col6.innerHTML = `<button class="okButton">OK</button><button class="okButton">Not Ok</button>`
        }else if(item.data[selectedLanguage].resultType == 'passFail'){
            col6.innerHTML = `<button class="okButton">Pass</button><button class="okButton">Fail</button>`
        }else if(item.data[selectedLanguage].resultType == 'numberInput'){
            col6.innerHTML = `<input type="number">`
        }else if(item.data[selectedLanguage].resultType == 'textInput'){
            col6.innerHTML = `<input type="text">`
        }
        console.log(item.data[selectedLanguage].resultType)
        //col6.innerHTML = item.data[selectedLanguage].resultType

        row.appendChild(col1)
        row.appendChild(col2)
        row.appendChild(col3)
        row.appendChild(col4)
        row.appendChild(col5)
        row.appendChild(col6)

        sampleDiv.appendChild(row)
    });
}

const addItem = () => {
    const item = document.querySelector('#itemValue').value
    const requirement = document.querySelector('#requirementValue').value
    const gage = document.querySelector('#gageValue').value
    const resp = document.querySelector('#responsibleValue').value
    const  freq = document.querySelector('#frequencyValue').value
    const freqType4 = document.querySelector('#everyFourHours').checked
    console.log(freqType4)
    const resultType = document.querySelector('#resultValue').value

    const thisItem = new FmItem();
    thisItem.addData(selectedLanguage, item, requirement, gage, resp, freq, resultType)

    fmItems.push(thisItem)
    updateItemsForm()
}

document.querySelector('#addButton').addEventListener('click', addItem)



