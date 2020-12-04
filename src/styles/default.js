export const sizes = {
    page:920,
    navbar:{
        width:{
            full:"200",
            min:"50"
        },
        button:{
            w:"40",
            h:"40",
            m:"5",
            f:"30",
        }

    },
}
export const colors = {
    navbar:{
        bg:"#71dcbfab",
        scroller:"#07dca3"
    }
}

export const backgroundImage = (src=-1,type=0)=>`
        ${src !== -1?`background-image:url(${src})`:""};
        background-position: center;
        background-repeat: no-repeat;
        background-size: ${['contain',"cover"][type]};
`

export const animation = (args,delay = ".5",type = "ease-in") =>{
    return `-webkit-transition: ${args.map(arg=>`${arg} ${delay}s ${type}`)};
            -moz-transition: ${args.map(arg=>`${arg} ${delay}s ${type}`)};
            -o-transition: ${args.map(arg=>`${arg} ${delay}s ${type}`)};
            transition: ${args.map(arg=>`${arg} ${delay}s ${type}`)};
    `
}

export const rotate = (name)=>{
    return `
        @-moz-keyframes ${name} { 
            0% { -moz-transform: rotate(0deg); } 
            30% { -moz-transform: rotate(1800deg); } 
            100% { -moz-transform: rotate(360deg); } 
        }
        @-o-keyframes ${name} { 
            0% { -o-transform: rotate(0deg); } 
            30% { -o-transform: rotate(1800deg); } 
            100% { -o-transform: rotate(360deg); } 
        }@-webkit-keyframes ${name} { 
            0% { -webkit-transform: rotate(0deg); } 
            30% { -webkit-transform: rotate(1800deg); } 
            100% { -webkit-transform: rotate(360deg); } 
        }@keyframes ${name} { 
            0% { transform: rotate(0deg); } 
            30% { transform: rotate(1800deg); } 
            100% { transform: rotate(360deg); } 
        }
    `
}
export const bgc = (name)=>{
    return `
        @keyframes ${name} { 
            0% {
                height:0;
                width:0;
                left:50%;
                top:50%;
                opacity: 0; 
            } 
            40% { 
                width:100%;
                height:100%;
                left:0;
                top:0;
                opacity: 1; 
            }  
            100% { 
               height:0;
                width:0;
                left:50%;
                top:50%;
                opacity: 0; 
            } 
        }
    `
}