import React from 'react';
import Navbar from './Navbar';
import Main from './Main';

function MainContent(props) {
    return (
        <div id="content">
            <Navbar/>
            <Main />
        
        </div>
    );
}

export default MainContent;