//URL
const basename = "master/sta-exchange/demo/";

//CODE-EDITOR
const codeEditorConfig = {
    mode: 'xml',
    theme: 'default',
    lineNumbers: true,
    lineWrapping: true
}
//MULTI-SELECT
const selectConfig = {
    placeholder : "Select a joke ",
    loadingText : "Loading...",
    styles : {
        background: "#fbfbfb",
        placeholderColor : "#aeb3ba",
        chipBackground : "#ffffff",
        chipText : "#525c6c",
        messageBackground : "#fbfbfb",
        itemBackground : "#fbfbfb",
        itemColor : "#525c6c",
        itemHover : "#ebedef"
    }
}

//INPUTS
const inputConfig = {
    styles: {
        'border-color': '#a9a9a9',
        'background': '#fff',
        'color': 'rgba(0,0,0,.87)'
    }
}

//BUTTONS
const buttonConfig = {
    styles: {
        'primary': {
            background: "#009dff",
            color: "#fff",
            border: "none",
            'box-shadow': 'none',
            'width': '224px',
            ':focus': {
                'background': '#009dff',
                'color': '#ffffff',
                'border': 'none',
                'box-shadow': 'none'
            },
            ':hover': {
                'background': '#008fe8',
                'color': '#ffffff',
                'border': 'none',
                'box-shadow': 'none'
            },
            ':active': {
                'color': 'white',
                'background': '#023554',
                'border': 'none',
                'box-shadow': 'none'
            },
            ':disabled': {
                'color': 'white',
                'background': '#aeb3ba',
                'border': 'none',
                'box-shadow': 'none'
            }
        },
        'secondary': {
            background: "#fff",
            color: "#6c6c6c",
            border: "solid 1px #d7d7d7",
            'box-shadow': 'none',
            ':focus': {
                'background': '#fff',
                'color': '#2e2e2e',
                'border': '1px solid #a9a9a9',
                'box-shadow': 'none'
            },
            ':hover': {
                'background': 'white',
                'color': '#2e2e2e',
                'border': '1px solid #a9a9a9',
                'box-shadow': 'none'
            },
            ':active': {
                'color': 'white',
                'background': '#d0d0d0',
            },
            ':disabled': {
                'color': '#d7d7d7',
                'background': 'white',
                'border': '1px solid #fff',
                'box-shadow': 'none'
            }
        },
        'third': {
            background: "rgba(255,255,255,0)",
            color: "#6c6c6c",
            border: "none",
            'box-shadow': 'none',
            ':focus': {
                'background': 'rgba(255,255,255,0)',
                'color': '#2e2e2e',
                'border': 'none',
                'box-shadow': 'none'
            },
            ':hover': {
                'background': 'rgba(255,255,255,0)',
                'color': '#2e2e2e',
                'border': 'none',
            },
            ':disabled': {
                'color': '#d7d7d7',
                'background': 'none',
                'border': 'none',
                'box-shadow': 'none'
            }
        },
        'dark-outline': {
            background: "rgba(255,255,255,0)",
            color: "#ffffff",
            border: "1px solid #ffffff",
            'box-shadow': 'none',
            ':focus': {
                'background': 'white',
                'color': '#2e2e2e',
                'border': '1px solid #a9a9a9',
                'box-shadow': 'none'
            },
            ':hover': {
                'background': 'white',
                'color': '#2e2e2e',
                'border': '1px solid #a9a9a9',
                'box-shadow': 'none'
            },
            ':disabled': {
                'color': '#d7d7d7',
                'background': 'rgba(255, 255, 255, 0)',
                'border': 'solid 1px #d7d7d7',
                'box-shadow': 'none'
            }
        },
        'dark-filled': {
            background: "#fff",
            color: "#6c6c6c",
            border: "none",
            'box-shadow': 'none',
            ':focus': {
                'background': 'white',
                'color': '#2e2e2e',
                'border': 'none',
                'box-shadow': 'none'
            },
            ':hover': {
                'background': 'white',
                'color': '#2e2e2e',
                'border': 'none',
                'box-shadow': 'none'
            },
            ':disabled': {
                'color': 'white',
                'background': 'rgba(255, 255, 255, 0.2)',
                'border': 'none',
                'box-shadow': 'none'
            }
        },
        'shadowed': {
            background: "#fff",
            color: "#6c6c6c",
            border: "none",
            'box-shadow': 'box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2)',
            ':focus': {
                'background': 'white',
                'color': '#2e2e2e',
                'border': 'none',
                'box-shadow': 'box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.4)'
            },
            ':hover': {
                'background': 'white',
                'color': '#2e2e2e',
                'border': 'none',
                'box-shadow': 'box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.4)'
            },
            ':disabled': {
                'color': 'white',
                'background': 'rgba(255, 255, 255, 0.6)',
                'border': 'none',
                'box-shadow': 'box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2)'
            }
        }
    },
    options: [
        {'key': 1, text:'Normal', value: null},
        {'key': 2, text:'Hover', value: ':hover'},
        {'key': 3, text:'Disabled', value: ':disabled'},
    ]

}

//CARD
const cardConfig = {
    'styles':{
        'body': {
            'background': 'white',
            'color': '#525c6c',
            'border-color': 'white',
        },
        'header': {
            'background': '#f8fcff',
            'color': '#707986',
            'border-color': 'white',
        }

    }

}

//MODALS
const modalConfig = {
    buttonConfig,
    size: null, //mini, tiny, small, large, fullscreen
    closeIcon: false, //{bool}
    closeOnDimmerClick: true, //{bool}. Whether or not the Modal should close when the dimmer is clicked.
    closeOnDocumentClick: false, //{bool}. Whether or not the Modal should close when the document is clicked.
    styles: {
        action: {
            button: {
                width: '120px',
            },
            background: '#fff',
            color: 'rgba(0,0,0,.87)'
        },
        header: {
            background: '#f8fcff',
            color: '#707986'
        },
        body: {
            background: '#fff',
            color: 'rgba(0,0,0,.87)'
        }

    }
}

//CALENDAR
const calendarConfig = {
    buttonConfig,
    locale: 'es',
    buttonLabels:{
        'today': 'Hoy',
        'yesterday': 'Ayer',
        'last7Days': 'Últimos 7 días',
        'last30Days': 'Últimos 30 días',
        'lastMonth': 'Mes pasado',
        'compare': 'Comparar',
        'to': 'a'
    }
}

// MENU
const menu = {
    styles : {
        backgroundColor :  "#ebedef",
        title : "#525c6c",
        items : {
            color : "#525c6c",
            hover : "#677489"
        },
        subItems : {
            color : "#525c6c",
            hover : "#677489"
        }
    },
    chevron : true,
    items : [{
        icon : './img/home.svg',
        name : "Dashboard",
        target: "/",
    },{
        icon : './img/home.svg',
        name : "Pantallas de Login",
        target: "login",
    },{
        icon : './img/home.svg',
        name : "Layout demo",
        target: "/layout-demo",
    },{
        icon : './img/target.svg',
        name : "Componentes",
        onClick : () => {
            alert('Haga click en un componente');
        },
        subItems : [{
            name : "Botones",
            target: "buttons",
        },{
            name : "Tablas",
            target: "table",
        },{
            name : "Datepickers",
            target: "datepickers",
        },{
            name : "Inputs",
            target: "inputs",
        },{
            name : "Modals",
            target: "modals",
        },{
            name : "Multi Selects",
            target: "multi-selects",
        }]
    /*},{
        icon : './img/target.svg',
        name : "Advertiser",
        onClick : (that) => {
            return that.itemClicked("Advertiser");
        },
        subItems : [{
            name : "Offer groups",
            target: "/buttons",
            onClick : (that) => {
                return that.itemClicked("Offer group");
            }
        },{
            name : "Offers",
            target: "/buttons",
            onClick : (that) => {
                return that.itemClicked("Offer");
            }
        },{
            name : "Line items",
            target: "/buttons",
            onClick : (that) => {
                return that.itemClicked("Line items");
            }
        }]
    },{
        icon : './img/home.svg',
        name : "Publishers",
        subItems : [{
            name : "Websites",
            target: "/buttons",
            onClick : (that) => {
                return that.itemClicked("Offer group");
            }
        },{
            name : "Sections",
            target: "/buttons",
            onClick : (that) => {
                return that.itemClicked("Offer");
            }
        }],
        onClick : (that) => {
            return that.itemClicked("Publisher");
        }
    },{
        icon : './img/home.svg',
        name : "Report",
        target: "/",
        onClick : (that) => {
            return that.itemClicked("Report");
        }
    */}]
}
// HEADER
const header = {
    logo : './img/logo.svg',
    styles : {
        backgroundColor :  "#ebedef",
        menu : {
            circleBackground : "#16cbac",
            circleText : "white",
            text : "rgba(0,0,0,.87)"
        }
    },
    searchBar : {
        icon : {
            name : "search",
            position : "left",
        },
        onEnter : (value) => {
            return alert(value);
        }
    },
    userMenu : {
        text : "Anton odena",
        items : [{
            text : "New",
            action : () => {
                return alert("MenuDrop");
            }
        },{
            text : "Logout",
            action : () => {
                return alert("MenuDrop");
            }
        }]
    }
}

// LAYOUT
const layoutConfig = {
    menu,
    header,
}

export default {
    layoutConfig,
    buttonConfig,
    selectConfig,
    calendarConfig,
    modalConfig,
    inputConfig,
    cardConfig,
    basename,
    codeEditorConfig
}
