class FmItem{
    constructor(){
        this.data = {
            en: {
                item: "",
                requirement: "",
                gage: "",
                responsible: "",
                frequency: "",
                resultType: "",
            },
            es: {
                item: "",
                requirement: "",
                gage: "",
                responsible: "",
                frequency: "",
                resultType: "",
            },
            zh: {
                item: "",
                requirement: "",
                gage: "",
                responsible: "",
                frequency: "",
                resultType: "",
            },
            mk: {
                item: "",
                requirement: "",
                gage: "",
                responsible: "",
                frequency: "",
                resultType: "",
            },
        }
    }

    addData(lang, item, req, gage, res, freq, resultType){
        this.data[lang].item = item
        this.data[lang].requirement = req
        this.data[lang].gage = gage
        this.data[lang].responsible = res
        this.data[lang].frequency = freq
        this.data[lang].resultType = resultType
    }

}

class FmSheet{
    constructor(lang = 'en'){
        this.currentLanguage = lang

    }
}

class FmTitle{
    constructor(){
        this.TitleData = { en: {}, es: {}, zh: {}, mk: {}, }
    }

    addInfo(lang, title, program, line, docNumber, rev, revDate, releaseBy, approval){
        this.TitleData[lang].Title = title
        this.TitleData[lang].Program = program;
        this.TitleData[lang].Line = line
        this.TitleData[lang].DocumentNumber = docNumber
        this.TitleData[lang].Revision = rev
        this.TitleData[lang].RevDate = revDate
        this.TitleData[lang].ReleaseBy = releaseBy
        this.TitleData[lang].Approval = approval
    }

}

FmTitle.language = {
    en : {
        Title: 'Title',
        Program: 'Program',
        Line: 'Line-WS',
        DocumentNumber: 'Document No.',
        Revision: 'Revision',
        RevDate: 'Revision Date',
        ReleaseBy: 'Release By',
        Approval: 'Approval',
        Create: 'Create',
    },
    es : {
        Title: 'Título',
        Program: 'Programa',
        Line: 'Línea',
        DocumentNumber: 'Documento núm.',
        Revision: 'Revisión',
        RevDate: 'Fecha de revisión',
        ReleaseBy: 'Lanzamiento por',
        Approval: 'Aprobación',
        Create: 'Crear',
    },
    zh : {
        Title: '标题',
        Program: '项目',
        Line: '线及工位',
        DocumentNumber: '档案编号',
        Revision: '修正版',
        RevDate: '修订日期',
        ReleaseBy: '编制',
        Approval: '批准',
        Create: '创建',
    },
    mk : {
        Title: 'Наслов',
        Program: 'Програма',
        Line: 'Линија',
        DocumentNumber: 'број на документ',
        Revision: 'број на документ',
        RevDate: 'Датум на ревизија',
        ReleaseBy: 'Објавено од',
        Approval: 'Одобрување',
        Create: 'Креирај',
    },
}

FmTitle.itemLanguage = {
    en: {
        Item: "Item To Inspect",
        ResultType: "Result Type",
        Gage: "Gage",
        Requirement: "Requirement",
        Frequency: "Frequency",
        Responsible: "Responsible",
        AddItem: "Add Item",
    },
    es: {
        Item: "Artículo a inspeccionar",
        ResultType: "Tipo de resultado",
        Gage: "Calibracion",
        Requirement: "Requerimientos",
        Frequency: "Frequencia",
        Responsible: "Resultado",
        AddItem: "Nuevo artículo",
    },
    zh: {
        Item: "待检项目",
        ResultType: "结果类型",
        Gage: "量具",
        Requirement: "要求",
        Frequency: "频率",
        Responsible: "责任人",
        AddItem: "新增项目",
    },
    mk: {
        Item: "ДА СЕ ПРОВЕРИ",
        ResultType: "Тип на резултат",
        Gage: "МЕРЕЊЕ",
        Requirement: "БАРАЊЕ",
        Frequency: "ФРЕКВЕНЦИЈА",
        Responsible: "Одговорен",
        AddItem: "Додадете ставка",
    }
}

