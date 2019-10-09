import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import { listAll, actgetAllList } from '../../action/index';
// import body from './../content/body/Body';
import { withRouter } from 'react-router-dom';class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
            loading: false
        };
    }
    fetchSearchResult = (query) => {
        const searchURL = `http://27.74.250.96:8384/api/v1/search/suggestion?keyword=${query}`;
        if (this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = Axios.CancelToken.source();
        Axios.get(searchURL, {
            cancelToken: this.cancel.token
        }).then(res => {
            this.setState({ results: res.data, loading: false });
        }).catch(err => {
            if (Axios.isCancel(err) || err) {
                this.setState({
                    loading: false
                });
            }
        });
    }
    onChange = (event) => {
        const query = event.target.value;
        if (event.key === "Enter") {
            let str = event.target.value;
            this.props.history.push("/ket-qua/thong-tin" + `?keyword=${query}`);
            this.props.getKey(str);
        }
        this.setState({
            query: query,
            loading: true,
            message: ''
        }, () => {
            this.fetchSearchResult(query);
        });
    };
    renderSearchResult = () => {
        let { results } = this.state;
        let { query } = this.state;
        if (Object.keys(results).length && results.length) {
            return (
                <div>
                    {results.map((result, index) => {
                        return (
                            <ul key={index}>
                                <li >
                                    <Link to={{ pathname: '/ket-qua/thong-tin', search: `?keyword=${query}&page=1` }} onClick={() => this.showTest()}>
                                        {result.title}
                                    </Link>
                                </li>
                            </ul>
                        );
                    })}
                </div>
            );
        }
    }
    showTest = () => {
        var { query } = this.state;
        this.props.getKey(query);
    }
    render() {
        return (
            <div className="homepage-body">
                <div className="homepage-body__container">
                    <div className="homepage-body__content">
                        <div className="center d-flex justify-content-center align-items-center">
                            <div className="center-content d-flex flex-column justify-content-center">
                                <div className="homepage--logo">
                                    <div className="logo--container d-flex justify-content-center"><img src="../../assets/img/asset-logo.png" alt="" /></div>
                                </div>
                                <div className="homepage--description">
                                    <div className="description--container d-flex flex-column align-items-center"><span className="description-line line-1">Thị trường bất động sản Việt Nam</span></div>
                                </div>
                                <div className="homepage--input-search">
                                    <div className="input-search__container d-flex justify-content-center">
                                        <div className="w-100 input-search__content collapsed" id="autoComplete__content">
                                            <input className="form-control" onKeyPress={this.onChange} id="autoComplete" type="text" name="query" onChange={this.onChange} placeholder="Search ..." tabIndex={1} id="myBtn" />
                                            {this.renderSearchResult()}
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
const mapStateToProps = state => {
    return {
        value: state.tasks
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        search: (value) => {
            dispatch(listAll(value));
        },
        getKey: (key) => {
            dispatch(actgetAllList(key));
        }
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));