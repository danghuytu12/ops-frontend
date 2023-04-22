import React from 'react'
import menu from "../../../_metronic/assets/media/misc/menu-header-bg.jpg";

const ModalMenu = () => {
    return (
        <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} className="bg-white w-250px w-lg-325px" data-kt-menu="true">
            <div className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10"
            style={{ backgroundImage: `url(${menu})` }}
            >
                <h3 className="text-white fw-semibold mb-3">Quick Links</h3>
                <span className="badge bg-primary text-inverse-primary py-2 px-3">25 pending tasks</span>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <a href="../../demo39/dist/apps/projects/budget.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom">
                        <i className="ki-outline ki-dollar fs-3x text-primary mb-2"></i>
                        <span className="fs-5 fw-semibold text-gray-800 mb-0">Accounting</span>
                        <span className="fs-7 text-gray-400">eCommerce</span>
                    </a>
                </div>
                <div className="col-6">
                    <a href="../../demo39/dist/apps/projects/settings.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom">
                        <i className="ki-outline ki-sms fs-3x text-primary mb-2"></i>
                        <span className="fs-5 fw-semibold text-gray-800 mb-0">Administration</span>
                        <span className="fs-7 text-gray-400">Console</span>
                    </a>
                </div>
                <div className="col-6">
                    <a href="../../demo39/dist/apps/projects/list.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end">
                        <i className="ki-outline ki-abstract-41 fs-3x text-primary mb-2"></i>
                        <span className="fs-5 fw-semibold text-gray-800 mb-0">Projects</span>
                        <span className="fs-7 text-gray-400">Pending Tasks</span>
                    </a>
                </div>
                <div className="col-6">
                    <a href="../../demo39/dist/apps/projects/users.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light">
                        <i className="ki-outline ki-briefcase fs-3x text-primary mb-2"></i>
                        <span className="fs-5 fw-semibold text-gray-800 mb-0">Customers</span>
                        <span className="fs-7 text-gray-400">Latest cases</span>
                    </a>
                </div>
            </div>
            <div className="py-2 text-center border-top">
                <a href="../../demo39/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                    <i className="ki-outline ki-arrow-right fs-5"></i></a>
            </div>
        </div>
    )
}

export default ModalMenu
