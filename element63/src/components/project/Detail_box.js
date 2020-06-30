import React, { Component } from 'react';

export class Detailbox extends Component {
    render() {
        return (
            <div className="ttm-pf-single-detail-box mb-35">
                <div className="ttm-pf-single-title">
                <h5>Project Info</h5>
                </div>
                <p>Etiam volutpat ultricies est id volutpat. Maecenas finibus risus purus, id lobortis urna rutrum id. Sed pellent esquevert pharetra consequat.</p>
                <ul className="ttm-pf-detailbox-list">
                <li><i className="fa fa-user" /><span> Client : </span>John Amanda</li>
                <li><i className="far fa-bookmark" /><span> Category :</span>Business, Campaign</li>
                <li><i className="fa fa-calendar" /><span> Date :</span>6 June 19</li>
                <li><i className="ti ti-world" /><span> Website : </span>IT-Tech.com</li>
                <li><i className="fa fa-map-marker" /><span>Location : </span>New York</li>
                </ul>
            </div>
            )
    }
}


export default Detailbox;