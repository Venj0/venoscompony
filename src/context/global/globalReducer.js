import {
    CHANGE_ACTIVE_LANGUAGE, LOADING, OPEN_CV, OPEN_VIEW_ALL, PAGE_SIZE, PAGES, SET_LANGUAGES_AND_PAGES,

    TOGGLE_HEADER, TOGGLE_MORC, TOGGLE_PAGE

} from "../type"


const handlers = {

    [TOGGLE_HEADER]: (state, {isOpenHeader}) => ({...state, isOpenHeader}),

    [TOGGLE_PAGE]: (state, {value, v = -1}) => {
        if (!state.viewAll.open) {
            if (v !== -1 && state.isOpenHeader) {
                return ({
                    ...state,
                    morc: (value < 0),

                })
            } else {
                let t = value + state.activePage

                if (0 <= t && t < state.pages.length) {

                    window.history.pushState(state.pages[t].name[2],
                        state.pages[t].name[2],
                        state.pages[t].url)
                    return ({...state, activePage: t})
                }


            }
        }
        return ({...state})

    },
    [TOGGLE_MORC]: (state, {value}) => ({
        ...state,
        morc: (state.isOpenHeader) ? (value < 0) : state.morc,

    }),
    [LOADING]: (state, {loading}) => ({...state, loading}),


    [CHANGE_ACTIVE_LANGUAGE]: (state, {activeLanguage}) => ({...state, activeLanguage}),
    [SET_LANGUAGES_AND_PAGES]: (state, {languages, pages}) => ({...state, languages, pages}),
    [PAGE_SIZE]: (state, {sizes}) => ({...state, sizes}),
    [OPEN_VIEW_ALL]: (state, {viewAll}) => {
        let id = state.activePage
        let type = (viewAll.page ===1)?"/read-more":((viewAll.page ===3 || viewAll.page ===2) ? "/view-more":"")
        if([1,2,3].indexOf(id) !== -1){
            let url = state.pages[id].url + type;
            window.history.pushState(type,type,url)
            console.log(type ,url)
        }
        // if(state.activePage === 2 || state.activePage === 3){
        //     let url = state.pages[state.activePage].url + ((viewAll.page === 1)?"/view-more":"")
        //     window.history.pushState((viewAll.page !== -1)?:state.pages[state.activePage].name[2],(viewAll.page === 1)?"/view-more":state.pages[state.activePage].name[2],url)
        //     console.log(url)
        // }
        return {...state, viewAll}
    },
    [OPEN_CV]: (state, {cv}) => {

        let type = (cv.open)?`/CV/${cv.tag}`:state.pages[2].url

            // let url = state.pages[id].url + type;
            window.history.pushState(type,type,type)

        // if(state.activePage === 2 || state.activePage === 3){
        //     let url = state.pages[state.activePage].url + ((viewAll.page === 1)?"/view-more":"")
        //     window.history.pushState((viewAll.page !== -1)?:state.pages[state.activePage].name[2],(viewAll.page === 1)?"/view-more":state.pages[state.activePage].name[2],url)
        //     console.log(url)
        // }
        return {...state, cv,activePage:2}
    },
    [PAGES]: (state, {pages}) => ({...state, pages}),


    DEFAULT: state => state
}

export const globalReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}