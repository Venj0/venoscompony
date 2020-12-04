import React, {useEffect, useState} from "react"
import {StContactUs} from "../styles/styles";


export const ContactUs = ({global, w, h, send}) => {


    let [state, setState] = useState({name: "", email: "", phone: "", msg: "", emailStatus: true, sanded: false})

    // console.log(global)
    useEffect(() => {
        // getData("socIcons",data=>{
        // //     // setState(data)
        //     console.log(data)
        // })
    }, [])
    let page = global.pages[4] || false

    let checkEmail = email => setState({
        ...state,
        email,
        // eslint-disable-next-line
        emailStatus: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    })
    let checkPhone = phone => setState({
        ...state,
        // eslint-disable-next-line
        phone: ((parseInt(phone) == phone || phone.length === 0) && phone.length < 10 && phone[0] == 0) ? phone : state.phone,
    })

    let submit = e => {
        e.preventDefault()
        let t = true
        if (state.name.length < 3) t = false
        if (state.msg.length < 3) t = false
        t = t && state.emailStatus
        if (t) {
            send(state, res => {
                setState({...state, sanded: true})
                setTimeout(() => {
                    setState({name: "", email: "", phone: "", msg: "", emailStatus: true, sanded: false})

                }, 3000)
            })
            console.log(`send ${state.msg} to ${state.email}`)

        }
    }


    return <> {
        page && page.tels && page.emails && page.socIcons ?

            <StContactUs w={w || global.sizes.w} h={h || (global.sizes.h - 100)}>
                {
                    page.tels.map(e => e.active ? 1 : 0).reduce((a, b) => a + b) ||
                    page.socIcons.map(e => e.active ? 1 : 0).reduce((a, b) => a + b) ||
                    page.email.map(e => e.active ? 1 : 0).reduce((a, b) => a + b) ?
                        <div className="contacts">
                            <div>

                                {page.tels.length && page.tels.map(e => e.active ? 1 : 0).reduce((a, b) => a + b) ?
                                    <div className="tel">
                                        <i className="far fa-phone-alt"/>

                                        {page.tels.map(tel => <a href={tel.url} key={tel.id}>{tel.value}</a>)}

                                    </div>
                                    : null
                                }
                                {page.emails.length && page.emails.map(e => e.active ? 1 : 0).reduce((a, b) => a + b) ?
                                    <div className="email">
                                        <i className="far fa-envelope"/>
                                        <div>
                                            {page.emails.map(email => <a href={email.url}
                                                                        key={email.id}>{email.value}</a>)}
                                        </div>
                                    </div>
                                    : null
                                }
                                {page.socIcons.length && page.socIcons.map(e => e.active ? 1 : 0).reduce((a, b) => a + b) ?
                                    <div className="icons">
                                        {page.socIcons.map(icon => icon.active ? <a href={icon.link} key={icon.id}><i
                                            className={icon.icon}/></a> : null)}
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                :null}
                <div className="form">
                    <form onSubmit={e => submit(e)}>
                        <input value={"thank your for connect us"} readOnly={true}
                               className={`sanded ${state.sanded ? "accept" : ""}`}/>
                        <input value={state.name} onChange={e => setState({...state, name: e.target.value})} type="text"
                               placeholder={"name"}/>
                        <input value={state.email} onChange={e => checkEmail(e.target.value)}
                               className={`email ${state.emailStatus ? "" : "red"}`} type="text"
                               placeholder={"your email"}/>
                        <input value={state.phone} onChange={e => checkPhone(e.target.value.replace(/\s/, ""))}
                               type="text" placeholder={"your phone (optimal)"}/>
                        <textarea value={state.msg} onChange={e => setState({...state, msg: e.target.value})}
                                  placeholder={"massage"}/>
                        <button onSubmit={e => submit(e)}><i className={"far fa-paper-plane"}/> send</button>
                    </form>

                </div>
            </StContactUs>
            : null
    }
    </>
}