import React, { Component } from 'react';
class MapBody extends Component {
    render() {
        return (
            <div className="search-result__header-map">
                <div className="header-map__container">
                    <div className="header-map__main">
                        <div className="header-map--map">
                            <div className="header-map__map-group"><img src="../../assets/img/result-map.jpg" alt="" /></div>
                        </div>
                    </div>
                    <div className="header-map__details">
                        <div className="map-details--name"><span>Lý Chính Thắng</span></div>
                        <div className="map-details--address"><span>Quận 3, Tp Hồ Chí Minh</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MapBody;
