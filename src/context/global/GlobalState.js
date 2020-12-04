import React, {useContext, useEffect, useReducer} from "react"
import {globalReducer} from "./globalReducer"

import {GlobalContext} from "./globalContext"

import {DbContext} from "../db/dbContext"

import {language} from "../../cookie"

import {
    CHANGE_ACTIVE_LANGUAGE,
    LOADING, OPEN_CV, OPEN_VIEW_ALL,
    PAGE_SIZE,
    SET_LANGUAGES_AND_PAGES,
    TOGGLE_HEADER,
    TOGGLE_MORC,
    TOGGLE_PAGE
} from "../type"


let initState = {
    activeLanguage: 0,
    isOpenHeader: false,
    activePage: 0,
    sizes: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    loading: true,
    morc: true,
    pages: [],
    languages: [],
    popupData: {
        type: "",
        data: {}
    },
    viewAll: {
        open: false,
        page: -1
    },
    cv: {
        open: false,
        teg: -1
    }

}
let touch = {
    x: 0,
    y: 0,
    x0: 0,
    y0: 0,
}

let readUrl = () => {
    let url = document.location.pathname.slice(1, document.location.pathname.length)
    let d = url.split("/")
    if (d.length === 1 && d[0] === "") d = []
    // console.log(d)
    return (d.length > 2) ? {status: false} : {
        status: !!d.length,
        type: d[0],
        dataName: d[1] || "",
    }
}


export const GlobalState = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, initState)
    let {fetchData, fetchEmail} = useContext(DbContext)

    useEffect(() => {
        fetchData("start", res => {
            changeLanguage(language.get())
            // console.log(res)

            dispatch({
                type: SET_LANGUAGES_AND_PAGES,
                languages: res.languages,
                pages: res.pages,
            })
            checkUrl(readUrl(), res.pages.map(page => page.url), () => {
                setTimeout(() => dispatch({
                    type: LOADING,
                    loading: false
                }), 1000)
            })
            handleResize()
            handlerStart()
            return () => handlerEnd()
        })
        // eslint-disable-next-line
    }, [])

    const checkUrl = (data, pages, callBack) => {
        // console.log(data, pages)
        if (data.status) {
            if (pages.indexOf("/" + data.type) === -1) {
                window.history.pushState("", "", "/")
                // console.log("a")
                callBack()
            } else {
                movePage(pages.indexOf("/" + data.type) - state.activePage)
                // console.log(pages.indexOf("/" + data.type) - state.activePage)
                if (["view-more", "read-more"].indexOf(data.dataName) !== -1) {
                    toggleViewAll({
                        open: true,
                        page: pages.indexOf("/" + data.type)
                    })
                }
                // console.log(data)
                callBack()
            }
        } else {
            window.history.pushState("", "", "/")
            callBack()
        }
    }


    const handlerStart = () => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("keydown", e => handlerKeyDown(e.keyCode));
        window.addEventListener("onpopstate", handlePopState);
        window.addEventListener("wheel", e => handleScroll(e.deltaY), false)
        document.addEventListener("touchstart", e => handleTouchStart(e), {
            passive: true
        })
        document.addEventListener("touchend", e => handleTouchEnd(e), {
            passive: true
        })

    }
    const handlerEnd = () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("keydown", e => handlerKeyDown(e.keyCode));
        window.removeEventListener("popstate", handlePopState);
        window.removeEventListener("wheel", e => handleScroll(e.deltaY), false)
        document.removeEventListener("touchstart", e => handleTouchStart(e), false)
        document.removeEventListener("touchend", e => handleTouchEnd(e), false)


    }


    const handlePopState = e => {
        e.preventDefault()
        readUrl()
    }

    const handlerKeyDown = keyCode => movePage(Math.abs(parseInt(keyCode) - 39) < 2 ? parseInt(keyCode) - 39 : 0)

    const handleScroll = move => {
        let t = 0
        if (move < -50) t = -1
        if (move > 50) t = 1
        setTimeout(() => movePage(t), 500)
    }

    const handleTouchStart = (e) => {

        touch.x0 = e.touches[0].clientX
        touch.y0 = e.touches[0].clientY
        touch.x = e.touches[0].clientX
        touch.y = e.touches[0].clientY
        document.addEventListener("touchmove", e => handleTouchMove(e))


    }
    const handleTouchMove = e => {
        // e.preventDefault()
        //
        touch.x = e.touches[0].clientX
        touch.y = e.touches[0].clientY

    }
    const handleTouchEnd = e => {
        // e.preventDefault()

        document.removeEventListener("touchmove", e => handleTouchMove(e))
        // console.log(touch)
        //
        let move = {
            x: (touch.x0 - touch.x > 100) ? -1 : ((touch.x0 - touch.x < -100) ? 1 : 0),
            y: (touch.y0 - touch.y > 100) ? -1 : ((touch.y0 - touch.y < -100) ? 1 : 0),
        }

        if (!(move.x * move.y)) {
            // console.log(move)
            if (move.x && (touch.x0 < 50 || touch.x0 > window.innerWidth - 50)) {

                toggleIsOpenHeader(move.x, 0)
            }
            if (move.y) movePage(-move.y, 1, 0)

        } else {
            e.preventDefault()
        }
        touch.y = 0
        touch.y0 = 0
        touch.x = 0
        touch.x0 = 0

    }
    const movePage = (value, type = -1, d = -1) => {

        dispatch({
            type: type ? TOGGLE_PAGE : TOGGLE_MORC,
            value,
            v: d

        })
    }


    const handleResize = () => dispatch({
        type: PAGE_SIZE,
        "sizes": {
            w: window.innerWidth,
            h: window.innerHeight
        }
    })

    const status = id => {
        if (state.activePage > id) return 2
        if (state.activePage === id) return 1
        if (state.activePage < id) return 0
    }

    const toggleIsOpenHeader = (value = -5, type = -1) => dispatch({
        type: TOGGLE_HEADER,
        isOpenHeader: (value === -5) ? !state.isOpenHeader : (value > 0),

    })
    const toggleViewAll = viewAll => dispatch({type: OPEN_VIEW_ALL, viewAll})

    const toggleCV = cv => dispatch({type: OPEN_CV, cv})


    const changeActivePage = value => dispatch({type: TOGGLE_HEADER, value})

    const changeLanguage = async (new_lang) => await language.set(new_lang).then(res => dispatch({
        type: CHANGE_ACTIVE_LANGUAGE,
        "activeLanguage": res
    }))

    const sendEmail = (data, callBack) => fetchEmail(data, callBack)


    return (
        <GlobalContext.Provider
            value={{
                global: state,
                toggleIsOpenHeader,
                changeActivePage,
                changeLanguage,
                movePage,
                status,
                toggleViewAll,
                sendEmail,
                toggleCV

            }}>

            {children}

        </GlobalContext.Provider>
    )
}
