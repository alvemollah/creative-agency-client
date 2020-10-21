import React from 'react';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AllServiceTable from '../AllServiceTable/AllServiceTable';

const ListedService = () => {
    return (
        <div className="row">
            <div className="col-md-2 col-sm-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12">
                <div className="container-fluid p-3">
                    <DashboardHeader title={'Ordered Services'} />
                    <AllServiceTable />
                </div>
            </div>
        </div>
    );
};

export default ListedService;