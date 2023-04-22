import React from 'react'

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
								<div data-kt-search-element="content" className="menu menu-sub menu-sub-dropdown py-7 px-7 overflow-hidden w-300px w-md-350px">
									<div data-kt-search-element="wrapper">
										<div data-kt-search-element="results" className="d-none">
											<div className="scroll-y mh-200px mh-lg-350px">
												<h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Users</h3>
												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
													<div className="symbol symbol-40px me-4">
														<img src="assets/media/avatars/300-6.jpg" alt="" />
													</div>
													<div className="d-flex flex-column justify-content-start fw-semibold">
														<span className="fs-6 fw-semibold">Karina Clark</span>
														<span className="fs-7 fw-semibold text-muted">Marketing Manager</span>
													</div>
												</a>
												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
													<div className="symbol symbol-40px me-4">
														<img src="assets/media/avatars/300-2.jpg" alt="" />
													</div>
													<div className="d-flex flex-column justify-content-start fw-semibold">
														<span className="fs-6 fw-semibold">Olivia Bold</span>
														<span className="fs-7 fw-semibold text-muted">Software Engineer</span>
													</div>
												</a>
												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
													<div className="symbol symbol-40px me-4">
														<img src="assets/media/avatars/300-9.jpg" alt="" />
													</div>
													<div className="d-flex flex-column justify-content-start fw-semibold">
														<span className="fs-6 fw-semibold">Ana Clark</span>
														<span className="fs-7 fw-semibold text-muted">UI/UX Designer</span>
													</div>
												</a>
												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<img src="assets/media/avatars/300-14.jpg" alt="" />
													</div>
													<div className="d-flex flex-column justify-content-start fw-semibold">
														<span className="fs-6 fw-semibold">Nick Pitola</span>
														<span className="fs-7 fw-semibold text-muted">Art Director</span>
													</div>

												</a>


												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<img src="assets/media/avatars/300-11.jpg" alt="" />
													</div>


													<div className="d-flex flex-column justify-content-start fw-semibold">
														<span className="fs-6 fw-semibold">Edward Kulnic</span>
														<span className="fs-7 fw-semibold text-muted">System Administrator</span>
													</div>

												</a>


												<h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Customers</h3>


												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<img className="w-20px h-20px" src="assets/media/svg/brand-logos/volicity-9.svg" alt="" />
														</span>
													</div>


													<div className="d-flex flex-column justify-content-start fw-semibold">
														<span className="fs-6 fw-semibold">Company Rbranding</span>
														<span className="fs-7 fw-semibold text-muted">UI Design</span>
													</div>

												</a>


												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<img className="w-20px h-20px" src="assets/media/svg/brand-logos/tvit.svg" alt="" />
														</span>
													</div>


													<div className="d-flex flex-column justify-content-start fw-semibold">
														<span className="fs-6 fw-semibold">Company Re-branding</span>
														<span className="fs-7 fw-semibold text-muted">Web Development</span>
													</div>

												</a>


												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<img className="w-20px h-20px" src="assets/media/svg/misc/infography.svg" alt="" />
														</span>
													</div>


													<div className="d-flex flex-column justify-content-start fw-semibold">
														<span className="fs-6 fw-semibold">Business Analytics App</span>
														<span className="fs-7 fw-semibold text-muted">Administration</span>
													</div>

												</a>


												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<img className="w-20px h-20px" src="assets/media/svg/brand-logos/leaf.svg" alt="" />
														</span>
													</div>


													<div className="d-flex flex-column justify-content-start fw-semibold">
														<span className="fs-6 fw-semibold">EcoLeaf App Launch</span>
														<span className="fs-7 fw-semibold text-muted">Marketing</span>
													</div>

												</a>


												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<img className="w-20px h-20px" src="assets/media/svg/brand-logos/tower.svg" alt="" />
														</span>
													</div>


													<div className="d-flex flex-column justify-content-start fw-semibold">
														<span className="fs-6 fw-semibold">Tower Group Website</span>
														<span className="fs-7 fw-semibold text-muted">Google Adwords</span>
													</div>

												</a>


												<h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Projects</h3>


												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<i className="ki-outline ki-notepad fs-2 text-primary"></i>
														</span>
													</div>


													<div className="d-flex flex-column">
														<span className="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
														<span className="fs-7 fw-semibold text-muted">#45670</span>
													</div>

												</a>


												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<i className="ki-outline ki-frame fs-2 text-primary"></i>
														</span>
													</div>


													<div className="d-flex flex-column">
														<span className="fs-6 fw-semibold">Shopix Mobile App Planning</span>
														<span className="fs-7 fw-semibold text-muted">#45690</span>
													</div>

												</a>


												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<i className="ki-outline ki-message-text-2 fs-2 text-primary"></i>
														</span>
													</div>


													<div className="d-flex flex-column">
														<span className="fs-6 fw-semibold">Finance Monitoring SAAS Discussion</span>
														<span className="fs-7 fw-semibold text-muted">#21090</span>
													</div>

												</a>


												<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<i className="ki-outline ki-profile-circle fs-2 text-primary"></i>
														</span>
													</div>


													<div className="d-flex flex-column">
														<span className="fs-6 fw-semibold">Dashboard Analitics Launch</span>
														<span className="fs-7 fw-semibold text-muted">#34560</span>
													</div>

												</a>

											</div>

										</div>


										<div className="" data-kt-search-element="main">

											<div className="d-flex flex-stack fw-semibold mb-4">

												<span className="text-muted fs-6 me-2">Recently Searched:</span>


												<div className="d-flex" data-kt-search-element="toolbar">

													<div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-2 data-bs-toggle=" title="Show search preferences">
														<i className="ki-outline ki-setting-2 fs-2"></i>
													</div>


													<div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-n1" data-bs-toggle="tooltip" title="Show more search options">
														<i className="ki-outline ki-down fs-2"></i>
													</div>

												</div>

											</div>


											<div className="scroll-y mh-200px mh-lg-325px">

												<div className="d-flex align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<i className="ki-outline ki-laptop fs-2 text-primary"></i>
														</span>
													</div>


													<div className="d-flex flex-column">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">BoomApp by Keenthemes</a>
														<span className="fs-7 text-muted fw-semibold">#45789</span>
													</div>

												</div>


												<div className="d-flex align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<i className="ki-outline ki-chart-simple fs-2 text-primary"></i>
														</span>
													</div>


													<div className="d-flex flex-column">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Kept API Project Meeting</a>
														<span className="fs-7 text-muted fw-semibold">#84050</span>
													</div>

												</div>


												<div className="d-flex align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<i className="ki-outline ki-chart fs-2 text-primary"></i>
														</span>
													</div>


													<div className="d-flex flex-column">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"KPI Monitoring App Launch</a>
														<span className="fs-7 text-muted fw-semibold">#84250</span>
													</div>

												</div>


												<div className="d-flex align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<i className="ki-outline ki-chart-line-down fs-2 text-primary"></i>
														</span>
													</div>


													<div className="d-flex flex-column">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Project Reference FAQ</a>
														<span className="fs-7 text-muted fw-semibold">#67945</span>
													</div>

												</div>


												<div className="d-flex align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<i className="ki-outline ki-sms fs-2 text-primary"></i>
														</span>
													</div>


													<div className="d-flex flex-column">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"FitPro App Development</a>
														<span className="fs-7 text-muted fw-semibold">#84250</span>
													</div>

												</div>


												<div className="d-flex align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<i className="ki-outline ki-bank fs-2 text-primary"></i>
														</span>
													</div>


													<div className="d-flex flex-column">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Shopix Mobile App</a>
														<span className="fs-7 text-muted fw-semibold">#45690</span>
													</div>

												</div>


												<div className="d-flex align-items-center mb-5">

													<div className="symbol symbol-40px me-4">
														<span className="symbol-label bg-light">
															<i className="ki-outline ki-chart-line-down fs-2 text-primary"></i>
														</span>
													</div>


													<div className="d-flex flex-column">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Landing UI Design" Launch</a>
														<span className="fs-7 text-muted fw-semibold">#24005</span>
													</div>

												</div>

											</div>

										</div>


										<div data-kt-search-element="empty" className="text-center d-none">

											<div className="pt-10 pb-10">
												<i className="ki-outline ki-search-list fs-4x opacity-50"></i>
											</div>


											<div className="pb-15 fw-semibold">
												<h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
												<div className="text-muted fs-7">Please try again with a different query</div>
											</div>

										</div>

									</div>


									<form data-kt-search-element="advanced-options-form" className="pt-1 d-none">

										<h3 className="fw-semibold text-dark mb-7">Advanced Search</h3>


										<div className="mb-5">
											<input type="text" className="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
										</div>


										<div className="mb-5">

											<div className="nav-group nav-group-fluid">

												<label>
													<input type="radio" className="btn-check" name="type" value="has" />
													<span className="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
												</label>


												<label>
													<input type="radio" className="btn-check" name="type" value="users" />
													<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Users</span>
												</label>


												<label>
													<input type="radio" className="btn-check" name="type" value="orders" />
													<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Orders</span>
												</label>


												<label>
													<input type="radio" className="btn-check" name="type" value="projects" />
													<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Projects</span>
												</label>

											</div>

										</div>


										<div className="mb-5">
											<input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder="Assigned to" value="" />
										</div>


										<div className="mb-5">
											<input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="Collaborators" value="" />
										</div>


										<div className="mb-5">

											<div className="nav-group nav-group-fluid">

												<label>
													<input type="radio" className="btn-check" name="attachment" value="has" />
													<span className="btn btn-sm btn-color-muted btn-active btn-active-primary">Has attachment</span>
												</label>


												<label>
													<input type="radio" className="btn-check" name="attachment" value="any" />
													<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Any</span>
												</label>

											</div>

										</div>


										<div className="mb-5">
											<select name="timezone" aria-label="Select a Timezone" data-control="select2" data-placeholder="date_period" className="form-select form-select-sm form-select-solid">
												<option value="next">Within the next</option>
												<option value="last">Within the last</option>
												<option value="between">Between</option>
												<option value="on">On</option>
											</select>
										</div>


										<div className="row mb-8">

											<div className="col-6">
												<input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" value="" />
											</div>


											<div className="col-6">
												<select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-placeholder="Period" className="form-select form-select-sm form-select-solid">
													<option value="days">Days</option>
													<option value="weeks">Weeks</option>
													<option value="months">Months</option>
													<option value="years">Years</option>
												</select>
											</div>

										</div>


										<div className="d-flex justify-content-end">
											<button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">Cancel</button>
											<a href="../../demo39/dist/pages/search/horizontal.html" className="btn btn-sm fw-bold btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
										</div>

									</form>


									<form data-kt-search-element="preferences" className="pt-1 d-none">

										<h3 className="fw-semibold text-dark mb-7">Search Preferences</h3>


										<div className="pb-4 border-bottom">
											<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
												<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Projects</span>
												<input className="form-check-input" type="checkbox" value="1" />
											</label>
										</div>


										<div className="py-4 border-bottom">
											<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
												<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Targets</span>
												<input className="form-check-input" type="checkbox" value="1" />
											</label>
										</div>


										<div className="py-4 border-bottom">
											<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
												<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Affiliate Programs</span>
												<input className="form-check-input" type="checkbox" value="1" />
											</label>
										</div>


										<div className="py-4 border-bottom">
											<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
												<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Referrals</span>
												<input className="form-check-input" type="checkbox" value="1" />
											</label>
										</div>


										<div className="py-4 border-bottom">
											<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
												<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Users</span>
												<input className="form-check-input" type="checkbox" value="1" />
											</label>
										</div>


										<div className="d-flex justify-content-end pt-7">
											<button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">Cancel</button>
											<button type="submit" className="btn btn-sm fw-bold btn-primary">Save Changes</button>
										</div>

									</form>

								</div>

							</div>

						</div>

						<div className="app-navbar-item ms-2 ms-lg-6">

							<div className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
								<i className="ki-outline ki-calendar fs-1"></i>
							</div>

							<div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications">

								<div className="d-flex flex-column bgi-no-repeat rounded-top"
								//  style="background-image:url('assets/media/misc/menu-header-bg.jpg')"
								>

									<h3 className="text-white fw-semibold px-9 mt-10 mb-6">Notifications
										<span className="fs-8 opacity-75 ps-3">24 reports</span></h3>


									<ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
										<li className="nav-item">
											<a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
										</li>
										<li className="nav-item">
											<a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
										</li>
										<li className="nav-item">
											<a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
										</li>
									</ul>

								</div>


								<div className="tab-content">

									<div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">

										<div className="scroll-y mh-325px my-5 px-8">

											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-primary">
															<i className="ki-outline ki-abstract-28 fs-2 text-primary"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Alice</a>
														<div className="text-gray-400 fs-7">Phase 1 development</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">1 hr</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-danger">
															<i className="ki-outline ki-information fs-2 text-danger"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">HR Confidential</a>
														<div className="text-gray-400 fs-7">Confidential staff documents</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">2 hrs</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-warning">
															<i className="ki-outline ki-briefcase fs-2 text-warning"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Company HR</a>
														<div className="text-gray-400 fs-7">Corporeate staff profiles</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">5 hrs</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-success">
															<i className="ki-outline ki-abstract-12 fs-2 text-success"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Redux</a>
														<div className="text-gray-400 fs-7">New frontend admin theme</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">2 days</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-primary">
															<i className="ki-outline ki-colors-square fs-2 text-primary"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Breafing</a>
														<div className="text-gray-400 fs-7">Product launch status update</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">21 Jan</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-info">
															<i className="ki-outline ki-picture fs-2 text-info"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Banner Assets</a>
														<div className="text-gray-400 fs-7">Collection of banner images</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">21 Jan</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center">

													<div className="symbol symbol-35px me-4">
														<span className="symbol-label bg-light-warning">
															<i className="ki-outline ki-color-swatch fs-2 text-warning"></i>
														</span>
													</div>


													<div className="mb-0 me-2">
														<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon Assets</a>
														<div className="text-gray-400 fs-7">Collection of SVG icons</div>
													</div>

												</div>


												<span className="badge badge-light fs-8">20 March</span>

											</div>

										</div>


										<div className="py-3 text-center border-top">
											<a href="../../demo39/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
												<i className="ki-outline ki-arrow-right fs-5"></i></a>
										</div>

									</div>


									<div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">

										<div className="d-flex flex-column px-9">

											<div className="pt-10 pb-0">

												<h3 className="text-dark text-center fw-bold">Get Pro Access</h3>


												<div className="text-center text-gray-600 fw-semibold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>


												<div className="text-center mt-5 mb-9">
													<a href="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
												</div>

											</div>


											<div className="text-center px-4">
												<img className="mw-100 mh-200px" alt="image" src="assets/media/illustrations/sketchy-1/1.png" />
											</div>

										</div>

									</div>


									<div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">

										<div className="scroll-y mh-325px my-5 px-8">

											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-success me-4">200 OK</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">New order</a>

												</div>


												<span className="badge badge-light fs-8">Just now</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-danger me-4">500 ERR</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">New customer</a>

												</div>


												<span className="badge badge-light fs-8">2 hrs</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-success me-4">200 OK</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Payment process</a>

												</div>


												<span className="badge badge-light fs-8">5 hrs</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-warning me-4">300 WRN</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Search query</a>

												</div>


												<span className="badge badge-light fs-8">2 days</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-success me-4">200 OK</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">API connection</a>

												</div>


												<span className="badge badge-light fs-8">1 week</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-success me-4">200 OK</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Database restore</a>

												</div>


												<span className="badge badge-light fs-8">Mar 5</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-warning me-4">300 WRN</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">System update</a>

												</div>


												<span className="badge badge-light fs-8">May 15</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-warning me-4">300 WRN</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Server OS update</a>

												</div>


												<span className="badge badge-light fs-8">Apr 3</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-warning me-4">300 WRN</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">API rollback</a>

												</div>


												<span className="badge badge-light fs-8">Jun 30</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-danger me-4">500 ERR</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Refund process</a>

												</div>


												<span className="badge badge-light fs-8">Jul 10</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-danger me-4">500 ERR</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Withdrawal process</a>

												</div>


												<span className="badge badge-light fs-8">Sep 10</span>

											</div>


											<div className="d-flex flex-stack py-4">

												<div className="d-flex align-items-center me-2">

													<span className="w-70px badge badge-light-danger me-4">500 ERR</span>


													<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Mail tasks</a>

												</div>


												<span className="badge badge-light fs-8">Dec 10</span>

											</div>

										</div>


										<div className="py-3 text-center border-top">
											<a href="../../demo39/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
												<i className="ki-outline ki-arrow-right fs-5"></i></a>
										</div>

									</div>

								</div>

							</div>


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


						<div className="app-navbar-item ms-2 ms-lg-6" id="kt_header_user_menu_toggle">

							<div className="cursor-pointer symbol symbol-circle symbol-30px symbol-lg-45px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
								<img src="assets/media/avatars/300-2.jpg" alt="user" />
							</div>

							<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">

								<div className="menu-item px-3">
									<div className="menu-content d-flex align-items-center px-3">

										<div className="symbol symbol-50px me-5">
											<img alt="Logo" src="assets/media/avatars/300-2.jpg" />
										</div>


										<div className="d-flex flex-column">
											<div className="fw-bold d-flex align-items-center fs-5">Max Smith
												<span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
											<a href="#" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
										</div>

									</div>
								</div>


								<div className="separator my-2"></div>


								<div className="menu-item px-5">
									<a href="../../demo39/dist/account/overview.html" className="menu-link px-5">My Profile</a>
								</div>


								<div className="menu-item px-5">
									<a href="../../demo39/dist/apps/projects/list.html" className="menu-link px-5">
										<span className="menu-text">My Projects</span>
										<span className="menu-badge">
											<span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
										</span>
									</a>
								</div>


								<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
									<a href="#" className="menu-link px-5">
										<span className="menu-title">My Subscription</span>
										<span className="menu-arrow"></span>
									</a>

									<div className="menu-sub menu-sub-dropdown w-175px py-4">

										<div className="menu-item px-3">
											<a href="../../demo39/dist/account/referrals.html" className="menu-link px-5">Referrals</a>
										</div>


										<div className="menu-item px-3">
											<a href="../../demo39/dist/account/billing.html" className="menu-link px-5">Billing</a>
										</div>


										<div className="menu-item px-3">
											<a href="../../demo39/dist/account/statements.html" className="menu-link px-5">Payments</a>
										</div>


										<div className="menu-item px-3">
											<a href="../../demo39/dist/account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
												<span className="ms-2" data-bs-toggle="tooltip" title="View your statements">
													<i className="ki-outline ki-information fs-7"></i>
												</span></a>
										</div>


										<div className="separator my-2"></div>


										<div className="menu-item px-3">
											<div className="menu-content px-3">
												<label className="form-check form-switch form-check-custom form-check-solid">
													<input className="form-check-input w-30px h-20px" type="checkbox" value="1" name="notifications" />
													<span className="form-check-label text-muted fs-7">Notifications</span>
												</label>
											</div>
										</div>

									</div>

								</div>


								<div className="menu-item px-5">
									<a href="../../demo39/dist/account/statements.html" className="menu-link px-5">My Statements</a>
								</div>


								<div className="separator my-2"></div>


								<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
									<a href="#" className="menu-link px-5">
										<span className="menu-title position-relative">Mode
											<span className="ms-5 position-absolute translate-middle-y top-50 end-0">
												<i className="ki-outline ki-night-day theme-light-show fs-2"></i>
												<i className="ki-outline ki-moon theme-dark-show fs-2"></i>
											</span></span>
									</a>

									<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">

										<div className="menu-item px-3 my-0">
											<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
												<span className="menu-icon" data-kt-element="icon">
													<i className="ki-outline ki-night-day fs-2"></i>
												</span>
												<span className="menu-title">Light</span>
											</a>
										</div>


										<div className="menu-item px-3 my-0">
											<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
												<span className="menu-icon" data-kt-element="icon">
													<i className="ki-outline ki-moon fs-2"></i>
												</span>
												<span className="menu-title">Dark</span>
											</a>
										</div>


										<div className="menu-item px-3 my-0">
											<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
												<span className="menu-icon" data-kt-element="icon">
													<i className="ki-outline ki-screen fs-2"></i>
												</span>
												<span className="menu-title">System</span>
											</a>
										</div>

									</div>

								</div>


								<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
									<a href="#" className="menu-link px-5">
										<span className="menu-title position-relative">Language
											<span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
												<img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" /></span></span>
									</a>

									<div className="menu-sub menu-sub-dropdown w-175px py-4">

										<div className="menu-item px-3">
											<a href="../../demo39/dist/account/settings.html" className="menu-link d-flex px-5 active">
												<span className="symbol symbol-20px me-4">
													<img className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
												</span>English</a>
										</div>


										<div className="menu-item px-3">
											<a href="../../demo39/dist/account/settings.html" className="menu-link d-flex px-5">
												<span className="symbol symbol-20px me-4">
													<img className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
												</span>Spanish</a>
										</div>


										<div className="menu-item px-3">
											<a href="../../demo39/dist/account/settings.html" className="menu-link d-flex px-5">
												<span className="symbol symbol-20px me-4">
													<img className="rounded-1" src="assets/media/flags/germany.svg" alt="" />
												</span>German</a>
										</div>


										<div className="menu-item px-3">
											<a href="../../demo39/dist/account/settings.html" className="menu-link d-flex px-5">
												<span className="symbol symbol-20px me-4">
													<img className="rounded-1" src="assets/media/flags/japan.svg" alt="" />
												</span>Japanese</a>
										</div>


										<div className="menu-item px-3">
											<a href="../../demo39/dist/account/settings.html" className="menu-link d-flex px-5">
												<span className="symbol symbol-20px me-4">
													<img className="rounded-1" src="assets/media/flags/france.svg" alt="" />
												</span>French</a>
										</div>

									</div>

								</div>


								<div className="menu-item px-5 my-1">
									<a href="../../demo39/dist/account/settings.html" className="menu-link px-5">Account Settings</a>
								</div>


								<div className="menu-item px-5">
									<a href="../../demo39/dist/authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
								</div>

							</div>


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
			</div>
		</>
	)
}

export default Header