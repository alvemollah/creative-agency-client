import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';


toast.configure();
const AddService = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const image = data.file[0];
        const formData = new FormData();
        formData.append('service', data.service);
        formData.append('description', data.description);
        formData.append('image', image);

        fetch('https://infinite-mesa-16282.herokuapp.com/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    toast.success('Service Added successfully')
                }
            })
            .catch(error => {
                toast.error('Failed to add service')
            })
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <DashboardHeader title={'Add a Service'} />
                <div className="pl-5 pt-5 pr-5" style={{ backgroundColor: "#E5E5E5", paddingBottom: "110px" }}>
                    <section style={{ backgroundColor: "white", borderRadius: "10px" }}>
                        <form onSubmit={handleSubmit(onSubmit)} className="row p-5 container">
                            <div className="col-md-6 col-sm-12">
                                <label className="font-weight-bold" htmlFor="">Service Title</label>
                                <input className="form-control" name="service" type="text" placeholder="Enter title" ref={register({ required: true })} />
                                {errors.service && <span className="text-danger">This field is required</span>}
                                <br />
                                <label className="font-weight-bold" htmlFor="">Description</label>
                                <textarea className="form-control" placeholder="Description" name="description" id="" cols="30" rows="5" ref={register({ required: true })}></textarea>
                                {errors.description && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label className="font-weight-bold" htmlFor="">Icon</label> <br />
                                <label style={{
                                    backgroundColor: "#DEFFED",
                                    color: "#009444",
                                    border: "1px solid #009444"
                                }} className="custom-file-upload w-50 p-2 text-center">
                                    <input style={{ display: "none" }}
                                        name="file" type="file" placeholder="Enter title" ref={register({ required: true })} />
                                    {errors.file && <span className="text-danger">Please upload an image</span>}

                                    <FontAwesomeIcon icon={faCloudUploadAlt} /> upload Image
                                </label>
                                <div style={{ marginTop: "150px" }} className="d-flex justify-content-end">
                                    <input type="submit" value="Submit" className="btn btn-success" />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AddService;