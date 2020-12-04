//
//


//
// export const StyledLineStyle = styled.div`
//     height: ${props => props.h ||40}px;
//     line-height: ${props => props.h ||40}px;
//     padding: 0 5px;
//     box-shadow: 0 0 7px #000000b8;
//     width:  90%;
//     margin: 10px auto 0;
//     position:relative;
//     display: flex;
//     justify-content: space-between;
//     align-content: center;
//     flex-wrap: wrap;
//     text-align: center;
//     opacity: ${props => props.status ? 0.5 : 1};
//     ${animation(["opacity"])}
//     .icon{
//       display: inline-block;
//       float:left;
//       height: ${props => (props.h ||40)-4}px ;
//       width: ${props => (props.h ||40) * 2 - 8}px ;
//       margin: 2px 10px  2px 5px;
//     }
//     .header{
//       display: inline-block;
//       float:left;
//       text-transform: uppercase;
//     }
//     .ctrl{
//       display: inline-block;
//       float:right;
//       margin: 0;
//     }
// `
// export const StyledBlockStyle = styled.div`
//     display: inline-block;
//     .bg{
//         ${props => backgroundImage(props.src) || ""};
//         height: 100px;
//         width: 100%;
//         display: block;
//         filter: blur(${props => ((props.status) ? (props.visible ? 0 : 2) : 3)}px);
//          ${animation(["filter"])}
//     }
//
//     width: 30%;
//
//     margin: 10px 1.6666%;
//     box-shadow: 0 0 7px #0000009a;
//     height: 100px;
//     position: relative;
//     overflow: hidden;
//     opacity: ${props => props.status ? 1 : 0.7};
//
//
//     .new{
//       height: 100%;
//       width: 100%;
//       display: block;
//       text-align: center;
//       line-height: 100px;
//       font-size: 60px;
//       color: green;
//     }
//     .ctrl{
//       position:absolute;
//       height: 100%;
//       width: 100%;
//       top: 100%;
//       left: 0;
//       background-color: #5a626834;
//       .ctrlBTN{
//         height: 30px;
//         width: 30px;
//         line-height: 30px;
//         font-size: 20px;
//       }
//
//     }
//     &:hover{
//       .ctrl{
//         top: 0;
//       }
//     }
//
// `
// export const StyledNewItem = {
//     line:styled.div`
//         height: ${props => props.h}px;
//         box-shadow: 0 0 7px #000000b8;
//         width:  30%;
//         min-width:  350px;
//         margin: 10px auto 0;
//         position:relative;
//         line-height:  ${props => props.h || 40}px;
//         display: block;
//         text-align: center;
//         button{
//         color:${props => props.c || "green"};
//         font-size: ${props => (props.h ||40) * .75}px;
//           display: block;
//           width: 100%;
//           height: 100%;
//         }
// `,
//     block:styled.div`
//         display: inline-block;
//         width: ${props=>[0,90,45,30,20][props.count || 3]}%;
//         max-width: ${props=>[0,900,450,300,200][props.count || 3]}px;
//         margin: 10px ${props=>[0,5,2.5,10/6,20/8][props.count || 3]}%;
//         box-shadow: 0 0 7px #0000009a;
//         height: ${props=>props.h || 100}px;
//         position: relative;
//         overflow: hidden;
//
//
//         button{
//           height: 100%;
//           width: 100%;
//           display: block;
//           text-align: center;
//           line-height:  ${props=>props.h || 100}px;
//           font-size:  ${props=>(props.h * .6) || 60}px;
//           color: green;
//         }
// `,
// }
//
// export const StyledLineIcon = styled.div`
//     ${props=> backgroundImage(props.src)}
// `
//
//
//
//
// export const StyledTop = {
//     self: styled.div`
//     padding: 50px 20px;
//
//     ${animation(["width"])};
// `
// }
// export const StyledLine = styled.div`
//     height: ${props => sizes.navbar.button.h * [1, 2][props.type || 0]}px;
//     box-shadow: 0 0 7px #000000b8;
//     width: ${props => props.small ? 30 : 90}%;
//     min-width: ${props => props.small ? 350 : ""}px;
//     margin: 10px auto 0;
//     position:relative;
//     padding: ${props => sizes.navbar.button.h / (props.small ? 8 : 4)}px;
//     line-height: ${sizes.navbar.button.h / 2}px;
//     //background-color: #4e555b;
//     //overflow: hidden;
//     position:relative;
//     display: ${props => props.small ? "block" : "flex"};
//     justify-content: space-between;
//     align-content: center;
//     flex-wrap: wrap;
//     text-align: center;
//     opacity: ${props => props.status ? 0.5 : 1};
//     ${animation(["opacity"])}
//
//
// `
//
//
// export const StyledLogo = styled.div`
//     height: ${sizes.navbar.button.h * 1.75}px;
//     line-height: ${sizes.navbar.button.h * 1.75}px;
//     width: ${sizes.navbar.button.h * 2.5}px;
//     margin: ${sizes.navbar.button.h * 0.125}px ${sizes.navbar.button.w * 0.25}px;
//     display:  block;
//     padding: 0  ;
//     opacity: ${props => props.active ? 1 : 0.5};
//     ${props => backgroundImage(props.src)};
//     text-align: center;
//     overflow: hidden;
//     box-shadow: 0 0 8px  #4e555b;
//     ${animation(["width", "font-size", "opacity"], ".3")};
//     position: relative;
//     button{
//         position: absolute;
//         top: 0;
//         right: 0;
//         height: 25px;
//         width: 25px;
//         background-color: #e8ce16;
//         border-radius: 3px;
//     }
// `
//
// export const StyledLineButton = styled.button`
//   height: ${props => sizes.navbar.button.h * (props.big ? 0.75 : 0.5)}px;
//   line-height: ${props => sizes.navbar.button.h * (props.big ? 0.75 : 0.5)}px;
//   width: ${props => props.big ? "100%" : sizes.navbar.button.w * (5 / 8) + "px"} ;
//   border-radius: 3px;
//   box-shadow: ${props => props.shadow ? " 0 0 5px #5a6268" : ""};
//   background-color: ${props => props.bgc || ""};
//   color: ${props => props.c || ""};
//   font-size: ${props => props.fs || 15}px;
//   text-align: center;
//   display: inline-block;
//   float:${props => props.big ? "unset" : "left"};
//   margin: ${props => props.big ? "0 auto" : "0  10px 0 0"};
// `
//

//
//
//

//
//
// export const StyledSlides = styled.div`
//   display: inline-block;
//   width: 100%;
//   padding: 50px 0 0;
//   text-align: center;
// `
// export const StyledSlide = styled.div`
//     display: inline-block;
//     .bg{
//         ${props => backgroundImage(props.src) || ""};
//         height: 100px;
//         width: 100%;
//         display: block;
//         filter: blur(${props => ((props.status) ? (props.visible ? 0 : 2) : 3)}px);
//          ${animation(["filter"])}
//     }
//
//     width: 30%;
//     max-width: 200px;
//     margin: 10px 1.6666%;
//     box-shadow: 0 0 7px #0000009a;
//     height: 100px;
//     position: relative;
//     overflow: hidden;
//     opacity: ${props => props.status ? 1 : 0.7};
//
//
//     .new{
//       height: 100%;
//       width: 100%;
//       display: block;
//       text-align: center;
//       line-height: 100px;
//       font-size: 60px;
//       color: green;
//     }
//
// `
//

//

//
//
//
// export const StyledItemCTRLButtons = styled.div`
//     display: inline-block;
//      height: ${props=>props.type==="line"?20:40}px;
//          padding: ${props=>(props.type === "block"?(props.h-(props.type==="line"?20:40)):0)/2}px 0;
//  .ctrlBTN{
//       display: inline-block;
//       height: ${props=>props.type==="line"?20:40}px;
//       line-height: ${props=>props.type==="line"?20:40}px;
//       width: ${props=>props.type==="line"?25:40}px;
//       font-size: ${props=>props.type==="line"?15:25}px;
//       border-radius: 3px;
//       margin: ${props=>props.type==="line"?"0 10px 0 0":""};
//       box-shadow: 0 0 5px #5a6268;
//       text-align: center;
//       &.edit{
//         background-color: yellow;
//       }
//       &.left{
//         float:${props=>props.type==="line"?"":"left"};
//         background-color: yellowgreen;
//       }
//       &.right{
//         background-color: yellowgreen;
//         float:${props=>props.type==="line"?"":"right"};
//       }
//       &.restore{
//         background-color: yellowgreen;
//       }
//       &.remove{
//         background-color: orangered;
//       }
//     }
//    // position:absolute;
//    // left: 0;
//    // top: 0;
//    // height: 100%;
//    // width: 100%;
//    // .ctrl{
//    //      height: 100%;
//    //      width: 100%;
//    //      display: block;
//    //      position:absolute;
//    //      top: ${props => props.status ? 100 : 0}%;
//    //      left: 0;
//    //      overflow: hidden;
//    //      text-align: center;
//    //      padding: 20px 0;
//    //      ${animation(["top", "background-color", "padding"])}
//    //      button{
//    //          display: inline-block;
//    //          height: 30px;
//    //          width: 30px;
//    //          margin: 0;
//    //          line-height: 30px;
//    //          overflow: hidden;
//    //          font-size: 20px;
//    //          text-align: center;
//    //          color: #fff;
//    //          border-radius: 3px;
//    //          text-shadow: 0 0 7px #fff;
//    //          ${animation([""])}
//    //          &:hover{
//    //              box-shadow: 0 0 5px white;
//    //          }
//    //      };
//    //      .left{
//    //        float:left;
//    //      }
//    //      .right{
//    //        float:right;
//    //      }
//    //  }
//    //
//    //  &:hover{
//    //      .ctrl{
//    //          top: 0;
//    //          background-color: #0000008f;
//    //          padding: 35px 0;
//    //          button{
//    //              background-color: #${props => props.status ? "" : "05e005e0"};
//    //               color: #${props => props.status ? "" : "5b6268"};
//    //          }
//    //      }
//    //  }
//    //
// `