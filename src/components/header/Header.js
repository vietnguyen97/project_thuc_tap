import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div className="homepage__header-container layout-header__container">
                <div className="homepage__header-top layout-header__top">
                    <div className="d-flex align-items-center hp-header-top__container lh-top__container">
                        <div className="ml-auto hp-header-top__menu lh-top__menu">
                            <div className="d-flex align-items-center ht-menu__items">
                                <div className="ht-menu--item"><a href="/ket-qua/thong-tin">Thông tin</a></div>
                                <div className="ht-menu--item"><a href="/ban-do">Bản đồ</a></div>
                                <div className="ht-menu--item"><a href="/ket-qua/bang-gia">Bảng giá</a></div>
                                {/* {this.showMenu(menus)} */}
                                <div className="ht-menu--item dropdown">
                                    <div className="dropdown-toggle" data-toggle="dropdown">Thêm</div>
                                    <div className="dropdown-menu ht-menu__add">
                                        <div className="dropdown-item"><a href="#section">Danh bạ</a></div>
                                        <div className="dropdown-item"><a href="#section">Tài nguyên</a></div>
                                        <div className="dropdown-item"><a href="#section">Hỏi đáp</a></div>
                                    </div>
                                </div>
                                <div className="ht-menu--item ht-menu--item__tools ht-menu-tools dropdown">
                                    <div className="menu-tools__btn-toggle dropdown-toggle" data-toggle="dropdown"><img className="ht-menu--icon" src="../../../assets/img/Group 1.png" alt="" /></div>
                                    <div className="menu-tools__dropdown-menu dropdown-menu">
                                        <div className="mt--dropdown-item dropdown-item"><a href="#section"><img src="../../../assets/img/Group 1569.png" alt="" /><span className="ht-menu--text">Tính toán khoản vay</span></a></div>
                                        <div className="mt--dropdown-item dropdown-item"><a href="#section"><img src="../../../assets/img/baseline-insert_chart-24px.png" alt="" /><span className="ht-menu--text">
                                            Tính
                                toán hiệu quả dự án</span></a></div>
                                        <div className="mt--dropdown-item dropdown-item"><a href="#section"><img src="../../../assets/img/baseline-monetization_on-24px.png" alt="" /><span className="ht-menu--text">Tài chính cá nhân</span></a></div>
                                    </div>
                                </div>
                                <div className="ht-menu--item">
                                    <div className="ht__menu-notify"><a href="#section"><img className="ht-menu--icon" src="../../assets/img/Group 22.png" alt="" /></a></div>
                                </div>
                                <div className="ht-menu--item"><a className="ht-menu__login menu-tools--btn-login btn btn-primary" href="/dang-nhap">Đăng nhập</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
