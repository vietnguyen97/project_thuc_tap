import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
//import { listAll } from '../../../action';
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maptask: '',
            query: '',
            result : ''
        };
    };
    componentDidMount() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var newKey = url.searchParams.get("keyword");
        this.setState({
            query: newKey
        });
        
    }
    render() {
        return (
            <div className="result-pages__header-container layout-header__container">
                <div className="result-pages__header-top layout-header__top">
                    <div className="d-flex align-items-center rp-header-top__container lh-top__container">
                        <div className="rp-header-top__logo lh-top__logo">
                            <div className="header-top--logo lh-top--logo">
                                <Link to="/"><img src="../../../assets/img/icon-asset.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="rp-header-top__search-input lh-top__search-input">
                            <div className="search-input">
                                <div className="w-100 input-search__content collapsed" id="autoComplete__content">
                                    <input className="form-control" id="autoComplete" defaultValue={this.state.query} type="text" placeholder="Search ..." tabIndex={1} />
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto rp-header-top__menu lh-top__menu">
                            <div className="d-flex align-items-center ht-menu__items">
                                <div className="ht-menu--item ht-menu--item__tools ht-menu-tools dropdown">
                                    <div className="menu-tools__btn-toggle dropdown-toggle" data-toggle="dropdown"><img className="ht-menu--icon" src="../../../assets/img/Group 1.png" alt="" /></div>
                                    <div className="menu-tools__dropdown-menu dropdown-menu">
                                        <div className="mt--dropdown-item dropdown-item"><a href="#section"><img src="../../../assets/img/Group 1569.png" alt="" /><span className="ht-menu--text">
                                            Tính
                                            toán
                                            khoản
                                vay</span></a></div>
                                        <div className="mt--dropdown-item dropdown-item"><a href="#section"><img src="../../../assets/img/baseline-insert_chart-24px.png" alt="" /><span className="ht-menu--text">
                                            Tính
                                toán hiệu quả dự án</span></a></div>
                                        <div className="mt--dropdown-item dropdown-item"><a href="#section"><img src="../../../assets/img/baseline-monetization_on-24px.png" alt="" /><span className="ht-menu--text">Tài chính cá nhân</span></a></div>
                                    </div>
                                </div>
                                <div className="ht-menu--item">
                                    <div className="ht-menu__notify"><a href="#section"><img className="ht-menu--icon" src="../../assets/img/Group 22.png" alt="" /></a></div>
                                </div>
                                <div className="ht-menu--item"><a className="ht-menu__login menu-tools--btn-login" href="/dang-nhap"><img className="ht-menu--icon ht-menu--icon-avatar" src="../../assets/img/icon-avatar.png" alt="" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="result-pages__header-navigation">
                    <div className="rp-header-navigation header-navigation__container">
                        <div className="header-navigation__items d-flex">
                            <div className="header-navigation--item is-actived"><a className="hn-item--text" href="/ket-qua">Tất cả</a></div>
                            <div className="header-navigation--item"><a className="hn-item--text" href="/ket-qua/thong-tin">Thông tin</a></div>
                            <div className="header-navigation--item"><a className="hn-item--text" href="/ban-do">Bản đồ</a></div>
                            <div className="header-navigation--item"><a className="hn-item--text" href="/ket-qua/bang-gia">Bảng giá</a></div>
                            <div className="header-navigation--item dropdown">
                                <div className="hn-item--text dropdown-toggle" data-toggle="dropdown">Thêm <span className="fa icon" /></div>
                                <div className="dropdown-menu hn-menu__add">
                                    <div className="dropdown-item"><a href="#section">Danh bạ</a></div>
                                    <div className="dropdown-item"><a href="#section">Tài nguyên</a></div>
                                    <div className="dropdown-item"><a href="#section">Hỏi đáp</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, null) (Map);
