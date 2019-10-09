import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div>
                <div className="result-pages__footer layout-footer">
                <div className="result-pages__footer-container">
                    <div className="rs-footer__links layout-footer__links d-flex justify-content-center justify-content-lg-start">
                        <div className="rs-footer--link layout-footer--link"><a href="#section">Giới thiệu</a></div>
                        <div className="rs-footer--link layout-footer--link"><a href="#section">Hướng dẫn</a></div>
                    </div>
                    {/* Desktop*/}
                    <div className="rs-footer__quick-views layout-footer__quick-views d-none d-lg-flex">
                        <div className="rs-footer__quick-view layout-footer--quick-view w-50">
                            <div>
                                <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean
                                                sollicitudin, lorem quis biben <a href="#section">Xem nhanh</a></span></div>
                            </div>
                        </div>
                        <div className="rs-footer__quick-view layout-footer--quick-view w-50">
                            <div>
                                <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean
                                                sollicitudin, lorem quis biben <a href="#section">Xem nhanh</a></span></div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile*/}
                    <div className="rs-footer__quick-views layout-footer__quick-views d-flex d-lg-none">
                        <div className="rs-footer__quick-view layout-footer--quick-view">
                            <div>
                                <div className="quick-view__content d-inline-flex"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean
                                                sollicitudin, lorem quis biben <a href="#section">Xem nhanh</a></span></div>
                                <div className="quick-view__content d-inline-flex"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean
                                                lorem quis biben <a href="#section">Xem nhanh</a></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="d-none d-lg-block chat-sidebar collapsed" id="chat-sidebar">
                <div className="chat-sidebar__container">
                    <div className="chat-sidebar__content d-flex flex-column justify-content-between">
                        {/* Chat Sidebar Top*/}
                        <div className="chat-sidebar__top">
                            <div className="chat-sidebar--btn-collapse">
                                <div className="btn-expand__content">
                                    <button className="btn btn-chat--expand" id="btn-chat--expand"><img src="../../assets/img/Path 115.png" alt="" /></button>
                                </div>
                            </div>
                        </div>
                        {/* Chat Sidebar Bottom*/}
                        <div className="chat-sidebar__bottom">
                            {/* Chat list*/}
                            <div className="chat-sidebar__list chat-list">
                                <div className="chat-list__container">
                                    <div className="chat-list__content">
                                        <div className="chat-list__contact">
                                            <div className="chat-list--contact-items">
                                                {/* Contact items*/}
                                                <div className="contact-items contact-items__active">
                                                    {/* Contact item*/}
                                                    <div className="contact-item d-flex justify-content-center">
                                                        <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-1.png" alt="" /></div>
                                                        <div className="contact-item--name">Lê Ánh Hồng Nga</div>
                                                        <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div>
                                                    </div>
                                                    {/* Contact item*/}
                                                    <div className="contact-item d-flex justify-content-center">
                                                        <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-2.png" alt="" /></div>
                                                        <div className="contact-item--name">Peter Parker</div>
                                                        <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div>
                                                    </div>
                                                    {/* Contact item*/}
                                                    <div className="contact-item d-flex justify-content-center">
                                                        <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-3.png" alt="" /></div>
                                                        <div className="contact-item--name">Tom Hank</div>
                                                        <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div>
                                                    </div>
                                                    {/* Contact item*/}
                                                    <div className="contact-item d-flex justify-content-center">
                                                        <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-4.png" alt="" /></div>
                                                        <div className="contact-item--name">Amy Lee Johnson</div>
                                                        <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div>
                                                    </div>
                                                    {/* Contact item*/}
                                                    <div className="contact-item d-flex justify-content-center">
                                                        <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-5.png" alt="" /></div>
                                                        <div className="contact-item--name">Picasa Poo</div>
                                                        <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div>
                                                    </div>
                                                </div>
                                                {/* Contact items*/}
                                                <div className="contact-items contact-items__inactive">
                                                    {/* Contact item*/}
                                                    <div className="contact-item d-flex justify-content-center">
                                                        <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-6.png" alt="" /></div>
                                                        <div className="contact-item--name">Jessica Snow</div>
                                                        <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Chat message*/}
                            <div className="chat-sidebar__chat-message">
                                <div className="chat-message__container">
                                    <div className="chat-message__content">
                                        <div className="chat-message d-flex justify-content-center align-items-center">
                                            <div className="chat-message--icon"><img src="../../assets/img/chat-message.png" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Chat Search*/}
                            <div className="chat-sidebar__search-input">
                                <div className="search-input">
                                    <div className="search-input__container">
                                        <div className="search-input__content">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="search-icon"><img src="../../assets/img/SVG/search.svg" alt="" /></div>
                                                </div>
                                                <input className="form-control" type="text" placeholder="Tìm kiếm bạn bè" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Chat pop-up*/}
                            <div id="chat-sidebar__pop-up">
                                <div className="chat-popup">
                                    <div className="chat-popup__container">
                                        <div className="chat-popup__content">
                                            <div className="chat-popup__items" id="chat-popup__items">
                                                <div className="chat-popup--item">
                                                    <div className="chat-popup--header d-flex">
                                                        <div className="chat-popup--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div><span className="ml-2 header--text">Test</span>
                                                        <div className="chat-popup--close">×</div>
                                                    </div>
                                                    <div className="chat-popup--body">
                                                        <div className="message-received">
                                                            <div className="message-received__content row">
                                                                <div className="col-2 px-0 received__content--icon"><img src="../../assets/img/chat-avt-1.png" alt="" /></div>
                                                                <div className="col-10 received__content--text"><span>
                                                                    KHLCNT của Ban Quản lý dự án đầu tư xây .... KHLCNT của Sở Tài chính tỉnh Hưng Yên
                                                                    cho dự
                                                                    án “Mua sắm thiết bị định .... Hạng mục: Xóm Ao Vàng, Cổ Rùa, Gò Chè, Phúc Lộc, Quyết
                                                                            Thắng, Tân ...</span></div>
                                                                <div className="col-12 received__content--time text-right"><span>12:09 - 18/10/2019</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="message-send">
                                                            <div className="message-send__content row align-items-end flex-column">
                                                                <div className="message-send--text"><span>OK</span></div>
                                                                <div className="message-send--time text-right"><span>1 min</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="chat-popup--input">
                                                        <div className="input-group">
                                                            <input className="form-control" type="text" placeholder="Nhập tin nhắn" aria-label="Username" aria-describedby="basic-addon1" />
                                                            <div className="input-group-append">
                                                                <div className="send-icon"><img src="../../assets/img/icon-send.png" alt="" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            </div>
        );
    }
}

export default Footer;
