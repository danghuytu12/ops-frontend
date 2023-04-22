import PageLayout from "../../components/Layout/PageLayout"

const Projects = () => {
    return (
        <PageLayout
            pageBannerImage=""
            pageSeoTitle=""
            pageSeoDescription=""
            pageSeoUrl=""
            pageSiteName=""
        >
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                <div className="d-flex flex-column flex-column-fluid">
                    <div id="kt_app_toolbar" className="app-toolbar pt-6 pb-2">
                        <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex align-items-stretch">
                            <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
                                <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
                                    <h1 className="page-heading d-flex flex-column justify-content-center text-dark fw-bold fs-3 m-0">Projects</h1>
                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
                                        <li className="breadcrumb-item text-muted">
                                            <a href="../../demo39/dist/index.html" className="text-muted text-hover-primary">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>
                                        <li className="breadcrumb-item text-muted">Pages</li>
                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>
                                        <li className="breadcrumb-item text-muted">User Profile</li>
                                    </ul>
                                </div>
                                <div className="d-flex align-items-center gap-2 gap-lg-3">
                                    <a href="#" className="btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">Add Member</a>
                                    <a href="#" className="btn btn-flex btn-primary h-40px fs-7 fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">New Campaign</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="kt_app_content" className="app-content flex-column-fluid">

                        <div id="kt_app_content_container" className="app-container container-fluid">

                            <div className="card mb-6">
                                <div className="card-body pt-9 pb-0">

                                    <div className="d-flex flex-wrap flex-sm-nowrap">

                                        <div className="me-7 mb-4">
                                            <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                                <img src="assets/media/avatars/300-1.jpg" alt="image" />
                                                <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                                <div className="d-flex flex-column">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">Max Smith</a>
                                                        <a href="#">
                                                            <i className="ki-outline ki-verify fs-1 text-primary"></i>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                                        <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                                            <i className="ki-outline ki-profile-circle fs-4 me-1"></i>Developer</a>
                                                        <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                                            <i className="ki-outline ki-geolocation fs-4 me-1"></i>SF, Bay Area</a>
                                                        <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                                                            <i className="ki-outline ki-sms fs-4 me-1"></i>max@kt.com</a>
                                                    </div>
                                                </div>
                                                <div className="d-flex my-4">
                                                    <a href="#" className="btn btn-sm btn-light me-2" id="kt_user_follow_button">
                                                        <i className="ki-outline ki-check fs-3 d-none"></i>
                                                        <span className="indicator-label">Follow</span>
                                                        <span className="indicator-progress">Please wait...
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                    </a>
                                                    <a href="#" className="btn btn-sm btn-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">Hire Me</a>
                                                    <div className="me-0">
                                                        <button className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                            <i className="ki-solid ki-dots-horizontal fs-2x me-1"></i>
                                                        </button>
                                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                                            <div className="menu-item px-3">
                                                                <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                                                            </div>
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Create Invoice</a>
                                                            </div>
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link flex-stack px-3">Create Payment
                                                                    <span className="ms-2" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
                                                                        <i className="ki-outline ki-information fs-6"></i>
                                                                    </span></a>
                                                            </div>
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Generate Bill</a>
                                                            </div>
                                                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                                                <a href="#" className="menu-link px-3">
                                                                    <span className="menu-title">Subscription</span>
                                                                    <span className="menu-arrow"></span>
                                                                </a>

                                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                                    <div className="menu-item px-3">
                                                                        <a href="#" className="menu-link px-3">Plans</a>
                                                                    </div>
                                                                    <div className="menu-item px-3">
                                                                        <a href="#" className="menu-link px-3">Billing</a>
                                                                    </div>
                                                                    <div className="menu-item px-3">
                                                                        <a href="#" className="menu-link px-3">Statements</a>
                                                                    </div>
                                                                    <div className="separator my-2"></div>
                                                                    <div className="menu-item px-3">
                                                                        <div className="menu-content px-3">
                                                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                                                                <input className="form-check-input w-30px h-20px" type="checkbox" value="1" name="notifications" />
                                                                                <span className="form-check-label text-muted fs-6">Recuring</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="menu-item px-3 my-1">
                                                                <a href="#" className="menu-link px-3">Settings</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-wrap flex-stack">
                                                <div className="d-flex flex-column flex-grow-1 pe-8">
                                                    <div className="d-flex flex-wrap">
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <i className="ki-outline ki-arrow-up fs-3 text-success me-2"></i>
                                                                <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">0</div>
                                                            </div>
                                                            <div className="fw-semibold fs-6 text-gray-400">Earnings</div>
                                                        </div>
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <i className="ki-outline ki-arrow-down fs-3 text-danger me-2"></i>
                                                                <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="80">0</div>
                                                            </div>
                                                            <div className="fw-semibold fs-6 text-gray-400">Projects</div>

                                                        </div>


                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">

                                                            <div className="d-flex align-items-center">
                                                                <i className="ki-outline ki-arrow-up fs-3 text-success me-2"></i>
                                                                <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">0</div>
                                                            </div>
                                                            <div className="fw-semibold fs-6 text-gray-400">Success Rate</div>

                                                        </div>

                                                    </div>

                                                </div>


                                                <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                                                    <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                                        <span className="fw-semibold fs-6 text-gray-400">Profile Compleation</span>
                                                        <span className="fw-bold fs-6">50%</span>
                                                    </div>
                                                    <div className="h-5px mx-3 w-100 bg-light mb-3">
                                                        {/* <div className="bg-success rounded h-5px" role="progressbar" 
                                    // style="width: 50%;" 
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">

                                        <li className="nav-item mt-2">
                                            <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo39/dist/pages/user-profile/overview.html">Overview</a>
                                        </li>


                                        <li className="nav-item mt-2">
                                            <a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="../../demo39/dist/pages/user-profile/projects.html">Projects</a>
                                        </li>


                                        <li className="nav-item mt-2">
                                            <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo39/dist/pages/user-profile/campaigns.html">Campaigns</a>
                                        </li>


                                        <li className="nav-item mt-2">
                                            <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo39/dist/pages/user-profile/documents.html">Documents</a>
                                        </li>


                                        <li className="nav-item mt-2">
                                            <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo39/dist/pages/user-profile/followers.html">Followers</a>
                                        </li>


                                        <li className="nav-item mt-2">
                                            <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo39/dist/pages/user-profile/activity.html">Activity</a>
                                        </li>

                                    </ul>

                                </div>
                            </div>


                            <div className="d-flex flex-wrap flex-stack mb-6">

                                <h3 className="fw-bold my-2">My Projects
                                    <span className="fs-6 text-gray-400 fw-semibold ms-1">Active</span></h3>


                                <div className="d-flex flex-wrap my-2">
                                    <div className="me-4">

                                        <select name="status" data-control="select2" data-hide-search="true" className="form-select form-select-sm form-select-solid w-125px">
                                            <option value="Active" >Active</option>
                                            <option value="Approved">In Progress</option>
                                            <option value="Declined">To Do</option>
                                            <option value="In Progress">Completed</option>
                                        </select>

                                    </div>
                                    <a href="#" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">New Project</a>
                                </div>

                            </div>


                            <div className="row g-6 g-xl-9">

                                <div className="col-md-6 col-xl-4">

                                    <a href="../../demo39/dist/apps/projects/project.html" className="card border-hover-primary">

                                        <div className="card-header border-0 pt-9">

                                            <div className="card-title m-0">

                                                <div className="symbol symbol-50px w-50px bg-light">
                                                    <img src="assets/media/svg/brand-logos/plurk.svg" alt="image" className="p-3" />
                                                </div>

                                            </div>


                                            <div className="card-toolbar">
                                                <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">In Progress</span>
                                            </div>

                                        </div>


                                        <div className="card-body p-9">

                                            <div className="fs-3 fw-bold text-dark">Fitnes App</div>


                                            <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>


                                            <div className="d-flex flex-wrap mb-5">

                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">Nov 10, 2023</div>
                                                    <div className="fw-semibold text-gray-400">Due Date</div>
                                                </div>


                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
                                                    <div className="fw-semibold text-gray-400">Budget</div>
                                                </div>

                                            </div>


                                            <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 50% completed">
                                                {/* <div className="bg-primary rounded h-4px" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>


                                            <div className="symbol-group symbol-hover">

                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Emma Smith">
                                                    <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Rudy Stone">
                                                    <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                                    <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                                </div>

                                            </div>

                                        </div>

                                    </a>

                                </div>


                                <div className="col-md-6 col-xl-4">

                                    <a href="../../demo39/dist/apps/projects/project.html" className="card border-hover-primary">

                                        <div className="card-header border-0 pt-9">

                                            <div className="card-title m-0">

                                                <div className="symbol symbol-50px w-50px bg-light">
                                                    <img src="assets/media/svg/brand-logos/disqus.svg" alt="image" className="p-3" />
                                                </div>

                                            </div>


                                            <div className="card-toolbar">
                                                <span className="badge badge-light fw-bold me-auto px-4 py-3">Pending</span>
                                            </div>

                                        </div>


                                        <div className="card-body p-9">

                                            <div className="fs-3 fw-bold text-dark">Leaf CRM</div>


                                            <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>


                                            <div className="d-flex flex-wrap mb-5">

                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">May 10, 2021</div>
                                                    <div className="fw-semibold text-gray-400">Due Date</div>
                                                </div>


                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">$36,400.00</div>
                                                    <div className="fw-semibold text-gray-400">Budget</div>
                                                </div>

                                            </div>


                                            <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 30% completed">
                                                {/* <div className="bg-info rounded h-4px" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>


                                            <div className="symbol-group symbol-hover">

                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                                                    <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Brian Cox">
                                                    <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                                                </div>

                                            </div>

                                        </div>

                                    </a>

                                </div>


                                <div className="col-md-6 col-xl-4">

                                    <a href="../../demo39/dist/apps/projects/project.html" className="card border-hover-primary">

                                        <div className="card-header border-0 pt-9">

                                            <div className="card-title m-0">

                                                <div className="symbol symbol-50px w-50px bg-light">
                                                    <img src="assets/media/svg/brand-logos/figma-1.svg" alt="image" className="p-3" />
                                                </div>

                                            </div>


                                            <div className="card-toolbar">
                                                <span className="badge badge-light-success fw-bold me-auto px-4 py-3">Completed</span>
                                            </div>

                                        </div>


                                        <div className="card-body p-9">

                                            <div className="fs-3 fw-bold text-dark">Atica Banking</div>


                                            <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>


                                            <div className="d-flex flex-wrap mb-5">

                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">Mar 14, 2021</div>
                                                    <div className="fw-semibold text-gray-400">Due Date</div>
                                                </div>


                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">$605,100.00</div>
                                                    <div className="fw-semibold text-gray-400">Budget</div>
                                                </div>

                                            </div>


                                            <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 100% completed">
                                                {/* <div className="bg-success rounded h-4px" role="progressbar"
                            //  style="width: 100%"
                              aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>


                                            <div className="symbol-group symbol-hover">

                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Mad Macy">
                                                    <img alt="Pic" src="assets/media/avatars/300-2.jpg" />
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Cris Willson">
                                                    <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Mike Garcie">
                                                    <span className="symbol-label bg-info text-inverse-info fw-bold">M</span>
                                                </div>

                                            </div>

                                        </div>

                                    </a>

                                </div>


                                <div className="col-md-6 col-xl-4">

                                    <a href="../../demo39/dist/apps/projects/project.html" className="card border-hover-primary">

                                        <div className="card-header border-0 pt-9">

                                            <div className="card-title m-0">

                                                <div className="symbol symbol-50px w-50px bg-light">
                                                    <img src="assets/media/svg/brand-logos/sentry-3.svg" alt="image" className="p-3" />
                                                </div>

                                            </div>


                                            <div className="card-toolbar">
                                                <span className="badge badge-light fw-bold me-auto px-4 py-3">Pending</span>
                                            </div>

                                        </div>


                                        <div className="card-body p-9">

                                            <div className="fs-3 fw-bold text-dark">Finance Dispatch</div>


                                            <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>


                                            <div className="d-flex flex-wrap mb-5">

                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">May 05, 2023</div>
                                                    <div className="fw-semibold text-gray-400">Due Date</div>
                                                </div>


                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
                                                    <div className="fw-semibold text-gray-400">Budget</div>
                                                </div>

                                            </div>


                                            <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 60% completed">
                                                {/* <div className="bg-info rounded h-4px" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>


                                            <div className="symbol-group symbol-hover">

                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Nich Warden">
                                                    <span className="symbol-label bg-warning text-inverse-warning fw-bold">N</span>
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Rob Otto">
                                                    <span className="symbol-label bg-success text-inverse-success fw-bold">R</span>
                                                </div>

                                            </div>

                                        </div>

                                    </a>

                                </div>


                                <div className="col-md-6 col-xl-4">

                                    <a href="../../demo39/dist/apps/projects/project.html" className="card border-hover-primary">

                                        <div className="card-header border-0 pt-9">

                                            <div className="card-title m-0">

                                                <div className="symbol symbol-50px w-50px bg-light">
                                                    <img src="assets/media/svg/brand-logos/xing-icon.svg" alt="image" className="p-3" />
                                                </div>

                                            </div>


                                            <div className="card-toolbar">
                                                <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">In Progress</span>
                                            </div>

                                        </div>


                                        <div className="card-body p-9">

                                            <div className="fs-3 fw-bold text-dark">9 Degree</div>


                                            <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>


                                            <div className="d-flex flex-wrap mb-5">

                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">Feb 21, 2023</div>
                                                    <div className="fw-semibold text-gray-400">Due Date</div>
                                                </div>


                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
                                                    <div className="fw-semibold text-gray-400">Budget</div>
                                                </div>

                                            </div>


                                            <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 40% completed">
                                                {/* <div className="bg-primary rounded h-4px" role="progressbar" 
                            // style="width: 40%"
                             aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>


                                            <div className="symbol-group symbol-hover">

                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Francis Mitcham">
                                                    <img alt="Pic" src="assets/media/avatars/300-20.jpg" />
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michelle Swanston">
                                                    <img alt="Pic" src="assets/media/avatars/300-7.jpg" />
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                                    <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                                </div>

                                            </div>

                                        </div>

                                    </a>

                                </div>


                                <div className="col-md-6 col-xl-4">

                                    <a href="../../demo39/dist/apps/projects/project.html" className="card border-hover-primary">

                                        <div className="card-header border-0 pt-9">

                                            <div className="card-title m-0">

                                                <div className="symbol symbol-50px w-50px bg-light">
                                                    <img src="assets/media/svg/brand-logos/tvit.svg" alt="image" className="p-3" />
                                                </div>

                                            </div>


                                            <div className="card-toolbar">
                                                <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">In Progress</span>
                                            </div>

                                        </div>


                                        <div className="card-body p-9">

                                            <div className="fs-3 fw-bold text-dark">GoPro App</div>


                                            <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>


                                            <div className="d-flex flex-wrap mb-5">

                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">Dec 20, 2023</div>
                                                    <div className="fw-semibold text-gray-400">Due Date</div>
                                                </div>


                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
                                                    <div className="fw-semibold text-gray-400">Budget</div>
                                                </div>

                                            </div>


                                            <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 70% completed">
                                                {/* <div className="bg-primary rounded h-4px" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>


                                            <div className="symbol-group symbol-hover">

                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                                    <img alt="Pic" src="assets/media/avatars/300-2.jpg" />
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Robin Watterman">
                                                    <span className="symbol-label bg-success text-inverse-success fw-bold">R</span>
                                                </div>

                                            </div>

                                        </div>

                                    </a>

                                </div>


                                <div className="col-md-6 col-xl-4">

                                    <a href="../../demo39/dist/apps/projects/project.html" className="card border-hover-primary">

                                        <div className="card-header border-0 pt-9">

                                            <div className="card-title m-0">

                                                <div className="symbol symbol-50px w-50px bg-light">
                                                    <img src="assets/media/svg/brand-logos/aven.svg" alt="image" className="p-3" />
                                                </div>

                                            </div>


                                            <div className="card-toolbar">
                                                <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">In Progress</span>
                                            </div>

                                        </div>


                                        <div className="card-body p-9">

                                            <div className="fs-3 fw-bold text-dark">Buldozer CRM</div>


                                            <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>


                                            <div className="d-flex flex-wrap mb-5">

                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">Sep 22, 2023</div>
                                                    <div className="fw-semibold text-gray-400">Due Date</div>
                                                </div>


                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
                                                    <div className="fw-semibold text-gray-400">Budget</div>
                                                </div>

                                            </div>


                                            <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 70% completed">
                                                {/* <div className="bg-primary rounded h-4px" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>


                                            <div className="symbol-group symbol-hover">

                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                                    <img alt="Pic" src="assets/media/avatars/300-2.jpg" />
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="John Mixin">
                                                    <img alt="Pic" src="assets/media/avatars/300-14.jpg" />
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Emma Smith">
                                                    <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                                </div>

                                            </div>

                                        </div>

                                    </a>

                                </div>


                                <div className="col-md-6 col-xl-4">

                                    <a href="../../demo39/dist/apps/projects/project.html" className="card border-hover-primary">

                                        <div className="card-header border-0 pt-9">

                                            <div className="card-title m-0">

                                                <div className="symbol symbol-50px w-50px bg-light">
                                                    <img src="assets/media/svg/brand-logos/treva.svg" alt="image" className="p-3" />
                                                </div>

                                            </div>


                                            <div className="card-toolbar">
                                                <span className="badge badge-light-danger fw-bold me-auto px-4 py-3">Overdue</span>
                                            </div>

                                        </div>


                                        <div className="card-body p-9">

                                            <div className="fs-3 fw-bold text-dark">Aviasales App</div>


                                            <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>


                                            <div className="d-flex flex-wrap mb-5">

                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">Mar 10, 2023</div>
                                                    <div className="fw-semibold text-gray-400">Due Date</div>
                                                </div>


                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
                                                    <div className="fw-semibold text-gray-400">Budget</div>
                                                </div>

                                            </div>


                                            <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 10% completed">
                                                {/* <div className="bg-danger rounded h-4px" role="progressbar" 
                            // style="width: 10%"
                             aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>


                                            <div className="symbol-group symbol-hover">

                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                                                    <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Brian Cox">
                                                    <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                                                </div>

                                            </div>

                                        </div>

                                    </a>

                                </div>


                                <div className="col-md-6 col-xl-4">

                                    <a href="../../demo39/dist/apps/projects/project.html" className="card border-hover-primary">

                                        <div className="card-header border-0 pt-9">

                                            <div className="card-title m-0">

                                                <div className="symbol symbol-50px w-50px bg-light">
                                                    <img src="assets/media/svg/brand-logos/kanba.svg" alt="image" className="p-3" />
                                                </div>

                                            </div>


                                            <div className="card-toolbar">
                                                <span className="badge badge-light-success fw-bold me-auto px-4 py-3">Completed</span>
                                            </div>

                                        </div>


                                        <div className="card-body p-9">

                                            <div className="fs-3 fw-bold text-dark">Oppo CRM</div>


                                            <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>


                                            <div className="d-flex flex-wrap mb-5">

                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">Oct 25, 2023</div>
                                                    <div className="fw-semibold text-gray-400">Due Date</div>
                                                </div>


                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                    <div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
                                                    <div className="fw-semibold text-gray-400">Budget</div>
                                                </div>

                                            </div>


                                            <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 100% completed">
                                                {/* <div className="bg-success rounded h-4px" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>


                                            <div className="symbol-group symbol-hover">

                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Nick Macy">
                                                    <img alt="Pic" src="assets/media/avatars/300-2.jpg" />
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Sean Paul">
                                                    <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                                                </div>


                                                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Mike Collin">
                                                    <span className="symbol-label bg-info text-inverse-info fw-bold">M</span>
                                                </div>

                                            </div>

                                        </div>

                                    </a>

                                </div>

                            </div>


                            <div className="d-flex flex-stack flex-wrap pt-10">
                                <div className="fs-6 fw-semibold text-gray-700">Showing 1 to 10 of 50 entries</div>

                                <ul className="pagination">
                                    <li className="page-item previous">
                                        <a href="#" className="page-link">
                                            <i className="previous"></i>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a href="#" className="page-link">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a href="#" className="page-link">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a href="#" className="page-link">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a href="#" className="page-link">4</a>
                                    </li>
                                    <li className="page-item">
                                        <a href="#" className="page-link">5</a>
                                    </li>
                                    <li className="page-item">
                                        <a href="#" className="page-link">6</a>
                                    </li>
                                    <li className="page-item next">
                                        <a href="#" className="page-link">
                                            <i className="next"></i>
                                        </a>
                                    </li>
                                </ul>

                            </div>



                            <div className="modal fade" id="kt_modal_create_project" aria-hidden="true">

                                <div className="modal-dialog modal-fullscreen p-9">

                                    <div className="modal-content modal-rounded">

                                        <div className="modal-header">

                                            <h2>Create Project</h2>


                                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                                <i className="ki-outline ki-cross fs-1"></i>
                                            </div>

                                        </div>


                                        <div className="modal-body scroll-y m-5">

                                            <div className="stepper stepper-links d-flex flex-column" id="kt_modal_create_project_stepper">

                                                <div className="container">

                                                    <div className="stepper-nav justify-content-center py-2">

                                                        <div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
                                                            <h3 className="stepper-title">Project Type</h3>
                                                        </div>


                                                        <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                                            <h3 className="stepper-title">Project Settings</h3>
                                                        </div>


                                                        <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                                            <h3 className="stepper-title">Budget</h3>
                                                        </div>


                                                        <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                                            <h3 className="stepper-title">Build A Team</h3>
                                                        </div>


                                                        <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                                            <h3 className="stepper-title">Set First Target</h3>
                                                        </div>


                                                        <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                                            <h3 className="stepper-title">Upload Files</h3>
                                                        </div>


                                                        <div className="stepper-item" data-kt-stepper-element="nav">
                                                            <h3 className="stepper-title">Completed</h3>
                                                        </div>

                                                    </div>


                                                    <form className="mx-auto w-100 mw-600px pt-15 pb-10" id="kt_modal_create_project_form" method="post">

                                                        <div className="current" data-kt-stepper-element="content">

                                                            <div className="w-100">

                                                                <div className="pb-7 pb-lg-12">

                                                                    <h1 className="fw-bold text-dark">Project Type</h1>


                                                                    <div className="text-muted fw-semibold fs-4">If you need more info, please check out
                                                                        <a href="#" className="link-primary fw-bold">FAQ Page</a></div>

                                                                </div>


                                                                <div className="fv-row mb-15" data-kt-buttons="true">

                                                                    <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">

                                                                        <input className="btn-check" type="radio" name="project_type" value="1" />


                                                                        <span className="d-flex">

                                                                            <i className="ki-outline ki-profile-circle fs-3hx"></i>


                                                                            <span className="ms-4">
                                                                                <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Personal Project</span>
                                                                                <span className="fw-semibold fs-4 text-muted">If you need more info, please check it out</span>
                                                                            </span>

                                                                        </span>

                                                                    </label>


                                                                    <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">

                                                                        <input className="btn-check" type="radio" name="project_type" value="2" />


                                                                        <span className="d-flex">

                                                                            <i className="ki-outline ki-rocket fs-3hx"></i>


                                                                            <span className="ms-4">
                                                                                <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Team Project</span>
                                                                                <span className="fw-semibold fs-4 text-muted">Create corporate account to manage users</span>
                                                                            </span>

                                                                        </span>

                                                                    </label>

                                                                </div>


                                                                <div className="d-flex justify-content-end">
                                                                    <button type="button" className="btn btn-lg btn-primary" data-kt-element="type-next">
                                                                        <span className="indicator-label">Project Settings</span>
                                                                        <span className="indicator-progress">Please wait...
                                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>


                                                        <div data-kt-stepper-element="content">

                                                            <div className="w-100">

                                                                <div className="pb-12">

                                                                    <h1 className="fw-bold text-dark">Project Settings</h1>


                                                                    <div className="text-muted fw-semibold fs-4">If you need more info, please check
                                                                        <a href="#" className="link-primary">Project Guidelines</a></div>

                                                                </div>


                                                                <div className="fv-row mb-8">

                                                                    <div className="dropzone" id="kt_modal_create_project_settings_logo">

                                                                        <div className="dz-message needsclick">

                                                                            <i className="ki-outline ki-file-up fs-3hx text-primary"></i>


                                                                            <div className="ms-4">
                                                                                <h3 className="dfs-3 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                                <span className="fw-semibold fs-4 text-muted">Upload up to 10 files</span>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                </div>


                                                                <div className="fv-row mb-8">

                                                                    <label className="required fs-6 fw-semibold mb-2">Customer</label>


                                                                    <select className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Select..." name="settings_customer">
                                                                        <option></option>
                                                                        <option value="1">Keenthemes</option>
                                                                        <option value="2">CRM App</option>
                                                                    </select>

                                                                </div>


                                                                <div className="fv-row mb-8">

                                                                    <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                                                        <span className="required">Project Name</span>
                                                                        <span className="ms-1" data-bs-toggle="tooltip" title="Specify project name">
                                                                            <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                                                                        </span>
                                                                    </label>


                                                                    <input type="text" className="form-control form-control-solid" placeholder="Enter Project Name" value="StockPro Mobile App" name="settings_name" />

                                                                </div>


                                                                <div className="fv-row mb-8">

                                                                    <label className="required fs-6 fw-semibold mb-2">Project Description</label>


                                                                    <textarea className="form-control form-control-solid" placeholder="Enter Project Description" name="settings_description">Experience share market at your fingertips with TICK PRO stock investment mobile trading app</textarea>

                                                                </div>


                                                                <div className="fv-row mb-8">

                                                                    <label className="required fs-6 fw-semibold mb-2">Release Date</label>


                                                                    <div className="position-relative d-flex align-items-center">

                                                                        <i className="ki-outline ki-calendar-8 fs-2 position-absolute mx-4"></i>


                                                                        <input className="form-control form-control-solid ps-12" placeholder="Pick date range" name="settings_release_date" />

                                                                    </div>

                                                                </div>


                                                                <div className="fv-row mb-15">

                                                                    <div className="d-flex flex-stack">

                                                                        <div className="me-5">
                                                                            <label className="required fs-6 fw-semibold">Notifications</label>
                                                                            <div className="fs-7 fw-semibold text-muted">Allow Notifications by Phone or Email</div>
                                                                        </div>


                                                                        <div className="d-flex">

                                                                            <label className="form-check form-check-custom form-check-solid me-10">

                                                                                <input className="form-check-input h-20px w-20px" type="checkbox" value="email" name="settings_notifications[]" />


                                                                                <span className="form-check-label fw-semibold">Email</span>

                                                                            </label>


                                                                            <label className="form-check form-check-custom form-check-solid">

                                                                                <input className="form-check-input h-20px w-20px" type="checkbox" value="phone" name="settings_notifications[]" />


                                                                                <span className="form-check-label fw-semibold">Phone</span>

                                                                            </label>

                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                <div className="d-flex flex-stack">
                                                                    <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="settings-previous">Project Type</button>
                                                                    <button type="button" className="btn btn-lg btn-primary" data-kt-element="settings-next">
                                                                        <span className="indicator-label">Budget</span>
                                                                        <span className="indicator-progress">Please wait...
                                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>


                                                        <div data-kt-stepper-element="content">

                                                            <div className="w-100">

                                                                <div className="pb-10 pb-lg-12">

                                                                    <h1 className="fw-bold text-dark">Budget</h1>


                                                                    <div className="text-muted fw-semibold fs-4">If you need more info, please check
                                                                        <a href="#" className="link-primary">Project Guidelines</a></div>

                                                                </div>


                                                                <div className="fv-row mb-8">

                                                                    <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                                        <span className="required">Setup Budget</span>
                                                                        <span className="ms-1" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="&lt;div className=&#039;p-4 rounded bg-light&#039;&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-4&#039;&gt; &lt;i className=&quot;ki-outline ki-bank fs-3 me-3&quot;&gt;&lt;/i&gt; &lt;div className=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-dark fw-bold mb-2&#039;&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-2&#039;&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted&#039;&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;">
                                                                            <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                                                                        </span>
                                                                    </label>


                                                                    <div className="position-relative w-lg-250px" id="kt_modal_create_project_budget_setup" data-kt-dialer="true" data-kt-dialer-min="50" data-kt-dialer-max="50000" data-kt-dialer-step="100" data-kt-dialer-prefix="$" data-kt-dialer-decimals="2">

                                                                        <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
                                                                            <i className="ki-outline ki-minus-circle fs-1"></i>
                                                                        </button>


                                                                        <input type="text" className="form-control form-control-solid border-0 ps-12" data-kt-dialer-control="input" placeholder="Amount" name="budget_setup" value="$50" />


                                                                        <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
                                                                            <i className="ki-outline ki-plus-circle fs-1"></i>
                                                                        </button>

                                                                    </div>

                                                                </div>


                                                                <div className="fv-row mb-8">

                                                                    <label className="fs-6 fw-semibold mb-2">Budget Usage</label>


                                                                    <div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">

                                                                        <div className="col-md-6 col-lg-12 col-xxl-6">

                                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">

                                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                                    <input className="form-check-input" type="radio" name="budget_usage" value="1" />
                                                                                </span>


                                                                                <span className="ms-5">
                                                                                    <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Precise Usage</span>
                                                                                    <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                                                                                </span>

                                                                            </label>

                                                                        </div>


                                                                        <div className="col-md-6 col-lg-12 col-xxl-6">

                                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">

                                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                                    <input className="form-check-input" type="radio" name="budget_usage" value="2" />
                                                                                </span>


                                                                                <span className="ms-5">
                                                                                    <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Extreme Usage</span>
                                                                                    <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                                                                                </span>

                                                                            </label>

                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                <div className="fv-row mb-15">

                                                                    <div className="d-flex flex-stack">

                                                                        <div className="me-5">
                                                                            <label className="fs-6 fw-semibold">Allow Changes in Budget</label>
                                                                            <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                                                                        </div>


                                                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" value="1" name="budget_allow" />
                                                                            <span className="form-check-label fw-semibold text-muted">Allowed</span>
                                                                        </label>

                                                                    </div>

                                                                </div>


                                                                <div className="d-flex flex-stack">
                                                                    <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="budget-previous">Project Settings</button>
                                                                    <button type="button" className="btn btn-lg btn-primary" data-kt-element="budget-next">
                                                                        <span className="indicator-label">Build Team</span>
                                                                        <span className="indicator-progress">Please wait...
                                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>


                                                        <div data-kt-stepper-element="content">

                                                            <div className="w-100">

                                                                <div className="pb-12">

                                                                    <h1 className="fw-bold text-dark">Build a Team</h1>


                                                                    <div className="text-muted fw-semibold fs-4">If you need more info, please check
                                                                        <a href="#" className="link-primary">Project Guidelines</a></div>

                                                                </div>


                                                                <div className="mb-8">

                                                                    <label className="fs-6 fw-semibold mb-2">Invite Teammates</label>


                                                                    <input type="text" className="form-control form-control-solid" placeholder="Add project memnbers by name or email.." name="invite_teammates" />

                                                                </div>


                                                                <div className="mb-8">

                                                                    <div className="fs-6 fw-semibold mb-2">Team Members</div>


                                                                    <div className="mh-300px scroll-y me-n7 pe-7">

                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                                                                                    <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2" >Owner</option>
                                                                                    <option value="3">Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                                                                                    <div className="fw-semibold text-muted">melody@altbox.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1" >Guest</option>
                                                                                    <option value="2">Owner</option>
                                                                                    <option value="3">Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                                                                                    <div className="fw-semibold text-muted">max@kt.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2">Owner</option>
                                                                                    <option value="3" >Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                                                                                    <div className="fw-semibold text-muted">sean@dellito.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2" >Owner</option>
                                                                                    <option value="3">Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                                                                                    <div className="fw-semibold text-muted">brian@exchange.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2">Owner</option>
                                                                                    <option value="3" >Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                                                                                    <div className="fw-semibold text-muted">mik@pex.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2" >Owner</option>
                                                                                    <option value="3">Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                                                                                    <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2">Owner</option>
                                                                                    <option value="3" >Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                                                                                    <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2" >Owner</option>
                                                                                    <option value="3">Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                                                                                    <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1" >Guest</option>
                                                                                    <option value="2">Owner</option>
                                                                                    <option value="3">Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                                                                                    <div className="fw-semibold text-muted">dam@consilting.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2">Owner</option>
                                                                                    <option value="3" >Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                                                                                    <div className="fw-semibold text-muted">emma@intenso.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2" >Owner</option>
                                                                                    <option value="3">Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                                                                                    <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1" >Guest</option>
                                                                                    <option value="2">Owner</option>
                                                                                    <option value="3">Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                                                                                    <div className="fw-semibold text-muted">robert@benko.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2">Owner</option>
                                                                                    <option value="3" >Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                                                                                    <div className="fw-semibold text-muted">miller@mapple.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2">Owner</option>
                                                                                    <option value="3" >Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                                                                                    <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2" >Owner</option>
                                                                                    <option value="3">Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                                                                                    <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1" >Guest</option>
                                                                                    <option value="2">Owner</option>
                                                                                    <option value="3">Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4">

                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px symbol-circle">
                                                                                    <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                                                                                </div>


                                                                                <div className="ms-5">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                                                                                    <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                                                                </div>

                                                                            </div>


                                                                            <div className="ms-2 w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                                                    <option value="1">Guest</option>
                                                                                    <option value="2">Owner</option>
                                                                                    <option value="3" >Can Edit</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                <div className="d-flex flex-stack mb-15">

                                                                    <div className="me-5 fw-semibold">
                                                                        <label className="fs-6">Adding Users by Team Members</label>
                                                                        <div className="fs-7 text-muted">If you need more info, please check budget planning</div>
                                                                    </div>


                                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                                        <input className="form-check-input" type="checkbox" value="" />
                                                                    </label>

                                                                </div>


                                                                <div className="d-flex flex-stack">
                                                                    <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="team-previous">Budget</button>
                                                                    <button type="button" className="btn btn-lg btn-primary" data-kt-element="team-next">
                                                                        <span className="indicator-label">Set Target</span>
                                                                        <span className="indicator-progress">Please wait...
                                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>


                                                        <div data-kt-stepper-element="content">

                                                            <div className="w-100">

                                                                <div className="pb-12">

                                                                    <h1 className="fw-bold text-dark">Set First Target</h1>


                                                                    <div className="text-muted fw-semibold fs-4">If you need more info, please check
                                                                        <a href="#" className="link-primary">Project Guidelines</a></div>

                                                                </div>


                                                                <div className="fv-row mb-8">
                                                                    <label className="fs-6 fw-semibold mb-2">Target Title</label>
                                                                    <input type="text" className="form-control form-control-solid" placeholder="Enter Target Title" name="Project Launch" />
                                                                </div>


                                                                <div className="row g-9 mb-8">

                                                                    <div className="col-md-6 fv-row">
                                                                        <label className="required fs-6 fw-semibold mb-2">Assign</label>
                                                                        <select className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Select a Team Member" name="target_assign">
                                                                            <option></option>
                                                                            <option value="1">Karina Clark</option>
                                                                            <option value="2" >Robert Doe</option>
                                                                            <option value="3">Niel Owen</option>
                                                                            <option value="4">Olivia Wild</option>
                                                                            <option value="5">Sean Bean</option>
                                                                        </select>
                                                                    </div>


                                                                    <div className="col-md-6 fv-row">
                                                                        <label className="required fs-6 fw-semibold mb-2">Due Date</label>
                                                                        <div className="position-relative d-flex align-items-center">

                                                                            <i className="ki-outline ki-calendar-8 fs-2 position-absolute mx-4"></i>


                                                                            <input className="form-control form-control-solid ps-12" placeholder="Pick date range" name="target_due_date" />

                                                                        </div>
                                                                    </div>

                                                                </div>


                                                                <div className="fv-row mb-8">
                                                                    <label className="fs-6 fw-semibold mb-2">Target Details</label>
                                                                    <textarea className="form-control form-control-solid" name="target_details" placeholder="Type Target Details">Experience share market at your fingertips with TICK PRO stock investment mobile trading app</textarea>
                                                                </div>


                                                                <div className="fv-row mb-8">
                                                                    <label className="required fs-6 fw-semibold mb-2">Tags</label>
                                                                    <input className="form-control form-control-solid" value="Important, Urgent" name="target_tags" />
                                                                </div>


                                                                <div className="fv-row mb-8">

                                                                    <div className="d-flex flex-stack">

                                                                        <div className="me-5">
                                                                            <label className="fs-6 fw-semibold">Allow Changes in Budget</label>
                                                                            <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                                                                        </div>


                                                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" value="1" name="target_allow" />
                                                                            <span className="form-check-label fw-semibold text-muted">Allowed</span>
                                                                        </label>

                                                                    </div>

                                                                </div>


                                                                <div className="fv-row mb-15">

                                                                    <div className="d-flex flex-stack">

                                                                        <div className="me-5">
                                                                            <label className="fs-6 fw-semibold">Notifications</label>
                                                                            <div className="fs-7 fw-semibold text-muted">Allow Notifications by Phone or Email</div>
                                                                        </div>


                                                                        <div className="d-flex">

                                                                            <label className="form-check form-check-custom form-check-solid me-10">

                                                                                <input className="form-check-input h-20px w-20px" type="checkbox" value="email" name="target_notifications[]" />


                                                                                <span className="form-check-label fw-semibold">Email</span>

                                                                            </label>


                                                                            <label className="form-check form-check-custom form-check-solid">

                                                                                <input className="form-check-input h-20px w-20px" type="checkbox" value="phone" name="target_notifications[]" />


                                                                                <span className="form-check-label fw-semibold">Phone</span>

                                                                            </label>

                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                <div className="d-flex flex-stack">
                                                                    <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="targets-previous">Build a Team</button>
                                                                    <button type="button" className="btn btn-lg btn-primary" data-kt-element="targets-next">
                                                                        <span className="indicator-label">Upload Files</span>
                                                                        <span className="indicator-progress">Please wait...
                                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>


                                                        <div data-kt-stepper-element="content">

                                                            <div className="w-100">

                                                                <div className="pb-10 pb-lg-12">

                                                                    <h1 className="fw-bold text-dark">Upload Files</h1>


                                                                    <div className="text-muted fw-semibold fs-4">If you need more info, please check
                                                                        <a href="#" className="link-primary">Project Guidelines</a></div>

                                                                </div>


                                                                <div className="fv-row mb-8">

                                                                    <div className="dropzone" id="kt_modal_create_project_files_upload">

                                                                        <div className="dz-message needsclick">

                                                                            <i className="ki-outline ki-file-up fs-3hx text-primary"></i>


                                                                            <div className="ms-4">
                                                                                <h3 className="dfs-3 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                                <span className="fw-semibold fs-4 text-muted">Upload up to 10 files</span>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                </div>


                                                                <div className="mb-8">

                                                                    <label className="fs-6 fw-semibold mb-2">Uploaded File</label>


                                                                    <div className="mh-300px scroll-y me-n7 pe-7">

                                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px">
                                                                                    <img src="assets/media/svg/files/pdf.svg" alt="icon" />
                                                                                </div>


                                                                                <div className="ms-6">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Avionica Technical Requirements</a>
                                                                                    <div className="fw-semibold text-muted">230kb</div>
                                                                                </div>

                                                                            </div>

                                                                            <div className="min-w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                                                                    <option></option>
                                                                                    <option value="1">Remove</option>
                                                                                    <option value="2">Modify</option>
                                                                                    <option value="3">Select</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px">
                                                                                    <img src="assets/media/svg/files/doc.svg" alt="icon" />
                                                                                </div>


                                                                                <div className="ms-6">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">9 Degree CURD draftplan</a>
                                                                                    <div className="fw-semibold text-muted">3.6mb</div>
                                                                                </div>

                                                                            </div>

                                                                            <div className="min-w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                                                                    <option></option>
                                                                                    <option value="1">Remove</option>
                                                                                    <option value="2">Modify</option>
                                                                                    <option value="3">Select</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px">
                                                                                    <img src="assets/media/svg/files/css.svg" alt="icon" />
                                                                                </div>


                                                                                <div className="ms-6">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">User CRUD Styles</a>
                                                                                    <div className="fw-semibold text-muted">85kb</div>
                                                                                </div>

                                                                            </div>

                                                                            <div className="min-w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                                                                    <option></option>
                                                                                    <option value="1">Remove</option>
                                                                                    <option value="2">Modify</option>
                                                                                    <option value="3">Select</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px">
                                                                                    <img src="assets/media/svg/files/ai.svg" alt="icon" />
                                                                                </div>


                                                                                <div className="ms-6">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Design Initial Logo</a>
                                                                                    <div className="fw-semibold text-muted">40kb</div>
                                                                                </div>

                                                                            </div>

                                                                            <div className="min-w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                                                                    <option></option>
                                                                                    <option value="1">Remove</option>
                                                                                    <option value="2">Modify</option>
                                                                                    <option value="3">Select</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>


                                                                        <div className="d-flex flex-stack py-4">
                                                                            <div className="d-flex align-items-center">

                                                                                <div className="symbol symbol-35px">
                                                                                    <img src="assets/media/svg/files/tif.svg" alt="icon" />
                                                                                </div>


                                                                                <div className="ms-6">
                                                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Tower Hill Bilboard</a>
                                                                                    <div className="fw-semibold text-muted">27mb</div>
                                                                                </div>

                                                                            </div>

                                                                            <div className="min-w-100px">
                                                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                                                                                    <option></option>
                                                                                    <option value="1">Remove</option>
                                                                                    <option value="2">Modify</option>
                                                                                    <option value="3">Select</option>
                                                                                </select>
                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                <div className="fv-row mb-8">

                                                                    <div className="d-flex flex-stack">

                                                                        <div className="me-5">
                                                                            <label className="fs-6 fw-semibold">Allow Changes in Budget</label>
                                                                            <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                                                                        </div>


                                                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" value="1" name="target_allow" />
                                                                            <span className="form-check-label fw-semibold text-muted">Allowed</span>
                                                                        </label>

                                                                    </div>

                                                                </div>


                                                                <div className="d-flex flex-stack">
                                                                    <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="files-previous">Set First Target</button>
                                                                    <button type="button" className="btn btn-lg btn-primary" data-kt-element="files-next">
                                                                        <span className="indicator-label">Complete</span>
                                                                        <span className="indicator-progress">Please wait...
                                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>


                                                        <div data-kt-stepper-element="content">

                                                            <div className="w-100">

                                                                <div className="pb-12 text-center">

                                                                    <h1 className="fw-bold text-dark">Project Created!</h1>


                                                                    <div className="text-muted fw-semibold fs-4">If you need more info, please check how to create project</div>

                                                                </div>


                                                                <div className="d-flex flex-center pb-20">
                                                                    <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">Create New Project</button>
                                                                    <a href="" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">View Project</a>
                                                                </div>


                                                                <div className="text-center px-4">
                                                                    <img src="assets/media/illustrations/sketchy-1/9.png" alt="" className="mww-100 mh-350px" />
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </form>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className="modal fade" id="kt_modal_offer_a_deal" aria-hidden="true">

                                <div className="modal-dialog modal-dialog-centered mw-1000px">

                                    <div className="modal-content">

                                        <div className="modal-header py-7 d-flex justify-content-between">

                                            <h2>Offer a Deal</h2>


                                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                                <i className="ki-outline ki-cross fs-1"></i>
                                            </div>

                                        </div>


                                        <div className="modal-body scroll-y m-5">

                                            <div className="stepper stepper-links d-flex flex-column" id="kt_modal_offer_a_deal_stepper">

                                                <div className="stepper-nav justify-content-center py-2">

                                                    <div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
                                                        <h3 className="stepper-title">Deal Type</h3>
                                                    </div>


                                                    <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                                        <h3 className="stepper-title">Deal Details</h3>
                                                    </div>


                                                    <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                                        <h3 className="stepper-title">Finance Settings</h3>
                                                    </div>


                                                    <div className="stepper-item" data-kt-stepper-element="nav">
                                                        <h3 className="stepper-title">Completed</h3>
                                                    </div>

                                                </div>


                                                <form className="mx-auto mw-500px w-100 pt-15 pb-10" id="kt_modal_offer_a_deal_form">

                                                    <div className="current" data-kt-stepper-element="content">

                                                        <div className="w-100">

                                                            <div className="mb-13">

                                                                <h2 className="mb-3">Deal Type</h2>


                                                                <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>

                                                            </div>


                                                            <div className="fv-row mb-15" data-kt-buttons="true">

                                                                <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">

                                                                    <input className="btn-check" type="radio" name="offer_type" value="1" />


                                                                    <span className="d-flex">

                                                                        <i className="ki-outline ki-profile-circle fs-3hx"></i>


                                                                        <span className="ms-4">
                                                                            <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Personal Deal</span>
                                                                            <span className="fw-semibold fs-4 text-muted">If you need more info, please check it out</span>
                                                                        </span>

                                                                    </span>

                                                                </label>


                                                                <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">

                                                                    <input className="btn-check" type="radio" name="offer_type" value="2" />


                                                                    <span className="d-flex">

                                                                        <i className="ki-outline ki-element-11 fs-3hx"></i>


                                                                        <span className="ms-4">
                                                                            <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Corporate Deal</span>
                                                                            <span className="fw-semibold fs-4 text-muted">Create corporate account to manage users</span>
                                                                        </span>

                                                                    </span>

                                                                </label>

                                                            </div>


                                                            <div className="d-flex justify-content-end">
                                                                <button type="button" className="btn btn-lg btn-primary" data-kt-element="type-next">
                                                                    <span className="indicator-label">Offer Details</span>
                                                                    <span className="indicator-progress">Please wait...
                                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                </button>
                                                            </div>

                                                        </div>

                                                    </div>


                                                    <div data-kt-stepper-element="content">

                                                        <div className="w-100">

                                                            <div className="mb-13">

                                                                <h2 className="mb-3">Deal Details</h2>


                                                                <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>

                                                            </div>


                                                            <div className="fv-row mb-8">

                                                                <label className="required fs-6 fw-semibold mb-2">Customer</label>


                                                                <select className="form-select form-select-solid" data-control="select2" data-placeholder="Select an option" name="details_customer">
                                                                    <option></option>
                                                                    <option value="1" >Keenthemes</option>
                                                                    <option value="2">CRM App</option>
                                                                </select>

                                                            </div>


                                                            <div className="fv-row mb-8">

                                                                <label className="required fs-6 fw-semibold mb-2">Deal Title</label>


                                                                <input type="text" className="form-control form-control-solid" placeholder="Enter Deal Title" name="details_title" value="Marketing Campaign" />

                                                            </div>


                                                            <div className="fv-row mb-8">

                                                                <label className="fs-6 fw-semibold mb-2">Deal Description</label>


                                                                <textarea className="form-control form-control-solid" placeholder="Enter Deal Description" name="details_description">Experience share market at your fingertips with TICK PRO stock investment mobile trading app</textarea>

                                                            </div>


                                                            <div className="fv-row mb-8">
                                                                <label className="required fs-6 fw-semibold mb-2">Activation Date</label>
                                                                <div className="position-relative d-flex align-items-center">

                                                                    <i className="ki-outline ki-calendar-8 fs-2 position-absolute mx-4"></i>


                                                                    <input className="form-control form-control-solid ps-12" placeholder="Pick date range" name="details_activation_date" />

                                                                </div>
                                                            </div>


                                                            <div className="fv-row mb-15">

                                                                <div className="d-flex flex-stack">

                                                                    <div className="me-5">
                                                                        <label className="required fs-6 fw-semibold">Notifications</label>
                                                                        <div className="fs-7 fw-semibold text-muted">Allow Notifications by Phone or Email</div>
                                                                    </div>


                                                                    <div className="d-flex">

                                                                        <label className="form-check form-check-custom form-check-solid me-10">

                                                                            <input className="form-check-input h-20px w-20px" type="checkbox" value="email" name="details_notifications[]" />


                                                                            <span className="form-check-label fw-semibold">Email</span>

                                                                        </label>


                                                                        <label className="form-check form-check-custom form-check-solid">

                                                                            <input className="form-check-input h-20px w-20px" type="checkbox" value="phone" name="details_notifications[]" />


                                                                            <span className="form-check-label fw-semibold">Phone</span>

                                                                        </label>

                                                                    </div>

                                                                </div>

                                                            </div>


                                                            <div className="d-flex flex-stack">
                                                                <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="details-previous">Deal Type</button>
                                                                <button type="button" className="btn btn-lg btn-primary" data-kt-element="details-next">
                                                                    <span className="indicator-label">Financing</span>
                                                                    <span className="indicator-progress">Please wait...
                                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                </button>
                                                            </div>

                                                        </div>

                                                    </div>


                                                    <div data-kt-stepper-element="content">

                                                        <div className="w-100">

                                                            <div className="mb-13">

                                                                <h2 className="mb-3">Finance</h2>


                                                                <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>

                                                            </div>
                                                            <div className="fv-row mb-8">
                                                                <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                                    <span className="required">Setup Budget</span>
                                                                    <span className="ms-1" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="&lt;div className=&#039;p-4 rounded bg-light&#039;&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-4&#039;&gt; &lt;i className=&quot;ki-outline ki-bank fs-3 me-3&quot;&gt;&lt;/i&gt; &lt;div className=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-dark fw-bold mb-2&#039;&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-2&#039;&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted&#039;&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;">
                                                                        <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                                                                    </span>
                                                                </label>

                                                                <div className="position-relative w-lg-250px" id="kt_modal_finance_setup" data-kt-dialer="true" data-kt-dialer-min="50" data-kt-dialer-max="50000" data-kt-dialer-step="100" data-kt-dialer-prefix="$" data-kt-dialer-decimals="2">
                                                                    <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
                                                                        <i className="ki-outline ki-minus-circle fs-1"></i>
                                                                    </button>


                                                                    <input type="text" className="form-control form-control-solid border-0 ps-12" data-kt-dialer-control="input" placeholder="Amount" name="finance_setup" value="$50" />


                                                                    <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
                                                                        <i className="ki-outline ki-plus-circle fs-1"></i>
                                                                    </button>

                                                                </div>

                                                            </div>


                                                            <div className="fv-row mb-8">

                                                                <label className="fs-6 fw-semibold mb-2">Budget Usage</label>


                                                                <div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">

                                                                    <div className="col-md-6 col-lg-12 col-xxl-6">

                                                                        <label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">

                                                                            <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                                <input className="form-check-input" type="radio" name="finance_usage" value="1" />
                                                                            </span>


                                                                            <span className="ms-5">
                                                                                <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Precise Usage</span>
                                                                                <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                                                                            </span>

                                                                        </label>

                                                                    </div>


                                                                    <div className="col-md-6 col-lg-12 col-xxl-6">

                                                                        <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">

                                                                            <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                                <input className="form-check-input" type="radio" name="finance_usage" value="2" />
                                                                            </span>


                                                                            <span className="ms-5">
                                                                                <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Extreme Usage</span>
                                                                                <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                                                                            </span>

                                                                        </label>

                                                                    </div>

                                                                </div>

                                                            </div>


                                                            <div className="fv-row mb-15">

                                                                <div className="d-flex flex-stack">

                                                                    <div className="me-5">
                                                                        <label className="fs-6 fw-semibold">Allow Changes in Budget</label>
                                                                        <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                                                                    </div>


                                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                                        <input className="form-check-input" type="checkbox" value="1" name="finance_allow" />
                                                                        <span className="form-check-label fw-semibold text-muted">Allowed</span>
                                                                    </label>

                                                                </div>

                                                            </div>

                                                            <div className="d-flex flex-stack">
                                                                <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="finance-previous">Project Settings</button>
                                                                <button type="button" className="btn btn-lg btn-primary" data-kt-element="finance-next">
                                                                    <span className="indicator-label">Build Team</span>
                                                                    <span className="indicator-progress">Please wait...
                                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-kt-stepper-element="content">
                                                        <div className="w-100">
                                                            <div className="mb-13">
                                                                <h2 className="mb-3">Deal Created!</h2>
                                                                <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                                                            </div>
                                                            <div className="d-flex flex-center pb-20">
                                                                <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">Create New Deal</button>
                                                                <a href="#" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">View Deal</a>
                                                            </div>
                                                            <div className="text-center px-4">
                                                                <img src="assets/media/illustrations/sketchy-1/20.png" alt="" className="mw-100 mh-300px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Projects
