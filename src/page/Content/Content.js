import React, { Component } from 'react';
import Map from '../../components/content/map/Map';
import Body from '../../components/content/body/Body';
import Footer from '../../components/content/footer/Footer';
import { connect } from 'react-redux';
class Content extends Component {
    render() {
        return (
            <div className="App">
                <section className="section__result-pages">
                    <div className="container-fluid result-pages__container">
                        <div className="result-pages__header layout-header">
                            <Map />
                        </div>
                        <Body />
                    </div>
                    <Footer />
                </section>
            </div>
        );
    }
}
export default connect(null, null)(Content);
