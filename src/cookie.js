const decodeLang = "bd66cf202332c08a9f68",
    decodeLangIds = ["b5b1a6435c", "a8e5fbb28a", "85b99065df"],
    decodeUser = "1a111f290a850fad31410f5e490a7707",
    ha ="555debed0f8cee139b09d004ecef88c4"

export const user = {

    get: async ( ) => {
        let res = "sdgadsgasdg5s64dg56s4dg64a6"
        decodeURIComponent(document.cookie)
            .split('; ')
            .map(c => {
                let [name, val] = c.split("=")
                if (name === decodeUser) {
                    // console.log(name, decodeLangIds.indexOf(val))
                    res = val;

                }
                return 0;
            })

        return Promise.resolve(res === ha)
    },
    set: async ()=>{
        let d = new Date();
        d.setTime(d.getTime() + ( 60 * 60 * 1000))
        let expires = "expires=" + d.toUTCString()
        document.cookie = `${decodeUser}=${ha}; ${expires} ;path=/`
        return Promise.resolve()
    }
}

export const language = {
    set: async (lang) => {
        let d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000))
        let expires = "expires=" + d.toUTCString()
        document.cookie = `${decodeLang}=${decodeLangIds[lang]}; ${expires} ;path=/`
        return Promise.resolve(lang)
    },
    get: async () => {
        let res = -1;
        decodeURIComponent(document.cookie)
            .split('; ')
            .map(c => {
                let [name, val] = c.split("=")
                if (name === decodeLang) {
                    // console.log(name, decodeLangIds.indexOf(val))
                    res = decodeLangIds.indexOf(val);

                }
                return 0;
            })
        if (res < 0) {
            language.set(0)
            res = 0
        }
        return Promise.resolve(res)
    }
}
