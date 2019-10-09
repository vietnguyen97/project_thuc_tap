import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div className="homepage__footer layout-footer">
                <div className="homepage__footer-container">
                    <div className="hp-footer__links layout-footer__links d-flex justify-content-center justify-content-lg-start">
                        <div className="hp-footer--link layout-footer--link"><a href="#section">Giới thiệu</a></div>
                        <div className="hp-footer--link layout-footer--link"><a href="#section">Hướng dẫn</a></div>
                    </div>
                    {/* Desktop Display*/}
                    <div className="hp-footer__quick-views layout-footer__quick-views d-none d-lg-flex">
                        <div className="hp-footer__quick-view layout-footer--quick-view w-50">
                            <div>
                                <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                        sollicitudin, lorem quis biben <a href="#section">Xem nhanh</a></span></div>
                            </div>
                        </div>
                        <div className="hp-footer__quick-view layout-footer--quick-view w-50">
                            <div>
                                <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean
                        sollicitudin, lorem quis biben <a href="#section">Xem nhanh</a></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="hp-footer__quick-views layout-footer__quick-views d-flex d-lg-none">
                        <div className="hp-footer__quick-view layout-footer--quick-view">
                            <div>
                                <div className="quick-view__content d-inline-flex"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean
                        sollicitudin, lorem quis biben <a href="#section">Xem nhanh</a></span></div>
                                <div className="quick-view__content d-inline-flex"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean
                        sollicitudin, lorem quis biben <a href="#section">Xem nhanh</a></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
