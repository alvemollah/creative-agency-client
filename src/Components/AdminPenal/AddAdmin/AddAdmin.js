import React from 'react';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('https://infinite-mesa-16282.herokuapp.com/addAnAdmin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('success')
                }
            })
    }

    return (
        <div className="row">
            <div className="col-md-2 col-sm-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12">
                <DashboardHeader title={'Add an Admin'} />
                <div className="p-5" style={{ backgroundColor: "#f1f1f1", height: "85vh" }}>
                    <form style={{ borderRadius: "10px" }} className="m-auto w-75 bg-light p-5 d-flex" onSubmit={handleSubmit(onSubmit)}>
                        <input required className="form-control" name="email" placeholder="Make sure admin email" ref={register({ required: true })} />
                        <br />
                        <input className="btn btn-success pl-4 pr-4" value="send" type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddAdmin;