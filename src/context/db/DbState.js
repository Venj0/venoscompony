import React from "react"

import {DbContext} from "./dbContext";
import {APIResUrl, APIUrl} from "../../url";
import {ACTION_TYPES} from "../../actions"


import {getKey} from "../../key";


let url = () => APIUrl
let resUrl = () => APIResUrl

let action = "8a8dbce0f6ea4c4f27883b7c52b21458aa4b61fe20b3dede42648ccfca59193e2f9fc547bf3f553763da7d42d040a79c"
const SEND_EMAIL = "545e445af7aea2bdbd3c29414284743ed0dd2421cbf169c62480004af8d2de2049df6bdc4001fb5c5b4204726d82ac9a"
export const DB = ({children}) => {
    const get =   async function get(url,data,callBack,ErrorCallBack, k = true) {

        let init = {
            method: "POST",
            body: data,
            headers: new Headers({
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "X-Requested-With": "XMLHttpRequest",
                "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                'Content-Type': 'application/json',
                'Content-Length': data.length+23,
            })
        }
        await fetch(url, init)
            .then(async res => {

                if (!res.ok || res.status !== 200) {
                    if (k) get(resUrl(),init,callBack,ErrorCallBack, false)
                    else ErrorCallBack()

                } else {
                    return res.json()
                }
            })
            .then(res => {
                if (res) {
                    if (res.status !== undefined && !res.status) {
                        if (k) get(resUrl(),init,callBack,ErrorCallBack, false)
                        else ErrorCallBack()
                    } else {
                        callBack(res)
                        return 0
                    }
                }
            })
            .catch(async error => {

                if (k) get(resUrl(),init,callBack,ErrorCallBack, false)
                else ErrorCallBack()
            })
    }
    const fetchData =   (  type, callBack, args = {}, ErrorCallBack = () => {}) =>
        get(url(),JSON.stringify({key: getKey(), type:ACTION_TYPES[type], action, args}),callBack,ErrorCallBack)

    const fetchEmail = async (    args = {},callBack= () => {}, ErrorCallBack = () => {}) =>
        get(url(),JSON.stringify({key: getKey(), type:ACTION_TYPES.email, action:SEND_EMAIL, args}),callBack,ErrorCallBack)




    return (
        <DbContext.Provider value={{fetchData,fetchEmail}}>
            {children}
        </DbContext.Provider>
    )
}