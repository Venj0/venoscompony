import React from 'react'
import {  BrowserRouter } from "react-router-dom"
import {DB} from "./context/db/DbState";
import {GlobalState} from "./context/global/GlobalState";
import {  MainMenu} from "./pageElements/mainMenu";
// import {Pages} from "./pages";
// import {Content} from "./pageElements/content";

import {Loading} from "./pageElements/loading";
import {Content} from "./pageElements/content";
import {ViewAll} from "./pageElements/viewAll";
import {Cv} from "./pageElements/viewCV";
// import {Container} from "./pageElements/container";


function App() {
    return (
        <DB>
            <GlobalState>
                <BrowserRouter>

                    <Loading/>
                    <MainMenu/>

                    <Content/>
                <ViewAll/>
<Cv/>









                </BrowserRouter>
            </GlobalState>
        </DB>
    )
}

export default App
