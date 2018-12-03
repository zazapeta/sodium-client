import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {TranslatorProvider} from "react-translate";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Layout from "./pages/Layout";
import Home from "./pages/Home.page";
import Contact from "./pages/Contact.page";
import Who from "./pages/Qui.page";

import Gallery from "./pages/Gallery.page";
import Preorder from "./pages/Preorder.page";
import Techno from "./pages/Techno.page";

import Page404 from "./pages/Page404.page";
import Tarif from './pages/Tarif.page';

export default () => (
    
    <TranslatorProvider translation={""}>
        <Router>
            <div>
                <Layout
                    top={<Navbar />}
                    bottom={<Footer />}
                    container={
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/contact" exact component={Contact} />
                            <Route path="/who-are-we" exact component={Who} />
                            
                            <Route path="/Gallery" exact component={Gallery} />
                            <Route path="/preorder" exact component={Preorder} />
                            <Route path="/tarif" exact component={Tarif} />
                            <Route path="/technology" exact component={Techno} />
                            <Route path="*" component={Page404} />
                        </Switch>
                    }
                />
            </div>
        </Router>
    </TranslatorProvider>
);
