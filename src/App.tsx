import React from 'react';

import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Breadcrumbs} from "./components/Breadcrumbs/Breadcrumbs";
import {ContactsForm} from "./components/ContactsForm/ContactsForm";

function App() {
  return (
    <>
        <Header/>
        <Breadcrumbs/>
        <ContactsForm/>
        <Footer/>
    </>
  );
}

export default App;
