import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../../App';


const UserReview = () => {
    const { register, handleSubmit, errors } = useForm();

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
        const useReview = { ...data }
        useReview.email = (loggedInUser.email || loggedUser.email)
        useReview.photo = (loggedInUser.photoURL || loggedUser.picture)

        fetch('https://infinite-mesa-16282.herokuapp.com/addReview', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(useReview)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('review added')
                }
            })
    }

    return (
        <section className="row">
            <div className="col-md-2 col-sm-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12 container-fluid">
                <DashboardHeader title={'Review'} />
                <div style={{ backgroundColor: "#E5E5E5", height: "100vh" }}>
                    <form className="w-75 p-5" onSubmit={handleSubmit(onSubmit)}>
                        <input required className="form-control" name="name" defaultValue={(loggedInUser.name || loggedUser.name)} ref={register({ required: true })} />
                        {errors.name && <span className="text-danger">name is required</span>}
                        <br />

                        <input required className="form-control" name="company_name" placeholder="Company name, Designation" ref={register({ required: true })} />
                        {errors.company_name && <span className="text-danger">company name is required</span>}
                        <br />

                        <textarea className="form-control" placeholder="Description" name="description" placeholder="" rows="5" ref={register({ required: true })} />
                        <br />
                        <input className="btn brand-btn mt-3" value="send" type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UserReview;