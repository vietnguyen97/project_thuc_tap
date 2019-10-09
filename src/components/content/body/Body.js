import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import NewDetail from '../../newdetail/NewDetail';
import axios from 'axios';
import MapBody from './MapBody';
import { getAllList } from '../../../action/index';
import { withRouter } from 'react-router-dom';
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            result: [],
            string: '',
            users: [],
            total: null,
            perpage: null,
            current_page: null
        };
    };
    componentWillMount() {
        this.makeHttpRequestWithPage(1);
    }
    makeHttpRequestWithPage = () => {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var newKey = url.searchParams.get("keyword");
        var fistKey = newKey.charAt(0);
        axios({
            method: 'GET',
            url: `http://27.74.250.96:8384/api/v1/search/count_by_keyword?keyword=${fistKey}`,
            data: null
        }).then(res => {
            this.setState({
                total: res.data
            });
        });
    }
    change_alias(alias) {
        var str = alias;
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.trim();
        return str;
    }
    makeHttpRequestWith = (number) => {
        let queryList;
        var url_string = window.location.href;
        var url = new URL(url_string);
        var newKey = url.searchParams.get("keyword");
        let fistKey = newKey.charAt(0);
        var abc = this.change_alias(fistKey);
        console.log(abc);
        this.props.history.push("/ket-qua/thong-tin" + `?keyword=${abc}&page=${number}`);
        queryList = axios({
            method: 'GET',
            url: `http://27.74.250.96:8384/api/v1/search/get_post_by_keyword?keyword=${abc}&page=${number}&limit=${1}`,
            data: null
        }).then(res => {
            this.props.search(res);
        });
        return queryList;
    }
    renderPageNumber = () => {
        let pageNumbers = [], renderPageNumbers;
        var url_string = window.location.href;
        var url = new URL(url_string);
        var newKey = url.searchParams.get("keyword");
        if (this.state.total !== null) {
            for (let i = 1; i <= Math.ceil(this.state.total / 2); i++) {
                pageNumbers.push(i);
            }
            renderPageNumbers = pageNumbers.map(number => {
                return (
                    <span key={number} onClick={() => this.makeHttpRequestWith(number)}>
                        {number}&nbsp;
                    </span>
                );
            });
            return renderPageNumbers;
        }
    }
    render() {
        var strValue = this.props.getApi;
        
        return (
            <div className="result-pages__body">
                <div className="result-pages__body-container container">
                    <div className="result-pages__search-result">
                        <div className="rp-search-result__header">
                            <div className="text-result">Khoảng <strong>{this.state.total}</strong> kết quả</div>
                            <MapBody />
                        </div>
                        <div className="rp-search-result__items">
                            <div className="rp-search-result-item">
                                <div className="search-result__item-container d-flex"><img className="sr-item__modal" src="../../../assets/img/icon-modal.png" alt="" />
                                    <div className="sr-item__poster">
                                        <div className="poster--avatar"><a href="#section"><img src="../../../assets/img/Rectangle 97.png" alt="" /></a></div>
                                    </div>
                                    <div className="sr-item__details">
                                        <div className="item-details__container">
                                            <div className="item-details__title">
                                                <div className="ids-title__content">
                                                    <div className="ids-title--header d-flex"><a className="title--name" data-toggle="modal" id="myLink" data-target="#newsDetailsModal" onClick={this.onShow} href="#nguyen"> {this.makeHttpRequestWith.queryList}  Đô Thị Và Mức Xử Phạt Vi Phạm</a>
                                                        <div className="title--rate d-flex align-items-center"><span>[Chung cư </span><span className="title_rate--highlight"> 3 </span><img src="../../assets/img/star.png" alt="" />]</div>
                                                    </div>
                                                    <p className="mb-0 ids-title--category">đã đăng một bài viết trong <a className="ids-title--category" href="#section">Thông tin</a></p>
                                                    <p className="mb-0 ids-title--date-posted">15 ngày trước</p>
                                                </div>
                                            </div>
                                            <div className="item-details__post">
                                                <div className="ids-post--title"><a href="#section">thông tin</a></div>
                                                <div className="ids-post--content"><span>
                                                    Một năm sau, anh bán miếng đất với giá 2.160tr, và ngay lập tức anh qua Q2 mua 1 căn nhà giá 2.300tr. Giờ thì căn nhà đó cũng giá cao cao rồi...</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-details__actions">
                                            <div className="action-buttons-bottom">
                                                <a href="#section" className="btn -marked">
                                                    <span className="fa fa-star icon" /> 40
                                                </a>
                                                <a href="#section" className="btn -comment">
                                                    <span className="fa fa-comment-o icon" /> 40
                                                </a>
                                                <a href="#section" className="btn -liked">
                                                    <span className="-ap  icon-like2 icon" /> 40
                                                </a>
                                                <a href="#section" className="btn -share">
                                                    <span className="-ap  icon-share4 icon" /> 40
                                                </a>
                                                <a href="#section" className="btn -mail">
                                                    <span className="-ap  icon-mail6 icon" /> 10
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <NewDetail />
                        <div className="rp-search-result__pagination">
                            <div className="search-result__pagination-container container">
                                <div className="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end">
                                    {this.renderPageNumber()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log(state.maptask.data);
    return {
        getListAll: state.maptask,
        getApi: state.maptask.taskPagination.data
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        search: (value) => {
            dispatch(getAllList(value));
        },
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Body));
