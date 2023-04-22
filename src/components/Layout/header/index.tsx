import Tippy from '@tippyjs/react'
import React from 'react'
import ModalNotification from './ModalNotification'
import ModalSearch from './ModalSearch'
import ModalUser from './ModalUser'

const Header = () => {
	return (
		<>
			<div id="kt_app_header" className="app-header d-flex flex-column flex-stack">
				<div className="d-flex flex-stack flex-grow-1">
					<div className="app-header-logo d-flex align-items-center ps-lg-12" id="kt_app_header_logo">

						<div id="kt_app_sidebar_toggle" className="app-sidebar-toggle btn btn-sm btn-icon bg-body btn-color-gray-500 btn-active-color-primary w-30px h-30px ms-n2 me-4 d-none d-lg-flex" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize">
							<i className="ki-outline ki-abstract-14 fs-3 mt-1"></i>
						</div>

						<div className="btn btn-icon btn-active-color-primary w-35px h-35px ms-3 me-2 d-flex d-lg-none" id="kt_app_sidebar_mobile_toggle">
							<i className="ki-outline ki-abstract-14 fs-2"></i>
						</div>
						<a href="../../demo39/dist/index.html" className="app-sidebar-logo">
							<img alt="Logo" src="assets/media/logos/demo39.svg" className="h-25px theme-light-show" />
							<img alt="Logo" src="assets/media/logos/demo39-dark.svg" className="h-25px theme-dark-show" />
						</a>

					</div>


					<div className="app-navbar flex-grow-1 justify-content-end" id="kt_app_header_navbar">
						<div className="app-navbar-item d-flex align-items-stretch flex-lg-grow-1">

							<div id="kt_header_search" className="header-search d-flex align-items-center w-lg-350px" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-search-responsive="true" data-kt-menu-trigger="auto" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-start">

								<div data-kt-search-element="toggle" className="search-toggle-mobile d-flex d-lg-none align-items-center">
									<div className="d-flex">
										<i className="ki-outline ki-magnifier fs-1 fs-1"></i>
									</div>
								</div>


								<Tippy
									placement="bottom-start"
									interactive={true}
									trigger="click"
									content={
										<ModalSearch />
									}
								>
									<form data-kt-search-element="form" className="d-none d-lg-block w-100 position-relative mb-5 mb-lg-0" >

										<input type="hidden" />
										<i className="ki-outline ki-magnifier search-icon fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-5"></i>
										<input type="text" className="search-input form-control form-control border-0 h-lg-45px ps-13" name="search" value="" placeholder="Search..." data-kt-search-element="input" />
										<span className="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
											<span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
										</span>
										<span className="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4" data-kt-search-element="clear">
											<i className="ki-outline ki-cross fs-2 fs-lg-1 me-0"></i>
										</span>
									</form>
								</Tippy>


							</div>

						</div>

						<div className="app-navbar-item ms-2 ms-lg-6">
							<Tippy
								placement="bottom-start"
								interactive={true}
								// trigger="click"
								content={
									<ModalNotification />
								}
							>
								<div className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" >
									<i className="ki-outline ki-calendar fs-1"></i>
								</div>
							</Tippy>


						</div>


						<div className="app-navbar-item ms-2 ms-lg-6">

							<div className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
								<i className="ki-outline ki-abstract-26 fs-1"></i>
							</div>

							<div className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px" data-kt-menu="true">

								<div className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10"
								// style="background-image:url('assets/media/misc/menu-header-bg.jpg')"
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


						</div>


						<div className="app-navbar-item ms-2 ms-lg-6">

							<div className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px position-relative" id="kt_drawer_chat_toggle">
								<i className="ki-outline ki-notification-on fs-1"></i>
								<span className="position-absolute top-0 start-100 translate-middle badge badge-circle badge-danger w-15px h-15px ms-n4 mt-3">5</span>
							</div>

						</div>



						<Tippy
							placement="bottom-start"
							interactive={true}
							// trigger="click"
							content={
								<ModalUser />
							}
						>
							<div className="cursor-pointer symbol symbol-circle symbol-30px symbol-lg-45px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
								<img src="assets/media/avatars/300-2.jpg" alt="user" />
							</div>
						</Tippy>
					</div>



					<div className="app-navbar-item ms-2 ms-lg-6 me-lg-6">

						<a href="../../demo39/dist/authentication/layouts/corporate/sign-in.html" className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px">
							<i className="ki-outline ki-exit-right fs-1"></i>
						</a>

					</div>


					<div className="app-navbar-item ms-2 ms-lg-6 ms-n2 me-3 d-flex d-lg-none">
						<div className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" id="kt_app_aside_mobile_toggle">
							<i className="ki-outline ki-burger-menu-2 fs-2"></i>
						</div>
					</div>

				</div>

			</div>

			<div className="app-header-separator"></div>
		</>
	)
}

export default Header