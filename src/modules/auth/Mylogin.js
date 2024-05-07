import React from "react";

function Mylogin() {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-4 bg-light shadow">
                    <p className="h3 text-center">Login page</p>
                    <hr />
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <input type="button" className="btn btn-success" value="submit" />
                        Create a new account?<a href="#">Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mylogin