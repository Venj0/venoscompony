import styled from "styled-components";
import {animation, backgroundImage} from "./default";

let bgc = {
    lite: "#fff",
    dark: "#1e1e1e",
    error: "#ff0000",
    green: "#00ff00"
}

let getImgWH = (w, h) => {
    w = (w - (w > 1024 ? 100 : 50)) / 2

    let size = {
        h: 0,
        w: 0,
        is: 0,
    }
    if (w > 350) {
        size.w = Math.min(w,h)
        size.h = Math.min(w,h)
        size.is = Math.min(w,h)-90
    }
    else {
        size.w = w * 2
        size.h = NaN
        size.is = 200
    }
    return size
}
let getSlideItemW = (w)=>w>549?200:((w-50)/2)


export const StHeader = styled.div`
  width: ${props => props.open ? props.w : (props.w > 1024 ? 100 : 50)}px;
  position: fixed;
  height: ${props => props.h}px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  z-index: 10000000;
  overflow: hidden;
  background-color: #2a3238;
  ${animation(["width"])};
`
export const StHeaderCTRL = styled.div`
display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: ${props => props.h}px;
  //width: 100%;
  width: ${props => props.w > 1024 ? 100 : 50}px;
  // width: ${(window.innerWidth > 1024 ? 100 : 50)}px;;
  background-color: #${props => props.bgc ? "1e1e1e" : "fff"};
  position:absolute;
  right: 0;
  top: 0;
  ${animation(["width", "background-color"])}
  hr{

}
  .open{
  height: 40px;
  width: 200px;
  transform: rotate(-90deg);
  margin: 0;
  display: block;
  //display: flex;
  align-items: center;
  flex-wrap: wrap;
  p{
    display: inline-block;
    color: #${props => !props.bgc ? "1e1e1e" : "fff"};
    margin: 0;
    float:left;
    line-height: 20px;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 3px;
    height: 20px;
    
    overflow:hidden;
    width: 0;  
  }
  hr{    
    display: inline-block;
    //float:left;
    width: 60px;
    height: 2px;
    border:0;
    margin: 9px 35px;
    background-color: #${props => !props.bgc ? "1e1e1e" : "fff"};
  }
  .line {
    width: 140px;
    height: 20px;
    margin: 0;
    text-align: center;  
    overflow: hidden;
  }
  &:hover{
    
    .line{
      text-align: left;
      hr{
        margin: 9px 5px;
      }
      &.line2{
        width: 0;
      }
    }
    p{
      width: 60px;
      margin: 0 5px;
      text-align: center;

    }
  }
  *{
    ${animation(["all"])};
  }
  }
  .close{
    position: relative;
    width: 30px;
    height: 30px;
    overflow: hidden;
    //background-color: #4a5258;
    hr{
      left: -8px;
      position: absolute;
      width: 57px;
      height: 4px;
      background-color: #${props => !props.bgc ? "1e1e1e" : "fff"};
      border: 0;
      ${animation(["left", "top", "background-color"])}
    }
    .hr1{
      top: 18px;
      transform: rotate(45deg);
    } 
    .hr2{
      top: 8px;
      transform: rotate(-45deg);
    }
    &:hover{
      hr{
        left:6px;
      }
      .hr1{
        top:32px
      }
      .hr2{
        top:-6px
      }
    }
  }

`
export const StHeaderFlags = styled.div`
  width: 30px;
  margin: 0 ${props => ((props.w > 1024 ? 100 : 50) - 30) / 2}px;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .flag{
    width: 30px;
    height: 20px;
    box-shadow: 0 0 5px #4a5258;
    ${backgroundImage()}
  }
  ${props => backgroundImage(props.src)}
  ${
    props =>
        (props.src) ?
            `
              width: 40px;
              height: 120px;
              margin: 0 ${((props.w > 1024 ? 100 : 50) - 40) / 2}px;
            `
            : ``

}
  

`
export const StHeaderMenu = styled.div`
  width: ${props => props.w - (props.w > 1024 ? 100 : 50)}px;
  background-color: #5a6268;
  height: ${props => props.h}px;
  position:absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  >div{
    flex-basis: ${props => (props.w > 799 ? 50 : 0)}%;
    height:  ${props => props.h}px; ;
  
    min-width: 270px!important;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    //margin: ${props => props.morc ? "  0" : "50px 0 0"};
   
  }
  >.toggle{
    height: 0;
    overflow: hidden;
    width: 100%;
    position: absolute;
    text-align: center;
    line-height: 50px;   
    text-transform: uppercase;
    font-size: 30px;
    letter-spacing: 5px;
    color: #cec9c9;
    i{
      margin-left: 10px ;
      font-size: 20px;
    }
    left: 0;
    background-color: #${props => props.morc ? "232323" : "5a6268"};
  }
  .menu{
     
    top:${props => !props.morc ? (-props.h + (props.w > 589 ? 0 : 50)) : 0}px;
    .line{
      width: 100%;
      text-align: center;
    }
    a{
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      font-size: 30px;
      letter-spacing: 5px;
      color: #cec9c9;
      &:hover{
      color: #fff;
      }
      
    }
  }
  .contactUs{
    background-color: #232323;
    input,textarea{
     background-color: #232323!important;
    }
    bottom:${props => props.morc ? (-props.h + (props.w > 799 ? 0 : 50)) : 0}px;
  }
  >*{
    ${animation(["top", "bottom", "background-color"])}
  }
  @media (max-width: 799px){
    display: block;
    .menu,.contactUs{
      position:absolute;
      width: 100%;
      height:  ${props => props.h - 50}px; 

    }
    .toggle{
      height: 50px;
      top:${props => props.morc ? (props => props.h - 50) : 0}px;

    }
  }

`
export const StContent = styled.div`
 
  width: ${props => props.w - (props.w > 1024 ? 100 : 50)}px;
  margin: 0 0 0 ${props => (props.w > 1024 ? 100 : 50)}px;
  height: ${props => props.h}px;
  position:relative;
  

`

export const StContentHeader = styled.div`

  height: ${props => props.active ? 100 : 50}px ;
  background-color: ${props => !props.bgc ? bgc.lite : bgc.dark};
  display: flex;
  justify-content: flex-end;
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;

  ${animation(["background-color", "height"])}
  button{
    display: block;
    width: ${props => props.w > 600 ? 30 : props.w}px; 
    overflow: hidden;    
    //position:${props => props.w > 600 ? "absolute" : "initial"};  
    position:absolute;
    //background-color: #34da45;
    color: ${props => props.bgc ? bgc.lite : bgc.dark};
    font-size: 25px;
    text-align: center;
    line-height: 30px;
    opacity: 0;
    height: ${props => props.active ? 100 : 50}px; 
    top: 8px;
    right: ${props => props.w > 600 ? "calc(50% + 18px)" : "0"};
    ${animation(["opacity"])}
    i{
     display: ${props => props.w > 600 ? "block" : "none"}
    }
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    font-size: 30px;
    color: ${props => props.bgc ? bgc.lite : bgc.dark};
    flex-basis: 50%;
    min-width: 270px;
    border-left: 3px solid ${props => props.bgc ? bgc.lite : bgc.dark};
    padding-left: 25px;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
  &:hover{
    button{
      opacity: 1;
    }
  }
`

export const StStartPage = styled.div`
  width: ${props => props.w - (props.w > 1024 ? 100 : 50)}px;
  height: ${props => props.h}px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: ${bgc.dark};
  position:absolute;
  left: ${props => props.l}px;
  top:${props => props.active ? 0 : -props.h}px;
  ${props => animation(["top"], 1)};
  z-index: 10;
  .h1{
    flex-basis: 60%;
    font-size: 40px;
    letter-spacing: 5px;
    text-align: left;
    min-width: 270px;
    color:${bgc.lite};
    text-transform: uppercase;
        margin-bottom: -200px;
  }
  .h2{
    width: 60%;
    font-size: 35px;
    letter-spacing: 5px;
    margin: 10px auto;
    text-align: right;
    color:${bgc.lite};
    min-width: 270px;
    text-transform: uppercase;
  }
  .logo{
    height: ${props => props.w > props.h ? 160 : 80}px;
    width:  ${props => props.w > props.h ? 480 : 240}px;
    margin: 0 calc(50% - ${props => props.w > props.h ? 240 : 120}px);
    ${props => backgroundImage(props.src)};
    //transform: rotate(15deg);
  }
 
`

export const StPage = styled.div`
  background-color: ${props => !props.bgc ? bgc.lite : bgc.dark};
  width: ${props => props.w - (props.w > 1024 ? 100 : 50)}px;
  height: ${props => props.h - (props.z === 4 ? 0 : 50)}px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  position:absolute;
  left: 0;
  top:${props => [props.h - 50, 0, -props.h + 50][props.status]}px;
  ${props => animation(["top"])};//,[.8,.5,.8][props.status])};
  z-index: ${props => 1000 - 10 * props.z};

`

export const StLoading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
   
  z-index: 100000000;
  overflow: hidden;
  width: ${props => props.w}px;
  height: ${props => props.active ? props.h : 0}px;
  opacity: ${props => props.active ? 1 : 0};
  background-color: ${bgc.dark};
  ${animation(["opacity", "height"])}
  .logo{
  animation: bluring 3s  ;
  animation-iteration-count: 10000;
  }
  
    @keyframes bluring {
    0%{
      filter: blur(0);
      opacity: 1;
    }
    50%{
      filter: blur(3px);
      opacity: 0.5;
    }
    100%{
      filter: blur(0);
      opacity: 1;
    }
  }
   
  
 
`

export const StContactUs = styled.div`
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
  // background-color: ${bgc.dark};
   

 .form,.contacts{
    width: ${props => props.w > 799 ? 50 : 100}%;
    height: ${props => props.w > 799 ? props.h : NaN}px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  
  .form{
    //background-color: #07dca3;
    input,textarea{
      width: 90%;
      margin: 10px 5% 0;
      resize: none;
      outline: none;
      color: ${bgc.lite};
      background-color: ${bgc.dark};
      font-size: 16px;
    }
    input{ 
      
      
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      font-size: 18px;
      border-bottom: 2px dotted  ${bgc.dark};
      &:focus{
        border-bottom: 2px dotted  ${bgc.lite};
      }
      &.email.red  {
        //color: ${bgc.error };
        border-bottom: 2px solid  ${bgc.error};
      }
      &.sanded{
        color: ${bgc.green};
        opacity: 0;
        height: 0;
        overflow: hidden;
        ${animation(["opacity","height "])};
        &.accept{
          opacity: 1;
          height: 30px;
        }
      }
    }
    textarea{
      height: 100px;
     
      padding: 5px;
    }
    
    button{
      width: 100px;
      height: 30px;
      color: ${bgc.lite};
      display: block;
      margin: 10px auto 0 ;
      text-transform: uppercase;
      background-color: ${bgc.dark};
       ${animation(["color", "background-color"])}
      &:hover{
        color: ${bgc.dark};
        background-color: ${bgc.lite};
      }
    }
  }
  .contacts{
    
    border-bottom: ${props => props.w > 799 ? 0 : 2}px solid ${bgc.lite};
    padding-bottom: ${props => props.w > 799 ? 0 : 15}px;
    >div{
      width: 90%;
      margin: 10px 5%  0 ;
       
    }
    //background-color: ${bgc.dark};
    a{
      display: inline-block;
      float:right;
      width: calc(100% - 30px);
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
       
      color: #5a6268;
    }
    i{
      display: inline-block;
      float:left;
      width: 30px;
      height: 30px;
      line-height: 30px;
    }
    .tel,.email,.icons{
      width: 100%;
      padding: 0 10px ;
      display: inline-block;
      float: left;
      color: #5a6268;
      ${animation(["color", "background-color"])}
      a:hover{
         
          color: ${bgc.lite};
        
      }
      
    }
    .icons{
      text-align: left;
      padding-left: 3px;
      margin-top: 10px;
      a{
        width: 30px;
        display: inline-block;
        float: left;
        color:${bgc.lite};
        padding: 0;
        text-align: center;
        margin-right:  10px;
        &:hover{
          color: ${bgc.dark};
          background-color: ${bgc.lite};
        }
      }
    }
  }
  
`

export const StAboutUs = styled.div`
  display:flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  .img,.text{
      width: ${props => getImgWH(props.w, props.h).w}px;
      height: ${props => getImgWH(props.w, props.h).h}px;
      max-height: ${props => props.h - 40}px;
      max-width: ${props => props.h - 40}px;

  }
  .text{
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: normal;
    text-align: ${props => props.w > 799 ? "left" : "center"};
    
    >*{
      width: 100%;
      padding: 0 10px ;
      margin:  ${props => props.w > 799 ?10:0}px 0 0;
      
    }
    p{
      text-align: justify;
      font-size: 14px;
      line-height: 20px;
      max-height: ${props => props.w < 800?( getImgWH(props.w, props.h).is-60):NaN}px;
      overflow: hidden;
    }
    .header{
      font-size: 18px;
      font-weight: 600;

    }
    button{
      ${props => props.w > 799 ? "" : "margin: 0 auto"};
      height: 30px;
      width: fit-content;
      ${animation(["color", "background-color"])}

      background-color:${bgc.lite};
      color: ${bgc.dark};
      font-size: 16px;
      i{
        color: ${bgc.lite};
        margin-left: 10px;
      }
      &:hover{
        background-color:${bgc.dark};
        color: ${bgc.lite};
      }
    }
  }
  .img{
   
    position: relative;
    padding: ${props => props.w > 799 ? 20 : 0}px;
    .border,.image{
      position: ${props => props.w > 799 ? "absolute" : "initial"};
      width: ${props => getImgWH(props.w  , props.h).is}px;
      height: ${props => getImgWH(props.w  , props.h).is}px;
      max-height: 530px;
      max-width:  530px;
    }
    .image{
      left: 20px;
      top:  20px;      
      

      background-color: ${bgc.lite};
      ${props=>backgroundImage(props.src,1)};
      z-index: 1000;
      box-shadow: 0 0 5px #5a6368;
      ${props => props.w > 799 ? "" : "margin: 0 auto"};
    }
    .border{
      left: 70px;
      top:  70px;
      background-color: #0000;
      border: 2px solid #9e9e9e;
      z-index: 10;
      ${props => props.w > 799 ? "" : "display:none"};

    }
  }

`

export const StOurGroup = styled.div`
  display: flex;
  width: ${props=>props.w-(props.w>1024?100:50)}px;
  height: ${props=>props.h}px;
  overflow: hidden;
  flex-wrap: wrap;
  align-items: center;
  
`
export const StSlider = styled.div`
  display: block;
  position: relative;
  width: ${props=>props.w -(props.w>1024?100:50)}px;
  //justify-content: space-between;
  height: ${props=>getSlideItemW(props.w) * 1.5 +50}px;//${props=>props.h<350?props.h:350}px;
  margin: 0 auto;
  

  .arrow{position: absolute;
    height: ${props=>props.w>549?getSlideItemW(props.w) * 1.5+50:30}px;
    overflow:hidden;
    text-align: center;
    font-size: 25px;
    color: ${props=>props.type==="user"?bgc.lite:bgc.dark};
    background-color: ${props=>props.type!=="user"?bgc.lite:bgc.dark};
    width: 50px;
    bottom:  0;
    &.left{
      left: 0;  
    }
    &.right{
      right: 0;  
    }
     &:hover{
      color: ${props=>props.type !== "user"?bgc.lite:bgc.dark};
      background-color: ${props=>props.type === "user"?bgc.lite:bgc.dark};

    }
  }
  .viewMore{
    position:absolute;
    bottom: 0;
    height: 30px;
    //background-color: greenyellow;
    width: 140px;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    
    left: calc(50% - 70px);
    color: ${props=>props.type === "user"?bgc.lite:bgc.dark};
    background-color: ${props=>props.type !== "user"?bgc.lite:bgc.dark};
    i{
      margin-left: 10px;
      color: ${props=>props.type !== "user"?bgc.lite:bgc.dark};
    }
    &:hover{
      color: ${props=>props.type !== "user"?bgc.lite:bgc.dark};
      background-color: ${props=>props.type === "user"?bgc.lite:bgc.dark};

    }
  }
  .items{
    overflow: hidden;
    position: relative;
    width: ${props=>props.w-(props.w>549?100:0)-(props.w>1024?100:50)}px;
    margin: 0 auto;
    display: block;
    height: ${props=>getSlideItemW(props.w) * 1.5 }px;//${props=>props.h<350?props.h:350}px;

  }
  .prev,.this,.next{
    position: absolute;
    top:0;
    ${animation(["all"])};
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  .prev{
    //transform: translateX(-100%);
    left: -100%;
    opacity: 0;
  }
  .next{
    //transform: translateX(100%);
    left: 100%;
        opacity: 0;

  }
  .this{
      left: 0;
          opacity: 1;


    //transform: translateX(0);
  }
`

export const StSliderItem = styled.div`
    display: inline-block;
    float:left;
    margin:  0 ;
     
    //align-items: center;
 
    //position: absolute;
    //top: 0;
    
    //flex-wrap: wrap;
    //justify-content: center;
    ${animation(["width","left","color","background-color","opacity"])};
   width: ${props=>getSlideItemW(props.w)}px;
   height: ${props=>getSlideItemW(props.w) * 1.5}px;
   color: ${props=>props.type === "user"?bgc.lite:bgc.dark};
   background-color: ${props=>props.type !== "user"?bgc.lite:bgc.dark};

   //position:absolute; 
   &:hover{
      color: ${props=>props.type !== "user"?bgc.lite:bgc.dark};
      background-color: ${props=>props.type === "user"?bgc.lite:bgc.dark};

   }
   top: 0;
   overflow: hidden;
   opacity: ${props=>(props.id < 0 || props.id >=props.count) ?0:1};
   //width: ${props=>(props.id < 0 || props.id >=props.count) ?0:1};
   z-index: ${props=>(props.id < 0 ||props.id >=props.count) ?-1:100};
   //left: ${props=>props.id*getSlideItemW(props.w)+props.id*props.m}px;
   .img{
      width: ${props=>getSlideItemW(props.w)-(props.w>549?40:10)}px;
      height: ${props=>getSlideItemW(props.w)-(props.w>549?40:10)}px;
      margin: ${props=>props.w>549?20:5}px;
      border-radius: ${props=>props.type === "user"?80:0}px;
      box-shadow: 0 0 5px #5a6368;
      ${props=>backgroundImage(props.src,1)}
      ${animation([" border-radius"])};
      &:hover{
         border-radius:0;
      }
   }
   h2,h3{
    text-align: center;
   }
`

export const StViewAll = styled.div`
padding: 50px 0 ;
  position: fixed;
  z-index: 100000;
  top: 0;
  left: ${props=>props.open?(props.w>1024?100:53):props.w}px;
  color: ${props=>props.bgc?bgc.lite:bgc.dark};
  background-color: ${props=>(!props.bgc?bgc.lite:bgc.dark)};
  width: ${props=>props.w-(props.w>1024?100:53)}px;
  height: ${props=>props.h}px;
  ${animation(["left"])};
  overflow: hidden auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
    
    
    `
export const StViewAllCloseButton = styled.button`
  position: fixed;
  z-index: 10000000;
  top: ${props=> (props.w>1024?20:0) }px;;
  left: ${props=>props.open?(props.pos==="r"?(props.w-50):(props.w>1024?25:0)):props.w}px;
  color: ${props=>props.bgc?bgc.lite:bgc.dark};
  background-color: ${props=>!props.bgc ?bgc.lite:bgc.dark};
  width: ${props=> (50)}px;
  height: ${props=>(50)}px;
  ${animation(["left"])};
  font-size: 40px;
  &:hover{
  color: ${props=>!props.bgc ?bgc.lite:bgc.dark};
  background-color: ${props=>props.bgc ?bgc.lite:bgc.dark};
  }
    
    `

export const StReadMore = styled.div`
  .header {
    height: ${props=>props.w>1024?75:50}px;
    width: 100%;
    text-align: center;
    h1{
      line-height:${props => props.w > 1024 ? 75 : 50}px;
      font-size: ${props => props.w > 1024 ? 35 : 25}px;
    }
  }
  .content {
    width: ${props=>props.w-(props.w>1024?100:50)}px;
    height: ${props=>props.h-(props.h>1024?75:50)}px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    font-size: 20px;
  }



`
export const StCv = styled.div`
  position: fixed;
  z-index: 100000;
  top: 0;
  left: ${props=>props.open?(props.w>1024?100:50):props.w}px;
  color: ${props=>props.bgc?bgc.lite:bgc.dark};
  background-color: ${props=>(!props.bgc?bgc.lite:bgc.dark)};
  width: ${props=>props.w-(props.w>1024?100:50)}px;
  height: ${props=>props.h}px;
  ${animation(["left"])};
  overflow: hidden auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;   
  .header{
    
  }
  
`
export const StCvHeader = styled.div`
  position: fixed;
  z-index: 10000000;
  top: 0;
  height: ${props=>props.w>1024?100:50}px;
  overflow:hidden;
  box-shadow: 0 0 5px #909090;
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - ${props=>props.w>1024?100:50}px);
  left:  ${props=>props.w>1024?100:50}px;
  
  div{
    width: fit-content;
    position:relative;
    padding: 0 20px;
    height: 50px;
    margin: 0 10px;
    text-align: center;
    hr{
      position:absolute;
      height: 3px;
      background-color: ${bgc.dark};
      display: block;
      left: 50%;
      bottom: 0;
      border: none;
      width: 0;
      ${animation(["left","width"])};
    }
    a{
      text-decoration: none; 
    }
    &:hover hr{
      left: 0;
      width: 100%;
    }
  }
`

export const StFlag =styled.button`
  width: 30px;
  height: 20px;
  box-shadow: 0 0 5px #4a5258;
  ${backgroundImage()};
  margin: 0 5px;
  
`
