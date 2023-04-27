import React from "react";

import Header from './Header';
import Footer from './Footer';
import TableUsers from "./TableUsers";

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <TableUsers />
            </main>
            <Footer />
        </div>
    );
};

export default Home;