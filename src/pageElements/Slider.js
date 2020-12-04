import React, {useContext, useEffect, useRef, useState} from "react";
import {StSlider, StSliderItem} from "../styles/styles";
import {GlobalContext} from "../context/global/globalContext";
import {SliderItem} from "./sliderItem";


let touch = {
    x0: 0,
    x: 0,
    y0: 0,
    y: 0
}

export const Slider = ({page}) => {
    let {
        global, toggleViewAll
    } = useContext(GlobalContext)
    let data = global.pages[page].items

    let type = global.pages[page].bgcType ? "user" : ""
    let btnText = global.pages[page].viewAllText[global.activeLanguage]
    let w = global.sizes.w - (global.sizes.w > 1024 ? 100 : 50) - 100
    let count =  data.length > parseInt(w / 200)?(parseInt(w / 200) > 1 ? parseInt(w / 200):2) :  data.length
    let slides = parseInt(data.length / count)
    slides += slides * count < data.length ? 1 : 0
    let [activeSlide, setActiveSlide] = useState(0)

    console.log(activeSlide,count,slides,data.length)


    let slider = useRef()

    let timer = {
        time: "",
        start: function () {
            this.time = setInterval(() => goTo.right(setActiveSlide, count, slides)

                , 5000)
        },
        finish: function () {
            clearInterval(this.time)
        }

    }

    const handleTouchStart = (e) => {
        // e.preventDefault()
        touch.x0 = e.touches[0].clientX
        touch.y0 = e.touches[0].clientY
        touch.x = e.touches[0].clientX
        touch.y = e.touches[0].clientY
        slider.current.addEventListener("touchmove", e => handleTouchMove(e),{
            passive: false
        })

        // console.log(touch)

    }
    const handleTouchMove = e => {

        touch.x = e.touches[0].clientX
        touch.y = e.touches[0].clientY

    }
    const handleTouchEnd = e => {

        slider.current.removeEventListener("touchmove", e => handleTouchMove(e),{
            passive: false
        })

        let move = {
            x: (touch.x0 - touch.x > 100) ? -1 : ((touch.x0 - touch.x < -100) ? 1 : 0),
            y: (touch.y0 - touch.y > 100) ? -1 : ((touch.y0 - touch.y < -100) ? 1 : 0),
            }


        if (move.x && (touch.x0 > 50) && !global.isOpenHeader) {
            console.log(move)
            if (move.x > 0) goTo.left(setActiveSlide, count, data.length)
            else goTo.right(setActiveSlide, count, data.length, true)


        } else {
            // e.preventDefault()
        }
        // console.log(touch.x0 - touch.x)
        // // console.log(move, (touch.x0 > 50) , !global.isOpenHeader)
        //
        // console.log(touch)
        touch = {
            x0: 0,
            x: 0,
            y0: 0,
            y: 0
    }

    }
    useEffect(() => {


        slider.current.addEventListener("touchstart", e => handleTouchStart(e),{
            passive: false
        })
        slider.current.addEventListener("touchend", e => handleTouchEnd(e),{
            passive: true
        })


        timer.start()
        // handleTouch.start()

        return () => {
            timer.finish()
            slider.current.removeEventListener("touchstart", e => handleTouchStart(e),{
                passive: false
            })
            slider.current.removeEventListener("touchend", e => handleTouchEnd(e),{
                passive: false
            })
        }

        // eslint-disable-next-line
    }, [global, slider.current])


    let get = [
        () => {
            let ar = []
            let as = activeSlide * count % data.length
            for (let i = 1; i <= count; i++) {
                ar.push((as - i) + ((as - i) < 0 ? data.length : 0))
            }
            // console.log("prev : ", ar.reverse())
            return ar.reverse()
        },
        () => {
            let ar = []
            let as = activeSlide * count % data.length
            for (let i = 0; i < count; i++) {
                ar.push((as + i) - ((as + i) >= data.length ? data.length : 0))
            }
            // console.log("this : ", ar)
            return ar
        },
        () => {
            let ar = []
            let as = activeSlide * count % data.length
            for (let i = count; i < 2 * count; i++) {
                ar.push((as + i) - ((as + i) >= data.length ? data.length : 0))
            }
            // console.log("next : ", ar)
            return ar
        }

    ]
    // console.log(get[0](), get[1](), get[2]())
    const goTo = {


        right:  (set, step, count,type = false ) => {

             if((global.activePage === page) || type ) {
                set(current => (current + 1) % count)
            }
        },
        left: (set, step, count) => set(current => current - 1 + ((current - step) < 0 ? count : 0)),

    }
    // console.log(timer)
    let types = {
        prev: activeSlide ? activeSlide - 1 : data.length - 1,
        next: (activeSlide + 1) % data.length,
        this: activeSlide
    }


    return (
        <StSlider w={global.sizes.w} h={global.sizes.h - 150} type={type}>
            {slides > 1 ?
                <button className="arrow left" onClick={() => goTo.left(setActiveSlide, count, slides)}><i
                    className="far fa-chevron-left"/></button> : null}
            {slides > 1 ?
                <button className="arrow right" onClick={() => goTo.right(setActiveSlide, count, slides)}><i
                    className="far fa-chevron-right"/></button> : null}
            <div ref={slider} className="items">


                {slides > 1 ? <div className={"prev"} key={types.prev}>
                    {
                        get[0]().map(id =>
                            <SliderItem name={data[id].url || data[id].name[global.activeLanguage]}  w={global.sizes.w} key={data[id].id} item={data[id]} type={type}/>
                        )
                    }

                </div> : null}
                <div className={"this"} key={types.this}>
                    {
                        get[1]().map(id =>
                            <SliderItem name={data[id].url || data[id].name[global.activeLanguage]}  w={global.sizes.w} key={data[id].id} item={data[id]} type={type}/>
                        )
                    }

                </div>
                {slides > 1 ? <div className={"next"} key={types.next}>
                    {
                        get[2]().map(id =>
                            <SliderItem name={data[id].url || data[id].name[global.activeLanguage]}  w={global.sizes.w} key={data[id].id} item={data[id]} type={type}/>
                        )
                    }

                </div> : null}


            </div>
            <button className="viewMore" onClick={e => toggleViewAll({open: true, page})}>{btnText}<i
                className="far fa-chevron-right"/></button>

        </StSlider>
    )
}