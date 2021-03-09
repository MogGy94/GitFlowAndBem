import * as React from 'react';
import ShowFoldingCard from './modules/FoldingCard/FoldingCard'
import ContactUs from './modules/ContactUs/ContactUs'

import './App.css'
const App = () => (
    <>
        <section className="section_card">
            <ShowFoldingCard></ShowFoldingCard>
        </section>
        <section className="section_contactUs">
            <ContactUs></ContactUs>
        </section>
    </>

)

export default App;