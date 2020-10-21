import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


toast.configure();
const OrderList = () => {
    const { register, handleSubmit, errors } = useForm();
    const { service } = useParams();

    const { userInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;
    const parseJwt = (token) => {
        try {
            return (JSON.parse(atob(token.split('.')[1])))
        } catch (e) {
            return (false);
        }
    };
    const info = sessionStorage.getItem('token')
    const loggedUser = parseJwt(info)

    const onSubmit = data => {
        const image = data.file[0];
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('service', data.service);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('image', image);

        fetch('https://infinite-mesa-16282.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    toast.success('Order Added successfully')
                }
            })
            .catch(error => {
                toast.error('Failed to add Order')
            })
    }

    return (
        <div className="row">
            <div className="col-md-2 col-sm-12">
                <Sidebar />
            </div>
            <div className="col-md-10 container-fluid col-sm-12">
                <DashboardHeader title={'Order'} />
                <div style={{ backgroundColor: "#E5E5E5", paddingBottom: "100px" }}>
                    <form className="w-75 p-5" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" defaultValue={(loggedInUser.name || loggedUser.name)} required name="name" placeholder="Your Name/ Company Name" ref={register()} />
                        <br />

                        <input className="form-control" defaultValue={(loggedInUser.email || loggedUser.email)} required name="email" placeholder="Your email address" ref={register()} />
                        <br />

                        <input className="form-control" name="service" value={service} placeholder="service" ref={register({ required: true })} />
                        {errors.service && <span className="text-danger">service name is required</span>}
                        <br />

                        <textarea required className="form-control" name="description" placeholder="" rows="5" ref={register()} />
                        <br />

                        <div className="d-flex">
                            <input required className="form-control w-50" name="price" placeholder="price" ref={register()} />

                            <label required style={{ backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444" }} className="custom-file-upload w-50 p-2 text-center">
                                <input name="file" style={{ display: "none" }} ref={register({ required: true })} type="file" />
                                <FontAwesomeIcon icon={faCloudUploadAlt} /> upload project file
                            </label>
                        </div>
                        <input className="btn brand-btn mt-3" value="send" type="submit" />
                    </form>
                </div>
            </div>
        </div>

    )
};

export default OrderList;