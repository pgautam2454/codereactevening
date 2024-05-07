import React from "react";
import './Mycard.css';
import "./bar_chart.png";

function Mycard() {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-4">
                    <div className="card m-3 bg-primary">
                        <div className="card-body">
                            <h5 className="card-title text-white fs-2">Sign ups</h5>
                            <p className="card-text text-end text-white fs-2 mt-4">114</p>
                            <div className="card-right">
                                <i className="fa-solid fa-user card-icon"></i>
                                <span className="card-text text-white"><b>+25%</b>
                                    <span className="card-text text-end text-secondary">from last month</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card m-3 bg-success">
                        <div className="card-body">
                            <h5 className="card-title text-white fs-2">Revenue</h5>
                            <p className="card-text text-end text-white fs-2 mt-4">$25,541</p>
                            <div className="card-right">
                                <i className="fa-solid fa-cart-arrow-down card-icon"></i>
                                <span className="card-text text-end text-white"><b>+17%</b>
                                    <span className="card-text text-end text-secondary">from last month</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card m-3 bg-danger">
                        <div className="card-body">
                            <h5 className="card-title text-white fs-2">Open tickets</h5>
                            <p className="card-text text-end text-white fs-2 mt-4">114</p>
                            <div className="card-right">
                                <i class="fa-solid fa-phone-flip card-icon-call"></i>
                                <span className="card-text text-white fs-4"><b>5</b></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-5 mx-4">
                    <div className="row">
                        <div className="col bg-secondary">
                            <i className="fa-solid fa-chart-column"></i> <span className="bar"><b>Bar Chart</b></span>
                            <span className="dropdown-toggle" type="submit" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            </span>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Menu item</a></li>
                                <li><a className="dropdown-item" href="#">Menu item</a></li>
                                <li><a className="dropdown-item" href="#">Menu item</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src="bar_chart.png" />
                        </div>
                    </div>

                </div>
                <div className="col-5 mx-3">
                    <div className="row">
                        <div className="col bg-secondary">
                            <i class="fa-solid fa-bell"></i><span><b>Notification</b></span>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Mycard