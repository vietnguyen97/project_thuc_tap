import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Footer from '../../components/footer/Footer';
class Home extends Component {
    
    render() {
        return (
            <div className="section-homepage">
                <div className="container-fluid homepage__container">
                    <div className="homepage__header layout-header d-none d-lg-block">
                    <Header/>
                    </div>
                    <Search/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;
