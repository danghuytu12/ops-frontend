import React from 'react'
import avatars from "../../../_metronic/assets/media/avatars/300-1.jpg";
import avatarDefault from "../../../_metronic/assets/media/avatars/300-6.jpg";

const OverviewProfile = () => {
	return (
		<div>
			<div className="d-flex flex-column flex-root app-root" id="kt_app_root">
				<div className="app-page flex-column flex-column-fluid" id="kt_app_page">
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
																<img src={avatarDefault} alt="" />
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
																<img src={avatarDefault} alt="" />
															</div>


															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Ana Clark</span>
																<span className="fs-7 fw-semibold text-muted">UI/UX Designer</span>
															</div>

														</a>


														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">

															<div className="symbol symbol-40px me-4">
																<img src={avatarDefault} alt="" />
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
										//  style="background-image:url('assets/media/misc/menu-header-bg.jpg')"
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


					<div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">

						<div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">

							<div id="kt_app_sidebar_wrapper" className="app-sidebar-wrapper hover-scroll-y my-5 my-lg-2" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_header" data-kt-scroll-wrappers="#kt_app_sidebar_wrapper" data-kt-scroll-offset="5px">

								<div id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false" className="app-sidebar-menu-primary menu menu-column menu-rounded menu-sub-indention menu-state-bullet-primary px-6 mb-5">

									<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

										<span className="menu-link">
											<span className="menu-icon">
												<i className="ki-outline ki-home-2 fs-2"></i>
											</span>
											<span className="menu-title">Dashboards</span>
											<span className="menu-arrow"></span>
										</span>


										<div className="menu-sub menu-sub-accordion">

											<div className="menu-item">

												<a className="menu-link" href="../../demo39/dist/index.html">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Default</span>
												</a>

											</div>


											<div className="menu-item">

												<a className="menu-link" href="../../demo39/dist/dashboards/ecommerce.html">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">eCommerce</span>
												</a>

											</div>


											<div className="menu-item">

												<a className="menu-link" href="../../demo39/dist/dashboards/projects.html">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Projects</span>
												</a>

											</div>


											<div className="menu-item">

												<a className="menu-link" href="../../demo39/dist/dashboards/online-courses.html">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Online Courses</span>
												</a>

											</div>


											<div className="menu-item">

												<a className="menu-link" href="../../demo39/dist/dashboards/marketing.html">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Marketing</span>
												</a>

											</div>

											<div className="menu-inner flex-column collapse" id="kt_app_sidebar_menu_dashboards_collapse">

												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/dashboards/bidding.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Bidding</span>
													</a>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/dashboards/pos.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">POS System</span>
													</a>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/dashboards/call-center.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Call Center</span>
													</a>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/dashboards/logistics.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Logistics</span>
													</a>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/dashboards/website-analytics.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Website Analytics</span>
													</a>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/dashboards/finance-performance.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Finance Performance</span>
													</a>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/dashboards/store-analytics.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Store Analytics</span>
													</a>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/dashboards/social.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Social</span>
													</a>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/dashboards/delivery.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Delivery</span>
													</a>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/dashboards/crypto.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Crypto</span>
													</a>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/dashboards/school.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">School</span>
													</a>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/dashboards/podcast.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Podcast</span>
													</a>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="../../demo39/dist/landing.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Landing</span>
													</a>

												</div>

											</div>
											<div className="menu-item">
												<div className="menu-content">
													<a className="btn btn-flex btn-color-primary d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_dashboards_collapse" data-kt-toggle-text="Show Less">
														<span data-kt-toggle-text-target="true">Show 12 More</span>
														<i className="ki-outline ki-minus-square toggle-on fs-2 me-0"></i>
														<i className="ki-outline ki-plus-square toggle-off fs-2 me-0"></i>
													</a>
												</div>
											</div>
										</div>

									</div>


									<div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">

										<span className="menu-link">
											<span className="menu-icon">
												<i className="ki-outline ki-gift fs-2"></i>
											</span>
											<span className="menu-title">Pages</span>
											<span className="menu-arrow"></span>
										</span>


										<div className="menu-sub menu-sub-accordion">

											<div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">User Profile</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link active" href="../../demo39/dist/pages/user-profile/overview.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Overview</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/user-profile/projects.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Projects</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/user-profile/campaigns.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Campaigns</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/user-profile/documents.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Documents</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/user-profile/followers.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Followers</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/user-profile/activity.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Activity</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Account</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/account/overview.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Overview</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/account/settings.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Settings</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/account/security.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Security</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/account/activity.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Activity</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/account/billing.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Billing</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/account/statements.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Statements</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/account/referrals.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Referrals</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/account/api-keys.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">API Keys</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/account/logs.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Logs</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Authentication</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Corporate Layout</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion menu-active-bg">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/corporate/sign-in.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Sign-in</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/corporate/sign-up.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Sign-up</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/corporate/two-factor.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Two-Factor</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/corporate/reset-password.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Reset Password</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/corporate/new-password.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">New Password</span>
																</a>

															</div>

														</div>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Overlay Layout</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion menu-active-bg">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/overlay/sign-in.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Sign-in</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/overlay/sign-up.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Sign-up</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/overlay/two-factor.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Two-Factor</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/overlay/reset-password.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Reset Password</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/overlay/new-password.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">New Password</span>
																</a>

															</div>

														</div>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Creative Layout</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion menu-active-bg">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/creative/sign-in.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Sign-in</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/creative/sign-up.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Sign-up</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/creative/two-factor.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Two-Factor</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/creative/reset-password.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Reset Password</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/creative/new-password.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">New Password</span>
																</a>

															</div>

														</div>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Fancy Layout</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion menu-active-bg">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/fancy/sign-in.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Sign-in</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/fancy/sign-up.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Sign-up</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/fancy/two-factor.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Two-Factor</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/fancy/reset-password.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Reset Password</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/layouts/fancy/new-password.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">New Password</span>
																</a>

															</div>

														</div>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Email Templates</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion menu-active-bg">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/email/welcome-message.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Welcome Message</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/email/reset-password.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Reset Password</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/email/subscription-confirmed.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Subscription Confirmed</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/email/card-declined.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Credit Card Declined</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/email/promo-1.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Promo 1</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/email/promo-2.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Promo 2</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/authentication/email/promo-3.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Promo 3</span>
																</a>

															</div>

														</div>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/authentication/extended/multi-steps-sign-up.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Multi-steps Sign-up</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/authentication/general/welcome.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Welcome Message</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/authentication/general/verify-email.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Verify Email</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/authentication/general/coming-soon.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Coming Soon</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/authentication/general/password-confirmation.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Password Confirmation</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/authentication/general/account-deactivated.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Account Deactivation</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/authentication/general/error-404.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Error 404</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/authentication/general/error-500.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Error 500</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Corporate</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/about.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">About</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/team.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Our Team</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/contact.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Contact Us</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/licenses.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Licenses</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/sitemap.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Sitemap</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Social</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/social/feeds.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Feeds</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/social/activity.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Activty</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/social/followers.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Followers</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/social/settings.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Settings</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Blog</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion menu-active-bg">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/blog/home.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Blog Home</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/blog/post.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Blog Post</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">FAQ</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion menu-active-bg">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/faq/classNameic.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">FAQ classNameic</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/faq/extended.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">FAQ Extended</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Pricing</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion menu-active-bg">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/pricing/column.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Column Pricing</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/pricing/table.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Table Pricing</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Careers</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/careers/list.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Careers List</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/pages/careers/apply.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Careers Apply</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Widgets</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/widgets/lists.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Lists</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/widgets/statistics.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Statistics</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/widgets/charts.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Charts</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/widgets/mixed.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Mixed</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/widgets/tables.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Tables</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/widgets/feeds.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Feeds</span>
														</a>

													</div>

												</div>

											</div>

										</div>

									</div>


									<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

										<span className="menu-link">
											<span className="menu-icon">
												<i className="ki-outline ki-abstract-26 fs-2"></i>
											</span>
											<span className="menu-title">Apps</span>
											<span className="menu-arrow"></span>
										</span>


										<div className="menu-sub menu-sub-accordion">

											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Projects</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/projects/list.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">My Projects</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/projects/project.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">View Project</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/projects/targets.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Targets</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/projects/budget.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Budget</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/projects/users.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Users</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/projects/files.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Files</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/projects/activity.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Activity</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/projects/settings.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Settings</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">eCommerce</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Catalog</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/catalog/products.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Products</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/catalog/categories.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Categories</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/catalog/add-product.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Add Product</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/catalog/edit-product.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Edit Product</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/catalog/add-category.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Add Category</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/catalog/edit-category.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Edit Category</span>
																</a>

															</div>

														</div>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Sales</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/sales/listing.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Orders Listing</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/sales/details.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Order Details</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/sales/add-order.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Add Order</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/sales/edit-order.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Edit Order</span>
																</a>

															</div>

														</div>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Customers</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/customers/listing.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Customer Listing</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/customers/details.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Customer Details</span>
																</a>

															</div>

														</div>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Reports</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/reports/view.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Products Viewed</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/reports/sales.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Sales</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/reports/returns.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Returns</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/reports/customer-orders.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Customer Orders</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/ecommerce/reports/shipping.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Shipping</span>
																</a>

															</div>

														</div>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/ecommerce/settings.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Settings</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Contacts</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/contacts/getting-started.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Getting Started</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/contacts/add-contact.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Add Contact</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/contacts/edit-contact.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Edit Contact</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/contacts/view-contact.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">View Contact</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Support Center</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/support-center/overview.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Overview</span>
														</a>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Tickets</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/support-center/tickets/list.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Tickets List</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/support-center/tickets/view.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">View Ticket</span>
																</a>

															</div>

														</div>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Tutorials</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/support-center/tutorials/list.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Tutorials List</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/support-center/tutorials/post.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Tutorial Post</span>
																</a>

															</div>

														</div>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/support-center/faq.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">FAQ</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/support-center/licenses.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Licenses</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/support-center/contact.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Contact Us</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">User Management</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Users</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/user-management/users/list.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Users List</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/user-management/users/view.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">View User</span>
																</a>

															</div>

														</div>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Roles</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/user-management/roles/list.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Roles List</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/user-management/roles/view.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">View Role</span>
																</a>

															</div>

														</div>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/user-management/permissions.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Permissions</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Customers</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/customers/getting-started.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Getting Started</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/customers/list.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Customer Listing</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/customers/view.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Customer Details</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Subscription</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/subscriptions/getting-started.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Getting Started</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/subscriptions/list.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Subscription List</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/subscriptions/add.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Add Subscription</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/subscriptions/view.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">View Subscription</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Invoice Manager</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">View Invoices</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion menu-active-bg">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/invoices/view/invoice-1.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Invoice 1</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/invoices/view/invoice-2.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Invoice 2</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/apps/invoices/view/invoice-3.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Invoice 3</span>
																</a>

															</div>

														</div>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/invoices/create.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Create Invoice</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">File Manager</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/file-manager/folders.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Folders</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/file-manager/files.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Files</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/file-manager/blank.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Blank Directory</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/file-manager/settings.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Settings</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Inbox</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/inbox/listing.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Messages</span>
															<span className="menu-badge">
																<span className="badge badge-success">3</span>
															</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/inbox/compose.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Compose</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/inbox/reply.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">View & Reply</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Chat</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/chat/private.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Private Chat</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/chat/group.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Group Chat</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/apps/chat/drawer.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Drawer Chat</span>
														</a>

													</div>

												</div>

											</div>


											<div className="menu-item">

												<a className="menu-link" href="../../demo39/dist/apps/calendar.html">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Calendar</span>
												</a>

											</div>

										</div>

									</div>


									<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

										<span className="menu-link">
											<span className="menu-icon">
												<i className="ki-outline ki-abstract-35 fs-2"></i>
											</span>
											<span className="menu-title">Utilities</span>
											<span className="menu-arrow"></span>
										</span>


										<div className="menu-sub menu-sub-accordion">

											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Modals</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion menu-active-bg">

													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">General</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion menu-active-bg">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/general/invite-friends.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Invite Friends</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/general/view-users.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">View Users</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/general/select-users.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Select Users</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/general/upgrade-plan.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Upgrade Plan</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/general/share-earn.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Share & Earn</span>
																</a>

															</div>

														</div>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Forms</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion menu-active-bg">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/forms/new-target.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">New Target</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/forms/new-card.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">New Card</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/forms/new-address.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">New Address</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/forms/create-api-key.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Create API Key</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/forms/bidding.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Bidding</span>
																</a>

															</div>

														</div>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Wizards</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion menu-active-bg">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/create-app.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Create App</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/create-campaign.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Create Campaign</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/create-account.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Create Business Acc</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/create-project.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Create Project</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/top-up-wallet.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Top Up Wallet</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/offer-a-deal.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Offer a Deal</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/two-factor-authentication.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Two Factor Auth</span>
																</a>

															</div>

														</div>

													</div>


													<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

														<span className="menu-link">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Search</span>
															<span className="menu-arrow"></span>
														</span>


														<div className="menu-sub menu-sub-accordion menu-active-bg">

															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/search/users.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Users</span>
																</a>

															</div>


															<div className="menu-item">

																<a className="menu-link" href="../../demo39/dist/utilities/modals/search/select-location.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Select Location</span>
																</a>

															</div>

														</div>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Wizards</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion menu-active-bg">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/wizards/horizontal.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Horizontal</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/wizards/vertical.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Vertical</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/wizards/two-factor-authentication.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Two Factor Auth</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/wizards/create-app.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Create App</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/wizards/create-campaign.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Create Campaign</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/wizards/create-account.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Create Account</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/wizards/create-project.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Create Project</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/top-up-wallet.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Top Up Wallet</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/wizards/offer-a-deal.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Offer a Deal</span>
														</a>

													</div>

												</div>

											</div>


											<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

												<span className="menu-link">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Search</span>
													<span className="menu-arrow"></span>
												</span>


												<div className="menu-sub menu-sub-accordion menu-active-bg">

													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/search/horizontal.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Horizontal</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/search/vertical.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Vertical</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/search/users.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Users</span>
														</a>

													</div>


													<div className="menu-item">

														<a className="menu-link" href="../../demo39/dist/utilities/search/select-location.html">
															<span className="menu-bullet">
																<span className="bullet bullet-dot"></span>
															</span>
															<span className="menu-title">Location</span>
														</a>

													</div>

												</div>

											</div>

										</div>

									</div>


									<div data-kt-menu-trigger="click" className="menu-item menu-accordion">

										<span className="menu-link">
											<span className="menu-icon">
												<i className="ki-outline ki-briefcase fs-2"></i>
											</span>
											<span className="menu-title">Help</span>
											<span className="menu-arrow"></span>
										</span>


										<div className="menu-sub menu-sub-accordion">

											<div className="menu-item">

												<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" title="Check out over 200 in-house components" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Components</span>
												</a>

											</div>


											<div className="menu-item">

												<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Documentation</span>
												</a>

											</div>


											<div className="menu-item">

												<a className="menu-link" href="https://preview.keenthemes.com/metronic8/demo39/layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Layout Builder</span>
												</a>

											</div>


											<div className="menu-item">

												<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank">
													<span className="menu-bullet">
														<span className="bullet bullet-dot"></span>
													</span>
													<span className="menu-title">Changelog v8.1.8</span>
												</a>

											</div>

										</div>

									</div>

								</div>


								<div className="app-sidebar-menu-secondary menu menu-rounded menu-column ps-5 pe-6">

									<div className="menu-item menu-labels">
										<div className="menu-content d-flex flex-stack fw-bold text-gray-600 text-uppercase fs-7">
											<span className="menu-heading ps-1">Labels</span>

											<a className="menu-btn ps-2" href="../../demo39/dist/authentication/layouts/corporate/sign-in.html">
												<i className="ki-outline ki-plus-square fs-2 text-success"></i>
											</a>

										</div>
									</div>


									<div className="app-sidebar-separator separator mx-5 mt-2 mb-2"></div>


									<div className="menu-item">

										<a className="menu-link" href="../../demo39/dist/apps/projects/project.html">

											<span className="menu-icon ps-2">
												<span className="bullet bullet-dot h-10px w-10px bg-primary"></span>
											</span>


											<span className="menu-title text-gray-700 fw-bold fs-6">Google Ads</span>


											<span className="menu-badge">
												<span className="badge badge-secondary">6</span>
											</span>

										</a>

									</div>


									<div className="menu-item">

										<a className="menu-link" href="../../demo39/dist/apps/projects/project.html">

											<span className="menu-icon ps-2">
												<span className="bullet bullet-dot h-10px w-10px bg-success"></span>
											</span>


											<span className="menu-title text-gray-700 fw-bold fs-6">AirStoke App</span>


											<span className="menu-badge">
												<span className="badge badge-secondary">2</span>
											</span>

										</a>

									</div>


									<div className="menu-item">

										<a className="menu-link" href="../../demo39/dist/apps/projects/project.html">

											<span className="menu-icon ps-2">
												<span className="bullet bullet-dot h-10px w-10px bg-warning"></span>
											</span>


											<span className="menu-title text-gray-700 fw-bold fs-6">Internal Tasks</span>


											<span className="menu-badge">
												<span className="badge badge-secondary">37</span>
											</span>

										</a>

									</div>


									<div className="menu-item">

										<a className="menu-link" href="../../demo39/dist/apps/projects/project.html">

											<span className="menu-icon ps-2">
												<span className="bullet bullet-dot h-10px w-10px bg-danger"></span>
											</span>


											<span className="menu-title text-gray-700 fw-bold fs-6">Fitnes App</span>


											<span className="menu-badge">
												<span className="badge badge-secondary">4</span>
											</span>

										</a>

									</div>


									<div className="menu-inner flex-column collapse" id="kt_app_sidebar_menu_projects_collapse">

										<div className="menu-item">

											<a className="menu-link" href="../../demo39/dist/apps/projects/project.html">

												<span className="menu-icon ps-2">
													<span className="bullet bullet-dot h-10px w-10px bg-info"></span>
												</span>


												<span className="menu-title text-gray-700 fw-bold fs-6">Oppo CRM</span>


												<span className="menu-badge">
													<span className="badge badge-secondary">12</span>
												</span>

											</a>

										</div>


										<div className="menu-item">

											<a className="menu-link" href="../../demo39/dist/apps/projects/project.html">

												<span className="menu-icon ps-2">
													<span className="bullet bullet-dot h-10px w-10px bg-warning"></span>
												</span>


												<span className="menu-title text-gray-700 fw-bold fs-6">Finance Dispatch</span>


												<span className="menu-badge">
													<span className="badge badge-secondary">25</span>
												</span>

											</a>

										</div>

									</div>


									<div className="menu-item">

										<a className="menu-link menu-collapse-toggle toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_projects_collapse" data-kt-toggle-text="Show less">
											<span className="menu-icon ps-2">
												<i className="ki-outline ki-down toggle-off fs-4 text-gray-700 me-0"></i>
												<i className="ki-outline ki-up toggle-on fs-4 text-gray-700 me-0"></i>
											</span>

											<span className="menu-title text-gray-600 fw-semibold" data-kt-toggle-text-target="true">Show more</span>

										</a>

									</div>

								</div>

							</div>

						</div>


						<div className="app-main flex-column flex-row-fluid" id="kt_app_main">

							<div className="d-flex flex-column flex-column-fluid">

								<div id="kt_app_toolbar" className="app-toolbar pt-6 pb-2">

									<div id="kt_app_toolbar_container" className="app-container container-fluid d-flex align-items-stretch">

										<div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">

											<div className="page-title d-flex flex-column justify-content-center gap-1 me-3">

												<h1 className="page-heading d-flex flex-column justify-content-center text-dark fw-bold fs-3 m-0">Overview</h1>


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

										<div className="card mb-5 mb-xxl-8">
											<div className="card-body pt-9 pb-0">

												<div className="d-flex flex-wrap flex-sm-nowrap">

													<div className="me-7 mb-4">
														<div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
															<img src={avatars} alt="image" />
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
																	{/* <div className="bg-success rounded h-5px" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div> */}
																</div>
															</div>

														</div>

													</div>

												</div>


												<ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">

													<li className="nav-item mt-2">
														<a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="../../demo39/dist/pages/user-profile/overview.html">Overview</a>
													</li>


													<li className="nav-item mt-2">
														<a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo39/dist/pages/user-profile/projects.html">Projects</a>
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


										<div className="row g-5 g-xxl-8">

											<div className="col-xl-6">

												<div className="card mb-5 mb-xxl-8">

													<div className="card-body pb-0">

														<div className="d-flex align-items-center">

															<div className="d-flex align-items-center flex-grow-1">

																<div className="symbol symbol-45px me-5">
																	<img src={avatarDefault} alt="" />
																</div>


																<div className="d-flex flex-column">
																	<a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Grace Green</a>
																	<span className="text-gray-400 fw-bold">PHP, SQLite, Artisan CLI</span>
																</div>

															</div>


															<div className="my-0">
																<button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-category fs-6"></i>
																</button>

																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">

																	<div className="menu-item px-3">
																		<div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
																	</div>


																	<div className="separator mb-3 opacity-75"></div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">New Ticket</a>
																	</div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">New Customer</a>
																	</div>


																	<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">

																		<a href="#" className="menu-link px-3">
																			<span className="menu-title">New Group</span>
																			<span className="menu-arrow"></span>
																		</a>


																		<div className="menu-sub menu-sub-dropdown w-175px py-4">

																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Admin Group</a>
																			</div>


																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Staff Group</a>
																			</div>


																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Member Group</a>
																			</div>

																		</div>

																	</div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">New Contact</a>
																	</div>


																	<div className="separator mt-3 opacity-75"></div>


																	<div className="menu-item px-3">
																		<div className="menu-content px-3 py-3">
																			<a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
																		</div>
																	</div>

																</div>

															</div>

														</div>


														<form id="kt_forms_widget_1_form" className="ql-quil ql-quil-plain pb-3">

															<div id="kt_forms_widget_1_editor" className="py-6"></div>

															<div className="separator"></div>

															<div id="kt_forms_widget_1_editor_toolbar" className="ql-toolbar d-flex flex-stack py-2">
																<div className="me-2">
																	<span className="ql-formats ql-size ms-0">
																		<select className="ql-size w-75px"></select>
																	</span>
																	<span className="ql-formats">
																		<button className="ql-bold"></button>
																		<button className="ql-italic"></button>
																		<button className="ql-underline"></button>
																		<button className="ql-strike"></button>
																		<button className="ql-image"></button>
																		<button className="ql-link"></button>
																		<button className="ql-clean"></button>
																	</span>
																</div>
																<div className="me-n3">
																	<span className="btn btn-icon btn-sm btn-active-color-primary">
																		<i className="ki-outline ki-paper-clip fs-2"></i>
																	</span>
																	<span className="btn btn-icon btn-sm btn-active-color-primary">
																		<i className="ki-outline ki-geolocation fs-2"></i>
																	</span>
																</div>
															</div>

														</form>

													</div>

												</div>


												<div className="card mb-5 mb-xxl-8">

													<div className="card-body pb-0">

														<div className="d-flex align-items-center mb-5">

															<div className="d-flex align-items-center flex-grow-1">

																<div className="symbol symbol-45px me-5">
																	<img src={avatarDefault} alt="" />
																</div>


																<div className="d-flex flex-column">
																	<a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Nick Logan</a>
																	<span className="text-gray-400 fw-bold">PHP, SQLite, Artisan CLI</span>
																</div>

															</div>


															<div className="my-0">
																<button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-category fs-6"></i>
																</button>

																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">

																	<div className="menu-item px-3">
																		<div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
																	</div>


																	<div className="separator mb-3 opacity-75"></div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">New Ticket</a>
																	</div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">New Customer</a>
																	</div>


																	<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">

																		<a href="#" className="menu-link px-3">
																			<span className="menu-title">New Group</span>
																			<span className="menu-arrow"></span>
																		</a>


																		<div className="menu-sub menu-sub-dropdown w-175px py-4">

																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Admin Group</a>
																			</div>


																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Staff Group</a>
																			</div>


																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Member Group</a>
																			</div>

																		</div>

																	</div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">New Contact</a>
																	</div>


																	<div className="separator mt-3 opacity-75"></div>


																	<div className="menu-item px-3">
																		<div className="menu-content px-3 py-3">
																			<a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
																		</div>
																	</div>

																</div>

															</div>

														</div>


														<div className="mb-5">

															<p className="text-gray-800 fw-normal mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</p>


															<div className="d-flex align-items-center mb-5">
																<a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
																	<i className="ki-outline ki-message-text-2 fs-2"></i>120</a>
																<a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
																	<i className="ki-outline ki-heart fs-2"></i>15</a>
															</div>

														</div>


														<div className="separator mb-4"></div>


														<form className="position-relative mb-6">
															<textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" placeholder="Reply.."></textarea>
															<div className="position-absolute top-0 end-0 me-n5">
																<span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
																	<i className="ki-outline ki-paper-clip fs-2 mb-3"></i>
																</span>
																<span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
																	<i className="ki-outline ki-geolocation fs-2 mb-3"></i>
																</span>
															</div>
														</form>

													</div>

												</div>


												<div className="card mb-5 mb-xxl-8">

													<div className="card-body pb-0">

														<div className="d-flex align-items-center mb-3">

															<div className="d-flex align-items-center flex-grow-1">

																<div className="symbol symbol-45px me-5">
																	<img src={avatarDefault} alt="" />
																</div>


																<div className="d-flex flex-column">
																	<a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Carles Nilson</a>
																	<span className="text-gray-400 fw-bold">Yestarday at 5:06 PM</span>
																</div>

															</div>


															<div className="my-0">
																<button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-category fs-6"></i>
																</button>

																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">

																	<div className="menu-item px-3">
																		<div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
																	</div>


																	<div className="separator mb-3 opacity-75"></div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">New Ticket</a>
																	</div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">New Customer</a>
																	</div>


																	<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">

																		<a href="#" className="menu-link px-3">
																			<span className="menu-title">New Group</span>
																			<span className="menu-arrow"></span>
																		</a>


																		<div className="menu-sub menu-sub-dropdown w-175px py-4">

																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Admin Group</a>
																			</div>


																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Staff Group</a>
																			</div>


																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Member Group</a>
																			</div>

																		</div>

																	</div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">New Contact</a>
																	</div>


																	<div className="separator mt-3 opacity-75"></div>


																	<div className="menu-item px-3">
																		<div className="menu-content px-3 py-3">
																			<a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
																		</div>
																	</div>

																</div>

															</div>

														</div>


														<div className="mb-7">

															<div className="text-gray-800 mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</div>


															<div className="d-flex align-items-center mb-5">
																<a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
																	<i className="ki-outline ki-message-text-2 fs-2"></i>12</a>
																<a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
																	<i className="ki-outline ki-heart fs-2"></i>150</a>
															</div>

														</div>


														<div className="mb-7">

															<div className="d-flex mb-5">

																<div className="symbol symbol-45px me-5">
																	<img src={avatarDefault} alt="" />
																</div>


																<div className="d-flex flex-column flex-row-fluid">

																	<div className="d-flex align-items-center flex-wrap mb-1">
																		<a href="#" className="text-gray-800 text-hover-primary fw-bold me-2">Alice Danchik</a>
																		<span className="text-gray-400 fw-semibold fs-7">1 day</span>
																		<a href="#" className="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
																	</div>


																	<span className="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>

																</div>

															</div>


															<div className="d-flex">

																<div className="symbol symbol-45px me-5">
																	<img src={avatarDefault} alt="" />
																</div>


																<div className="d-flex flex-column flex-row-fluid">

																	<div className="d-flex align-items-center flex-wrap mb-1">
																		<a href="#" className="text-gray-800 text-hover-primary fw-bold me-2">Harris Bold</a>
																		<span className="text-gray-400 fw-semibold fs-7">2 days</span>
																		<a href="#" className="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
																	</div>


																	<span className="text-gray-800 fs-7 fw-normal pt-1">Outlines keep you honest. They stop you from indulging in poorly</span>

																</div>

															</div>

														</div>


														<div className="separator mb-4"></div>


														<form className="position-relative mb-6">
															<textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" placeholder="Reply.."></textarea>
															<div className="position-absolute top-0 end-0 me-n5">
																<span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
																	<i className="ki-outline ki-paper-clip fs-2 mb-3"></i>
																</span>
																<span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
																	<i className="ki-outline ki-geolocation fs-2 mb-3"></i>
																</span>
															</div>
														</form>

													</div>

												</div>


												<div className="card mb-5 mb-xxl-8">

													<div className="card-body pb-0">

														<div className="d-flex align-items-center mb-5">

															<div className="d-flex align-items-center flex-grow-1">

																<div className="symbol symbol-45px me-5">
																	<img src={avatarDefault} alt="" />
																</div>


																<div className="d-flex flex-column">
																	<a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Carles Nilson</a>
																	<span className="text-gray-400 fw-bold">Last week at 10:00 PM</span>
																</div>

															</div>


															<div className="my-0">
																<button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-category fs-6"></i>
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


														<div className="mb-7">

															<div className="text-gray-800 mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</div>


															<div className="d-flex align-items-center mb-5">
																<a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
																	<i className="ki-outline ki-message-text-2 fs-2"></i>22</a>
																<a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
																	<i className="ki-outline ki-heart fs-2"></i>59</a>
															</div>

														</div>


														<div className="separator mb-4"></div>


														<form className="position-relative mb-6">
															<textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" placeholder="Reply.."></textarea>
															<div className="position-absolute top-0 end-0 me-n5">
																<span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
																	<i className="ki-outline ki-paper-clip fs-2 mb-3"></i>
																</span>
																<span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
																	<i className="ki-outline ki-geolocation fs-2 mb-3"></i>
																</span>
															</div>
														</form>

													</div>

												</div>


												<div className="card d-none" id="kt_widget_5">

													<div className="card-body pb-0">

														<div className="d-flex align-items-center mb-5">

															<div className="d-flex align-items-center flex-grow-1">

																<div className="symbol symbol-45px me-5">
																	<img src={avatarDefault} alt="" />
																</div>


																<div className="d-flex flex-column">
																	<a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Carles Nilson</a>
																	<span className="text-gray-400 fw-bold">Last week at 10:00 PM</span>
																</div>

															</div>


															<div className="my-0">
																<button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-category fs-6"></i>
																</button>

																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">

																	<div className="menu-item px-3">
																		<div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
																	</div>


																	<div className="separator mb-3 opacity-75"></div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">New Ticket</a>
																	</div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">New Customer</a>
																	</div>


																	<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">

																		<a href="#" className="menu-link px-3">
																			<span className="menu-title">New Group</span>
																			<span className="menu-arrow"></span>
																		</a>


																		<div className="menu-sub menu-sub-dropdown w-175px py-4">

																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Admin Group</a>
																			</div>


																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Staff Group</a>
																			</div>


																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Member Group</a>
																			</div>

																		</div>

																	</div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">New Contact</a>
																	</div>


																	<div className="separator mt-3 opacity-75"></div>


																	<div className="menu-item px-3">
																		<div className="menu-content px-3 py-3">
																			<a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
																		</div>
																	</div>

																</div>

															</div>

														</div>


														<div className="mb-7">

															<div className="bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5"
															//  style="background-image:url('assets/media/stock/900x600/19.jpg');"
															></div>


															<div className="text-gray-800 mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</div>


															<div className="d-flex align-items-center mb-5">
																<a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
																	<i className="ki-outline ki-message-text-2 fs-2"></i>20</a>
																<a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
																	<i className="ki-outline ki-heart fs-2"></i>50</a>
															</div>

														</div>


														<div className="separator mb-4"></div>


														<form className="position-relative mb-6">
															<textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" placeholder="Reply.."></textarea>
															<div className="position-absolute top-0 end-0 me-n5">
																<span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
																	<i className="ki-outline ki-paper-clip fs-2 mb-3"></i>
																</span>
																<span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
																	<i className="ki-outline ki-geolocation fs-2 mb-3"></i>
																</span>
															</div>
														</form>

													</div>

												</div>


												<button className="btn btn-primary w-100 text-center" id="kt_widget_5_load_more_btn">
													<span className="indicator-label">More Feeds</span>
													<span className="indicator-progress">Loading...
														<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
												</button>

											</div>


											<div className="col-xl-6">

												<div className="card mb-5 mb-xxl-8">

													<div className="card-header border-0 pt-5">

														<h3 className="card-title align-items-start flex-column">
															<span className="card-label fw-bold fs-3 mb-1">Recent Statistics</span>
															<span className="text-muted fw-semibold fs-7">More than 400 new members</span>
														</h3>


														<div className="card-toolbar">

															<button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																<i className="ki-outline ki-category fs-6"></i>
															</button>

															<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_641acfb168ff3">

																<div className="px-7 py-5">
																	<div className="fs-5 text-dark fw-bold">Filter Options</div>
																</div>


																<div className="separator border-gray-200"></div>


																<div className="px-7 py-5">

																	<div className="mb-10">

																		<label className="form-label fw-semibold">Status:</label>


																		<div>
																			<select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_641acfb168ff3" data-allow-clear="true">
																				<option></option>
																				<option value="1">Approved</option>
																				<option value="2">Pending</option>
																				<option value="2">In Process</option>
																				<option value="2">Rejected</option>
																			</select>
																		</div>

																	</div>


																	<div className="mb-10">

																		<label className="form-label fw-semibold">Member Type:</label>


																		<div className="d-flex">

																			<label className="form-check form-check-sm form-check-custom form-check-solid me-5">
																				<input className="form-check-input" type="checkbox" value="1" />
																				<span className="form-check-label">Author</span>
																			</label>


																			<label className="form-check form-check-sm form-check-custom form-check-solid">
																				<input className="form-check-input" type="checkbox" value="2" />
																				<span className="form-check-label">Customer</span>
																			</label>

																		</div>

																	</div>


																	<div className="mb-10">

																		<label className="form-label fw-semibold">Notifications:</label>


																		<div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
																			<input className="form-check-input" type="checkbox" value="" name="notifications" />
																			<label className="form-check-label">Enabled</label>
																		</div>

																	</div>


																	<div className="d-flex justify-content-end">
																		<button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
																		<button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
																	</div>

																</div>

															</div>


														</div>

													</div>


													<div className="card-body">

														{/* <div id="kt_charts_widget_1_chart"></div> */}

													</div>

												</div>


												<div className="card mb-5 mb-xxl-8">

													<div className="card-header align-items-center border-0 mt-4">
														<h3 className="card-title align-items-start flex-column">
															<span className="fw-bold mb-2 text-dark">Activities</span>
															<span className="text-muted fw-semibold fs-7">890,344 Sales</span>
														</h3>
														<div className="card-toolbar">

															<button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																<i className="ki-outline ki-category fs-6"></i>
															</button>

															<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_641acfb169223">

																<div className="px-7 py-5">
																	<div className="fs-5 text-dark fw-bold">Filter Options</div>
																</div>


																<div className="separator border-gray-200"></div>


																<div className="px-7 py-5">

																	<div className="mb-10">

																		<label className="form-label fw-semibold">Status:</label>


																		<div>
																			<select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_641acfb169223" data-allow-clear="true">
																				<option></option>
																				<option value="1">Approved</option>
																				<option value="2">Pending</option>
																				<option value="2">In Process</option>
																				<option value="2">Rejected</option>
																			</select>
																		</div>

																	</div>


																	<div className="mb-10">

																		<label className="form-label fw-semibold">Member Type:</label>


																		<div className="d-flex">

																			<label className="form-check form-check-sm form-check-custom form-check-solid me-5">
																				<input className="form-check-input" type="checkbox" value="1" />
																				<span className="form-check-label">Author</span>
																			</label>


																			<label className="form-check form-check-sm form-check-custom form-check-solid">
																				<input className="form-check-input" type="checkbox" value="2" />
																				<span className="form-check-label">Customer</span>
																			</label>

																		</div>

																	</div>


																	<div className="mb-10">

																		<label className="form-label fw-semibold">Notifications:</label>


																		<div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
																			<input className="form-check-input" type="checkbox" value="" name="notifications" />
																			<label className="form-check-label">Enabled</label>
																		</div>

																	</div>


																	<div className="d-flex justify-content-end">
																		<button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
																		<button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
																	</div>

																</div>

															</div>


														</div>
													</div>


													<div className="card-body pt-5">

														<div className="timeline-label">

															<div className="timeline-item">

																<div className="timeline-label fw-bold text-gray-800 fs-6">08:42</div>


																<div className="timeline-badge">
																	<i className="fa fa-genderless text-warning fs-1"></i>
																</div>


																<div className="fw-mormal timeline-content text-muted ps-3">Outlines keep you honest. And keep structure</div>

															</div>


															<div className="timeline-item">

																<div className="timeline-label fw-bold text-gray-800 fs-6">10:00</div>


																<div className="timeline-badge">
																	<i className="fa fa-genderless text-success fs-1"></i>
																</div>


																<div className="timeline-content d-flex">
																	<span className="fw-bold text-gray-800 ps-3">AEOL meeting</span>
																</div>

															</div>


															<div className="timeline-item">

																<div className="timeline-label fw-bold text-gray-800 fs-6">14:37</div>


																<div className="timeline-badge">
																	<i className="fa fa-genderless text-danger fs-1"></i>
																</div>


																<div className="timeline-content fw-bold text-gray-800 ps-3">Make deposit
																	<a href="#" className="text-primary">USD 700</a>. to ESL</div>

															</div>


															<div className="timeline-item">

																<div className="timeline-label fw-bold text-gray-800 fs-6">16:50</div>


																<div className="timeline-badge">
																	<i className="fa fa-genderless text-primary fs-1"></i>
																</div>


																<div className="timeline-content fw-mormal text-muted ps-3">Indulging in poorly driving and keep structure keep great</div>

															</div>


															<div className="timeline-item">

																<div className="timeline-label fw-bold text-gray-800 fs-6">21:03</div>


																<div className="timeline-badge">
																	<i className="fa fa-genderless text-danger fs-1"></i>
																</div>


																<div className="timeline-content fw-semibold text-gray-800 ps-3">New order placed
																	<a href="#" className="text-primary">#XF-2356</a>.</div>

															</div>


															<div className="timeline-item">

																<div className="timeline-label fw-bold text-gray-800 fs-6">16:50</div>


																<div className="timeline-badge">
																	<i className="fa fa-genderless text-primary fs-1"></i>
																</div>


																<div className="timeline-content fw-mormal text-muted ps-3">Indulging in poorly driving and keep structure keep great</div>

															</div>


															<div className="timeline-item">

																<div className="timeline-label fw-bold text-gray-800 fs-6">21:03</div>


																<div className="timeline-badge">
																	<i className="fa fa-genderless text-danger fs-1"></i>
																</div>


																<div className="timeline-content fw-semibold text-gray-800 ps-3">New order placed
																	<a href="#" className="text-primary">#XF-2356</a>.</div>

															</div>


															<div className="timeline-item">

																<div className="timeline-label fw-bold text-gray-800 fs-6">10:30</div>


																<div className="timeline-badge">
																	<i className="fa fa-genderless text-success fs-1"></i>
																</div>


																<div className="timeline-content fw-mormal text-muted ps-3">Finance KPI Mobile app launch preparion meeting</div>

															</div>

														</div>

													</div>

												</div>

											</div>

										</div>

									</div>

								</div>

							</div>


							<div id="kt_app_footer" className="app-footer">

								<div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">

									<div className="text-dark order-2 order-md-1">
										<span className="text-muted fw-semibold me-1">2023&copy;</span>
										<a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
									</div>


									<ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
										<li className="menu-item">
											<a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
										</li>
										<li className="menu-item">
											<a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
										</li>
										<li className="menu-item">
											<a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a>
										</li>
									</ul>

								</div>

							</div>

						</div>


						<div id="kt_app_aside" className="app-aside flex-column" data-kt-drawer="true" data-kt-drawer-name="app-aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="auto" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_app_aside_mobile_toggle">

							<div id="kt_app_aside_wrapper" className="d-flex flex-column align-items-center hover-scroll-y mt-lg-n3 py-5 py-lg-0 gap-4" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_header" data-kt-scroll-wrappers="#kt_app_aside_wrapper" data-kt-scroll-offset="5px">
								<a href="../../demo39/dist/apps/calendar.html" className="btn btn-icon btn-color-primary bg-hover-body h-45px w-45px flex-shrink-0" data-bs-toggle="tooltip" title="Calendar" data-bs-custom-className="tooltip-inverse">
									<i className="ki-outline ki-calendar fs-2x"></i>
								</a>
								<a href="../../demo39/dist/account/overview.html" className="btn btn-icon btn-color-warning bg-hover-body h-45px w-45px flex-shrink-0" data-bs-toggle="tooltip" title="Profile" data-bs-custom-className="tooltip-inverse">
									<i className="ki-outline ki-address-book fs-2x"></i>
								</a>
								<a href="../../demo39/dist/apps/ecommerce/catalog/products.html" className="btn btn-icon btn-color-success bg-hover-body h-45px w-45px flex-shrink-0" data-bs-toggle="tooltip" title="Messages" data-bs-custom-className="tooltip-inverse">
									<i className="ki-outline ki-tablet-ok fs-2x"></i>
								</a>
								<a href="../../demo39/dist/apps/inbox/listing.html" className="btn btn-icon btn-color-dark bg-hover-body h-45px w-45px flex-shrink-0" data-bs-toggle="tooltip" title="Products" data-bs-custom-className="tooltip-inverse">
									<i className="ki-outline ki-calendar-add fs-2x"></i>
								</a>
							</div>

						</div>

					</div>

				</div>

			</div>



			<div id="kt_activities" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '900px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
				<div className="card shadow-none border-0 rounded-0">

					<div className="card-header" id="kt_activities_header">
						<h3 className="card-title fw-bold text-dark">Activity Logs</h3>
						<div className="card-toolbar">
							<button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
								<i className="ki-outline ki-cross fs-1"></i>
							</button>
						</div>
					</div>


					<div className="card-body position-relative" id="kt_activities_body">

						<div id="kt_activities_scroll" className="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">

							<div className="timeline">

								<div className="timeline-item">

									<div className="timeline-line w-40px"></div>


									<div className="timeline-icon symbol symbol-circle symbol-40px me-4">
										<div className="symbol-label bg-light">
											<i className="ki-outline ki-message-text-2 fs-2 text-gray-500"></i>
										</div>
									</div>


									<div className="timeline-content mb-10 mt-n1">

										<div className="pe-3 mb-5">

											<div className="fs-5 fw-semibold mb-2">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>


											<div className="d-flex align-items-center mt-1 fs-6">

												<div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>


												<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
													<img src={avatarDefault} alt="img" />
												</div>

											</div>

										</div>


										<div className="overflow-auto pb-5">

											<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">

												<a href="../../demo39/dist/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Meeting with customer</a>


												<div className="min-w-175px pe-2">
													<span className="badge badge-light text-muted">Application Design</span>
												</div>


												<div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">

													<div className="symbol symbol-circle symbol-25px">
														<img src="assets/media/avatars/300-2.jpg" alt="img" />
													</div>


													<div className="symbol symbol-circle symbol-25px">
														<img src={avatarDefault} alt="img" />
													</div>


													<div className="symbol symbol-circle symbol-25px">
														<div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">A</div>
													</div>

												</div>


												<div className="min-w-125px pe-2">
													<span className="badge badge-light-primary">In Progress</span>
												</div>


												<a href="../../demo39/dist/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>

											</div>


											<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">

												<a href="../../demo39/dist/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Project Delivery Preparation</a>


												<div className="min-w-175px">
													<span className="badge badge-light text-muted">CRM System Development</span>
												</div>


												<div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">

													<div className="symbol symbol-circle symbol-25px">
														<img src="assets/media/avatars/300-20.jpg" alt="img" />
													</div>


													<div className="symbol symbol-circle symbol-25px">
														<div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">B</div>
													</div>

												</div>


												<div className="min-w-125px">
													<span className="badge badge-light-success">Completed</span>
												</div>


												<a href="../../demo39/dist/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>

											</div>

										</div>

									</div>

								</div>


								<div className="timeline-item">

									<div className="timeline-line w-40px"></div>


									<div className="timeline-icon symbol symbol-circle symbol-40px">
										<div className="symbol-label bg-light">
											<i className="ki-outline ki-flag fs-2 text-gray-500"></i>
										</div>
									</div>


									<div className="timeline-content mb-10 mt-n2">

										<div className="overflow-auto pe-3">

											<div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>


											<div className="d-flex align-items-center mt-1 fs-6">

												<div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>


												<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
													<img src="assets/media/avatars/300-1.jpg" alt="img" />
												</div>

											</div>

										</div>

									</div>

								</div>


								<div className="timeline-item">

									<div className="timeline-line w-40px"></div>


									<div className="timeline-icon symbol symbol-circle symbol-40px">
										<div className="symbol-label bg-light">
											<i className="ki-outline ki-disconnect fs-2 text-gray-500"></i>
										</div>
									</div>


									<div className="timeline-content mb-10 mt-n1">

										<div className="mb-5 pe-3">

											<a href="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>


											<div className="d-flex align-items-center mt-1 fs-6">

												<div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>


												<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
													<img src="assets/media/avatars/300-23.jpg" alt="img" />
												</div>

											</div>

										</div>


										<div className="overflow-auto pb-5">
											<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">

												<div className="d-flex flex-aligns-center pe-10 pe-lg-20">

													<img alt="" className="w-30px me-3" src="assets/media/svg/files/pdf.svg" />


													<div className="ms-1 fw-semibold">

														<a href="../../demo39/dist/apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>


														<div className="text-gray-400">1.9mb</div>

													</div>

												</div>


												<div className="d-flex flex-aligns-center pe-10 pe-lg-20">

													<img alt="../../demo39/dist/apps/projects/project.html" className="w-30px me-3" src="assets/media/svg/files/doc.svg" />


													<div className="ms-1 fw-semibold">

														<a href="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>


														<div className="text-gray-400">18kb</div>

													</div>

												</div>


												<div className="d-flex flex-aligns-center">

													<img alt="../../demo39/dist/apps/projects/project.html" className="w-30px me-3" src="assets/media/svg/files/css.svg" />


													<div className="ms-1 fw-semibold">

														<a href="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>


														<div className="text-gray-400">20mb</div>

													</div>

												</div>

											</div>
										</div>

									</div>

								</div>


								<div className="timeline-item">

									<div className="timeline-line w-40px"></div>


									<div className="timeline-icon symbol symbol-circle symbol-40px">
										<div className="symbol-label bg-light">
											<i className="ki-outline ki-abstract-26 fs-2 text-gray-500"></i>
										</div>
									</div>


									<div className="timeline-content mb-10 mt-n1">

										<div className="pe-3 mb-5">

											<div className="fs-5 fw-semibold mb-2">Task
												<a href="#" className="text-primary fw-bold me-1">#45890</a>merged with
												<a href="#" className="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>


											<div className="d-flex align-items-center mt-1 fs-6">

												<div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>


												<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
													<img src={avatarDefault} alt="img" />
												</div>

											</div>

										</div>

									</div>

								</div>


								<div className="timeline-item">

									<div className="timeline-line w-40px"></div>


									<div className="timeline-icon symbol symbol-circle symbol-40px">
										<div className="symbol-label bg-light">
											<i className="ki-outline ki-pencil fs-2 text-gray-500"></i>
										</div>
									</div>


									<div className="timeline-content mb-10 mt-n1">

										<div className="pe-3 mb-5">

											<div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>


											<div className="d-flex align-items-center mt-1 fs-6">

												<div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>


												<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
													<img src="assets/media/avatars/300-2.jpg" alt="img" />
												</div>

											</div>

										</div>


										<div className="overflow-auto pb-5">
											<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">

												<div className="overlay me-10">

													<div className="overlay-wrapper">
														<img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-29.jpg" />
													</div>


													<div className="overlay-layer bg-dark bg-opacity-10 rounded">
														<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
													</div>

												</div>


												<div className="overlay me-10">

													<div className="overlay-wrapper">
														<img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-31.jpg" />
													</div>


													<div className="overlay-layer bg-dark bg-opacity-10 rounded">
														<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
													</div>

												</div>


												<div className="overlay">

													<div className="overlay-wrapper">
														<img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-40.jpg" />
													</div>


													<div className="overlay-layer bg-dark bg-opacity-10 rounded">
														<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
													</div>

												</div>

											</div>
										</div>

									</div>

								</div>


								<div className="timeline-item">

									<div className="timeline-line w-40px"></div>


									<div className="timeline-icon symbol symbol-circle symbol-40px">
										<div className="symbol-label bg-light">
											<i className="ki-outline ki-sms fs-2 text-gray-500"></i>
										</div>
									</div>


									<div className="timeline-content mb-10 mt-n1">

										<div className="pe-3 mb-5">

											<div className="fs-5 fw-semibold mb-2">New case
												<a href="#" className="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>


											<div className="overflow-auto pb-5">

												<div className="d-flex align-items-center mt-1 fs-6">

													<div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>


													<a href="#" className="text-primary fw-bold me-1">Alice Tan</a>

												</div>

											</div>

										</div>

									</div>

								</div>


								<div className="timeline-item">

									<div className="timeline-line w-40px"></div>


									<div className="timeline-icon symbol symbol-circle symbol-40px">
										<div className="symbol-label bg-light">
											<i className="ki-outline ki-pencil fs-2 text-gray-500"></i>
										</div>
									</div>


									<div className="timeline-content mb-10 mt-n1">

										<div className="pe-3 mb-5">

											<div className="fs-5 fw-semibold mb-2">You have received a new order:</div>


											<div className="d-flex align-items-center mt-1 fs-6">

												<div className="text-muted me-2 fs-7">Placed at 5:05 AM by</div>


												<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
													<img src="assets/media/avatars/300-4.jpg" alt="img" />
												</div>

											</div>

										</div>


										<div className="overflow-auto pb-5">

											<div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">

												<i className="ki-outline ki-devices-2 fs-2tx text-primary me-4"></i>


												<div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">

													<div className="mb-3 mb-md-0 fw-semibold">
														<h4 className="text-gray-900 fw-bold">Database Backup Process Completed!</h4>
														<div className="fs-6 text-gray-700 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
													</div>


													<a href="#" className="btn btn-primary px-6 align-self-center text-nowrap">Proceed</a>

												</div>

											</div>

										</div>

									</div>

								</div>


								<div className="timeline-item">

									<div className="timeline-line w-40px"></div>


									<div className="timeline-icon symbol symbol-circle symbol-40px">
										<div className="symbol-label bg-light">
											<i className="ki-outline ki-basket fs-2 text-gray-500"></i>
										</div>
									</div>


									<div className="timeline-content mt-n1">

										<div className="pe-3 mb-5">

											<div className="fs-5 fw-semibold mb-2">New order
												<a href="#" className="text-primary fw-bold me-1">#67890</a>is placed for Workshow Planning & Budget Estimation</div>


											<div className="d-flex align-items-center mt-1 fs-6">

												<div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>


												<a href="#" className="text-primary fw-bold me-1">Jimmy Bold</a>

											</div>

										</div>

									</div>

								</div>

							</div>

						</div>

					</div>


					<div className="card-footer py-5 text-center" id="kt_activities_footer">
						<a href="../../demo39/dist/pages/user-profile/activity.html" className="btn btn-bg-body text-primary">View All Activities
							<i className="ki-outline ki-arrow-right fs-3 text-primary"></i></a>
					</div>

				</div>
			</div>


			<div id="kt_drawer_chat" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">

				<div className="card w-100 border-0 rounded-0" id="kt_drawer_chat_messenger">

					<div className="card-header pe-5" id="kt_drawer_chat_messenger_header">

						<div className="card-title">

							<div className="d-flex justify-content-center flex-column me-3">
								<a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>

								<div className="mb-0 lh-1">
									<span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
									<span className="fs-7 fw-semibold text-muted">Active</span>
								</div>

							</div>

						</div>


						<div className="card-toolbar">

							<div className="me-0">
								<button className="btn btn-sm btn-icon btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
									<i className="ki-outline ki-dots-square fs-2"></i>
								</button>

								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">

									<div className="menu-item px-3">
										<div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Contacts</div>
									</div>


									<div className="menu-item px-3">
										<a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Contact</a>
									</div>


									<div className="menu-item px-3">
										<a href="#" className="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Contacts
											<span className="ms-2" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation">
												<i className="ki-outline ki-information fs-7"></i>
											</span></a>
									</div>


									<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
										<a href="#" className="menu-link px-3">
											<span className="menu-title">Groups</span>
											<span className="menu-arrow"></span>
										</a>

										<div className="menu-sub menu-sub-dropdown w-175px py-4">

											<div className="menu-item px-3">
												<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Create Group</a>
											</div>


											<div className="menu-item px-3">
												<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Invite Members</a>
											</div>


											<div className="menu-item px-3">
												<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
											</div>

										</div>

									</div>


									<div className="menu-item px-3 my-1">
										<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
									</div>

								</div>

							</div>


							<div className="btn btn-sm btn-icon btn-active-color-primary" id="kt_drawer_chat_close">
								<i className="ki-outline ki-cross-square fs-2"></i>
							</div>

						</div>

					</div>


					<div className="card-body" id="kt_drawer_chat_messenger_body">

						<div className="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">

							<div className="d-flex justify-content-start mb-10">

								<div className="d-flex flex-column align-items-start">

									<div className="d-flex align-items-center mb-2">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
										</div>


										<div className="ms-3">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
											<span className="text-muted fs-7 mb-1">2 mins</span>
										</div>

									</div>


									<div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>

								</div>

							</div>


							<div className="d-flex justify-content-end mb-10">

								<div className="d-flex flex-column align-items-end">

									<div className="d-flex align-items-center mb-2">

										<div className="me-3">
											<span className="text-muted fs-7 mb-1">5 mins</span>
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
										</div>


										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
										</div>

									</div>


									<div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>

								</div>

							</div>


							<div className="d-flex justify-content-start mb-10">

								<div className="d-flex flex-column align-items-start">

									<div className="d-flex align-items-center mb-2">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
										</div>


										<div className="ms-3">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
											<span className="text-muted fs-7 mb-1">1 Hour</span>
										</div>

									</div>


									<div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Ok, Understood!</div>

								</div>

							</div>


							<div className="d-flex justify-content-end mb-10">

								<div className="d-flex flex-column align-items-end">

									<div className="d-flex align-items-center mb-2">

										<div className="me-3">
											<span className="text-muted fs-7 mb-1">2 Hours</span>
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
										</div>


										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
										</div>

									</div>


									<div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">You’ll receive notifications for all issues, pull requests!</div>

								</div>

							</div>


							<div className="d-flex justify-content-start mb-10">

								<div className="d-flex flex-column align-items-start">

									<div className="d-flex align-items-center mb-2">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
										</div>


										<div className="ms-3">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
											<span className="text-muted fs-7 mb-1">3 Hours</span>
										</div>

									</div>


									<div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">You can unwatch this repository immediately by clicking here:
										<a href="https://keenthemes.com">Keenthemes.com</a></div>

								</div>

							</div>


							<div className="d-flex justify-content-end mb-10">

								<div className="d-flex flex-column align-items-end">

									<div className="d-flex align-items-center mb-2">

										<div className="me-3">
											<span className="text-muted fs-7 mb-1">4 Hours</span>
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
										</div>


										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
										</div>

									</div>


									<div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Most purchased Business courses during this sale!</div>

								</div>

							</div>


							<div className="d-flex justify-content-start mb-10">

								<div className="d-flex flex-column align-items-start">

									<div className="d-flex align-items-center mb-2">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
										</div>


										<div className="ms-3">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
											<span className="text-muted fs-7 mb-1">5 Hours</span>
										</div>

									</div>


									<div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>

								</div>

							</div>


							<div className="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">

								<div className="d-flex flex-column align-items-end">

									<div className="d-flex align-items-center mb-2">

										<div className="me-3">
											<span className="text-muted fs-7 mb-1">Just now</span>
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
										</div>


										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
										</div>

									</div>


									<div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text"></div>

								</div>

							</div>


							<div className="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">

								<div className="d-flex flex-column align-items-start">

									<div className="d-flex align-items-center mb-2">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
										</div>


										<div className="ms-3">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
											<span className="text-muted fs-7 mb-1">Just now</span>
										</div>

									</div>


									<div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Right before vacation season we have the next Big Deal for you.</div>

								</div>

							</div>

						</div>

					</div>


					<div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">

						<textarea className="form-control form-control-flush mb-3" data-kt-element="input" placeholder="Type a message"></textarea>


						<div className="d-flex flex-stack">

							<div className="d-flex align-items-center me-2">
								<button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
									<i className="ki-outline ki-paper-clip fs-3"></i>
								</button>
								<button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
									<i className="ki-outline ki-cloud-add fs-3"></i>
								</button>
							</div>


							<button className="btn btn-primary" type="button" data-kt-element="send">Send</button>

						</div>

					</div>

				</div>

			</div>


			<div id="kt_shopping_cart" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="cart" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle" data-kt-drawer-close="#kt_drawer_shopping_cart_close">

				<div className="card card-flush w-100 rounded-0">

					<div className="card-header">

						<h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>


						<div className="card-toolbar">

							<div className="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_shopping_cart_close">
								<i className="ki-outline ki-cross fs-2"></i>
							</div>

						</div>

					</div>


					<div className="card-body hover-scroll-overlay-y h-400px pt-5">

						<div className="d-flex flex-stack">

							<div className="d-flex flex-column me-3">

								<div className="mb-3">
									<a href="../../demo39/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Iblender</a>
									<span className="text-gray-400 fw-semibold d-block">The best kitchen gadget in 2022</span>
								</div>


								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 350</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">5</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-outline ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-outline ki-plus fs-4"></i>
									</a>
								</div>

							</div>


							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-1.jpg" alt="" />
							</div>

						</div>


						<div className="separator separator-dashed my-6"></div>


						<div className="d-flex flex-stack">

							<div className="d-flex flex-column me-3">

								<div className="mb-3">
									<a href="../../demo39/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">SmartCleaner</a>
									<span className="text-gray-400 fw-semibold d-block">Smart tool for cooking</span>
								</div>


								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 650</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">4</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-outline ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-outline ki-plus fs-4"></i>
									</a>
								</div>

							</div>


							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-3.jpg" alt="" />
							</div>

						</div>


						<div className="separator separator-dashed my-6"></div>


						<div className="d-flex flex-stack">

							<div className="d-flex flex-column me-3">

								<div className="mb-3">
									<a href="../../demo39/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">CameraMaxr</a>
									<span className="text-gray-400 fw-semibold d-block">Professional camera for edge</span>
								</div>


								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 150</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">3</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-outline ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-outline ki-plus fs-4"></i>
									</a>
								</div>

							</div>


							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-8.jpg" alt="" />
							</div>

						</div>


						<div className="separator separator-dashed my-6"></div>


						<div className="d-flex flex-stack">

							<div className="d-flex flex-column me-3">

								<div className="mb-3">
									<a href="../../demo39/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
									<span className="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
								</div>


								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 1450</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">7</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-outline ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-outline ki-plus fs-4"></i>
									</a>
								</div>

							</div>


							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-26.jpg" alt="" />
							</div>

						</div>


						<div className="separator separator-dashed my-6"></div>


						<div className="d-flex flex-stack">

							<div className="d-flex flex-column me-3">

								<div className="mb-3">
									<a href="../../demo39/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">MotionWire</a>
									<span className="text-gray-400 fw-semibold d-block">Perfect animation tool</span>
								</div>


								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 650</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">7</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-outline ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-outline ki-plus fs-4"></i>
									</a>
								</div>

							</div>


							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-21.jpg" alt="" />
							</div>

						</div>


						<div className="separator separator-dashed my-6"></div>


						<div className="d-flex flex-stack">

							<div className="d-flex flex-column me-3">

								<div className="mb-3">
									<a href="../../demo39/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Samsung</a>
									<span className="text-gray-400 fw-semibold d-block">Profile info,Timeline etc</span>
								</div>


								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 720</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">6</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-outline ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-outline ki-plus fs-4"></i>
									</a>
								</div>

							</div>


							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-34.jpg" alt="" />
							</div>

						</div>


						<div className="separator separator-dashed my-6"></div>


						<div className="d-flex flex-stack">

							<div className="d-flex flex-column me-3">

								<div className="mb-3">
									<a href="../../demo39/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
									<span className="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
								</div>


								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 430</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">8</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-outline ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-outline ki-plus fs-4"></i>
									</a>
								</div>

							</div>


							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-27.jpg" alt="" />
							</div>

						</div>

					</div>


					<div className="card-footer">

						<div className="d-flex flex-stack">
							<span className="fw-bold text-gray-600">Total</span>
							<span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
						</div>


						<div className="d-flex flex-stack">
							<span className="fw-bold text-gray-600">Sub total</span>
							<span className="text-primary fw-bolder fs-5">$ 246.35</span>
						</div>


						<div className="d-flex justify-content-end mt-9">
							<a href="#" className="btn btn-primary d-flex justify-content-end">Pleace Order</a>
						</div>

					</div>

				</div>

			</div>



			<div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
				<i className="ki-outline ki-arrow-up"></i>
			</div>



			<div className="modal fade" id="kt_modal_upgrade_plan" aria-hidden="true">

				<div className="modal-dialog modal-xl">

					<div className="modal-content rounded">

						<div className="modal-header justify-content-end border-0 pb-0">

							<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
								<i className="ki-outline ki-cross fs-1"></i>
							</div>

						</div>


						<div className="modal-body pt-0 pb-15 px-5 px-xl-20">

							<div className="mb-13 text-center">
								<h1 className="mb-3">Upgrade a Plan</h1>
								<div className="text-muted fw-semibold fs-5">If you need more info, please check
									<a href="#" className="link-primary fw-bold">Pricing Guidelines</a>.</div>
							</div>


							<div className="d-flex flex-column">

								<div className="nav-group nav-group-outline mx-auto" data-kt-buttons="true">
									<button className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active" data-kt-plan="month">Monthly</button>
									<button className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3" data-kt-plan="annual">Annual</button>
								</div>


								<div className="row mt-10">

									<div className="col-lg-6 mb-10 mb-lg-0">

										<div className="nav flex-column">

											<label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_startup">

												<div className="d-flex align-items-center me-2">

													<div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
														<input className="form-check-input" type="radio" name="plan" value="startup" />
													</div>


													<div className="flex-grow-1">
														<div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Startup</div>
														<div className="fw-semibold opacity-75">Best for startups</div>
													</div>

												</div>


												<div className="ms-5">
													<span className="mb-2">$</span>
													<span className="fs-3x fw-bold" data-kt-plan-price-month="39" data-kt-plan-price-annual="399">39</span>
													<span className="fs-7 opacity-50">/
														<span data-kt-element="period">Mon</span></span>
												</div>

											</label>


											<label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_advanced">

												<div className="d-flex align-items-center me-2">

													<div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
														<input className="form-check-input" type="radio" name="plan" value="advanced" />
													</div>


													<div className="flex-grow-1">
														<div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Advanced</div>
														<div className="fw-semibold opacity-75">Best for 100+ team size</div>
													</div>

												</div>


												<div className="ms-5">
													<span className="mb-2">$</span>
													<span className="fs-3x fw-bold" data-kt-plan-price-month="339" data-kt-plan-price-annual="3399">339</span>
													<span className="fs-7 opacity-50">/
														<span data-kt-element="period">Mon</span></span>
												</div>

											</label>


											<label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_enterprise">

												<div className="d-flex align-items-center me-2">

													<div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
														<input className="form-check-input" type="radio" name="plan" value="enterprise" />
													</div>


													<div className="flex-grow-1">
														<div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Enterprise
															<span className="badge badge-light-success ms-2 py-2 px-3 fs-7">Popular</span></div>
														<div className="fw-semibold opacity-75">Best value for 1000+ team</div>
													</div>

												</div>


												<div className="ms-5">
													<span className="mb-2">$</span>
													<span className="fs-3x fw-bold" data-kt-plan-price-month="999" data-kt-plan-price-annual="9999">999</span>
													<span className="fs-7 opacity-50">/
														<span data-kt-element="period">Mon</span></span>
												</div>

											</label>


											<label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_custom">

												<div className="d-flex align-items-center me-2">

													<div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
														<input className="form-check-input" type="radio" name="plan" value="custom" />
													</div>


													<div className="flex-grow-1">
														<div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Custom</div>
														<div className="fw-semibold opacity-75">Requet a custom license</div>
													</div>

												</div>


												<div className="ms-5">
													<a href="#" className="btn btn-sm btn-success">Contact Us</a>
												</div>

											</label>

										</div>

									</div>


									<div className="col-lg-6">

										<div className="tab-content rounded h-100 bg-light p-10">

											<div className="tab-pane fade show active" id="kt_upgrade_plan_startup">

												<div className="pb-5">
													<h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
													<div className="text-muted fw-semibold">Optimal for 10+ team size and new startup</div>
												</div>


												<div className="pt-1">

													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-muted flex-grow-1">Finance Module</span>
														<i className="ki-outline ki-cross-circle fs-1"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-muted flex-grow-1">Accounting Module</span>
														<i className="ki-outline ki-cross-circle fs-1"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-muted flex-grow-1">Network Platform</span>
														<i className="ki-outline ki-cross-circle fs-1"></i>
													</div>


													<div className="d-flex align-items-center">
														<span className="fw-semibold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
														<i className="ki-outline ki-cross-circle fs-1"></i>
													</div>

												</div>

											</div>


											<div className="tab-pane fade" id="kt_upgrade_plan_advanced">

												<div className="pb-5">
													<h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
													<div className="text-muted fw-semibold">Optimal for 100+ team size and grown company</div>
												</div>


												<div className="pt-1">

													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-muted flex-grow-1">Network Platform</span>
														<i className="ki-outline ki-cross-circle fs-1"></i>
													</div>


													<div className="d-flex align-items-center">
														<span className="fw-semibold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
														<i className="ki-outline ki-cross-circle fs-1"></i>
													</div>

												</div>

											</div>


											<div className="tab-pane fade" id="kt_upgrade_plan_enterprise">

												<div className="pb-5">
													<h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
													<div className="text-muted fw-semibold">Optimal for 1000+ team and enterpise</div>
												</div>


												<div className="pt-1">

													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>

												</div>

											</div>


											<div className="tab-pane fade" id="kt_upgrade_plan_custom">

												<div className="pb-5">
													<h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
													<div className="text-muted fw-semibold">Optimal for corporations</div>
												</div>


												<div className="pt-1">

													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Users</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Project Integrations</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center mb-7">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>


													<div className="d-flex align-items-center">
														<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
														<i className="ki-outline ki-check-circle fs-1 text-success"></i>
													</div>

												</div>

											</div>

										</div>

									</div>

								</div>

							</div>


							<div className="d-flex flex-center flex-row-fluid pt-12">
								<button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" className="btn btn-primary" id="kt_modal_upgrade_plan_btn">

									<span className="indicator-label">Upgrade Plan</span>


									<span className="indicator-progress">Please wait...
										<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>

								</button>
							</div>

						</div>

					</div>

				</div>

			</div>


			<div className="modal fade" id="kt_modal_view_users" aria-hidden="true">

				<div className="modal-dialog mw-650px">

					<div className="modal-content">

						<div className="modal-header pb-0 border-0 justify-content-end">

							<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
								<i className="ki-outline ki-cross fs-1"></i>
							</div>

						</div>


						<div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">

							<div className="text-center mb-13">

								<h1 className="mb-3">Browse Users</h1>


								<div className="text-muted fw-semibold fs-5">If you need more info, please check out our
									<a href="#" className="link-primary fw-bold">Users Directory</a>.</div>

							</div>


							<div className="mb-15">

								<div className="mh-375px scroll-y me-n7 pe-7">

									<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<img alt="Pic" src={avatarDefault} />
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Emma Smith
													<span className="badge badge-light fs-8 fw-semibold ms-2">Art Director</span></a>


												<div className="fw-semibold text-muted">smith@kpmg.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$23,000</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>


									<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Melody Macy
													<span className="badge badge-light fs-8 fw-semibold ms-2">Marketing Analytic</span></a>


												<div className="fw-semibold text-muted">melody@altbox.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$50,500</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>


									<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Max Smith
													<span className="badge badge-light fs-8 fw-semibold ms-2">Software Enginer</span></a>


												<div className="fw-semibold text-muted">max@kt.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$75,900</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>


									<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<img alt="Pic" src="assets/media/avatars/300-5.jpg" />
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Sean Bean
													<span className="badge badge-light fs-8 fw-semibold ms-2">Web Developer</span></a>


												<div className="fw-semibold text-muted">sean@dellito.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$10,500</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>


									<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Brian Cox
													<span className="badge badge-light fs-8 fw-semibold ms-2">UI/UX Designer</span></a>


												<div className="fw-semibold text-muted">brian@exchange.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$20,000</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>


									<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Mikaela Collins
													<span className="badge badge-light fs-8 fw-semibold ms-2">Head Of Marketing</span></a>


												<div className="fw-semibold text-muted">mik@pex.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$9,300</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>


									<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<img alt="Pic" src={avatarDefault} />
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Francis Mitcham
													<span className="badge badge-light fs-8 fw-semibold ms-2">Software Arcitect</span></a>


												<div className="fw-semibold text-muted">f.mit@kpmg.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$15,000</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>


									<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Olivia Wild
													<span className="badge badge-light fs-8 fw-semibold ms-2">System Admin</span></a>


												<div className="fw-semibold text-muted">olivia@corpmail.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$23,000</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>


									<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Neil Owen
													<span className="badge badge-light fs-8 fw-semibold ms-2">Account Manager</span></a>


												<div className="fw-semibold text-muted">owen.neil@gmail.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$45,800</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>


									<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<img alt="Pic" src="assets/media/avatars/300-23.jpg" />
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Dan Wilson
													<span className="badge badge-light fs-8 fw-semibold ms-2">Web Desinger</span></a>


												<div className="fw-semibold text-muted">dam@consilting.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$90,500</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>


									<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Emma Bold
													<span className="badge badge-light fs-8 fw-semibold ms-2">Corporate Finance</span></a>


												<div className="fw-semibold text-muted">emma@intenso.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$5,000</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>


									<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<img alt="Pic" src="assets/media/avatars/300-12.jpg" />
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Ana Crown
													<span className="badge badge-light fs-8 fw-semibold ms-2">Customer Relationship</span></a>


												<div className="fw-semibold text-muted">ana.cf@limtel.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$70,000</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>


									<div className="d-flex flex-stack py-5">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<span className="symbol-label bg-light-info text-info fw-semibold">A</span>
											</div>


											<div className="ms-6">

												<a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Robert Doe
													<span className="badge badge-light fs-8 fw-semibold ms-2">Marketing Executive</span></a>


												<div className="fw-semibold text-muted">robert@benko.com</div>

											</div>

										</div>


										<div className="d-flex">

											<div className="text-end">
												<div className="fs-5 fw-bold text-dark">$45,500</div>
												<div className="fs-7 text-muted">Sales</div>
											</div>

										</div>

									</div>

								</div>

							</div>


							<div className="d-flex justify-content-between">

								<div className="fw-semibold">
									<label className="fs-6">Adding Users by Team Members</label>
									<div className="fs-7 text-muted">If you need more info, please check budget planning</div>
								</div>


								<label className="form-check form-switch form-check-custom form-check-solid">
									<input className="form-check-input" type="checkbox" value="" />
									<span className="form-check-label fw-semibold text-muted">Allowed</span>
								</label>

							</div>

						</div>

					</div>

				</div>

			</div>


			<div className="modal fade" id="kt_modal_create_campaign" aria-hidden="true">

				<div className="modal-dialog modal-fullscreen p-9">

					<div className="modal-content modal-rounded">

						<div className="modal-header py-7 d-flex justify-content-between">

							<h2>Create Campaign</h2>


							<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
								<i className="ki-outline ki-cross fs-1"></i>
							</div>

						</div>


						<div className="modal-body scroll-y m-5">

							<div className="stepper stepper-links d-flex flex-column" id="kt_modal_create_campaign_stepper">

								<div className="stepper-nav justify-content-center py-2">

									<div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
										<h3 className="stepper-title">Campaign Details</h3>
									</div>


									<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
										<h3 className="stepper-title">Creative Uploads</h3>
									</div>


									<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
										<h3 className="stepper-title">Audiences</h3>
									</div>


									<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
										<h3 className="stepper-title">Budget Estimates</h3>
									</div>


									<div className="stepper-item" data-kt-stepper-element="nav">
										<h3 className="stepper-title">Completed</h3>
									</div>

								</div>


								<form className="mx-auto w-100 mw-600px pt-15 pb-10" id="kt_modal_create_campaign_stepper_form">

									<div className="current" data-kt-stepper-element="content">

										<div className="w-100">

											<div className="pb-10 pb-lg-15">

												<h2 className="fw-bold d-flex align-items-center text-dark">Setup Campaign Details
													<span className="ms-1" data-bs-toggle="tooltip" title="Campaign name will be used as reference within your campaign reports">
														<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
													</span></h2>


												<div className="text-muted fw-semibold fs-6">If you need more info, please check out
													<a href="#" className="link-primary fw-bold">Help Page</a>.</div>

											</div>


											<div className="mb-10 fv-row">

												<label className="required form-label mb-3">Campaign Name</label>


												<input type="text" className="form-control form-control-lg form-control-solid" name="campaign_name" placeholder="" value="" />

											</div>


											<div className="fv-row mb-10">

												<label className="d-block fw-semibold fs-6 mb-5">
													<span className="required">Company Logo</span>
													<span className="ms-1" data-bs-toggle="tooltip" title="E.g. Select a logo to represent the company that's running the campaign.">
														<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
													</span>
												</label>


												{/* <style>.image-input-placeholder { background-image: url('assets/media/svg/files/blank-image.svg'); } [data-bs-theme="dark"] .image-input-placeholder { background-image: url('assets/media/svg/files/blank-image-dark.svg'); }</style> */}


												<div className="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true">

													<div className="image-input-wrapper w-125px h-125px"></div>


													<label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
														<i className="ki-outline ki-pencil fs-7"></i>

														<input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
														<input type="hidden" name="avatar_remove" />

													</label>


													<span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
														<i className="ki-outline ki-cross fs-2"></i>
													</span>


													<span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
														<i className="ki-outline ki-cross fs-2"></i>
													</span>

												</div>


												<div className="form-text">Allowed file types: png, jpg, jpeg.</div>

											</div>


											<div className="mb-10">

												<label className="required fw-semibold fs-6 mb-5">Campaign Goal</label>



												<div className="d-flex fv-row">

													<div className="form-check form-check-custom form-check-solid">

														<input className="form-check-input me-3" name="user_role" type="radio" value="0" id="kt_modal_update_role_option_0" />


														<label className="form-check-label" >
															<div className="fw-bold text-gray-800">Get more visitors</div>
															<div className="text-gray-600">Increase impression traffic onto the platform</div>
														</label>

													</div>

												</div>

												<div className='separator separator-dashed my-5'></div>

												<div className="d-flex fv-row">

													<div className="form-check form-check-custom form-check-solid">

														<input className="form-check-input me-3" name="user_role" type="radio" value="1" id="kt_modal_update_role_option_1" />


														<label className="form-check-label" >
															<div className="fw-bold text-gray-800">Get more messages on chat</div>
															<div className="text-gray-600">Increase community interaction and communication</div>
														</label>

													</div>

												</div>

												<div className='separator separator-dashed my-5'></div>

												<div className="d-flex fv-row">

													<div className="form-check form-check-custom form-check-solid">

														<input className="form-check-input me-3" name="user_role" type="radio" value="2" id="kt_modal_update_role_option_2" />


														<label className="form-check-label" >
															<div className="fw-bold text-gray-800">Get more calls</div>
															<div className="text-gray-600">Boost telecommunication feedback to provide precise and accurate information</div>
														</label>

													</div>

												</div>

												<div className='separator separator-dashed my-5'></div>

												<div className="d-flex fv-row">

													<div className="form-check form-check-custom form-check-solid">

														<input className="form-check-input me-3" name="user_role" type="radio" value="3" id="kt_modal_update_role_option_3" />


														<label className="form-check-label" >
															<div className="fw-bold text-gray-800">Get more likes</div>
															<div className="text-gray-600">Increase positive interactivity on social media platforms</div>
														</label>

													</div>

												</div>

												<div className='separator separator-dashed my-5'></div>

												<div className="d-flex fv-row">

													<div className="form-check form-check-custom form-check-solid">

														<input className="form-check-input me-3" name="user_role" type="radio" value="4" id="kt_modal_update_role_option_4" />


														<label className="form-check-label" >
															<div className="fw-bold text-gray-800">Lead generation</div>
															<div className="text-gray-600">Collect contact information for potential customers</div>
														</label>

													</div>

												</div>


											</div>

										</div>

									</div>


									<div data-kt-stepper-element="content">

										<div className="w-100">

											<div className="pb-10 pb-lg-12">

												<h1 className="fw-bold text-dark">Upload Files</h1>


												<div className="text-muted fw-semibold fs-4">If you need more info, please check
													<a href="#" className="link-primary">Campaign Guidelines</a></div>

											</div>


											<div className="fv-row mb-10">

												<div className="dropzone" id="kt_modal_create_campaign_files_upload">

													<div className="dz-message needsclick">

														<i className="ki-outline ki-file-up fs-3hx text-primary"></i>


														<div className="ms-4">
															<h3 className="dfs-3 fw-bold text-gray-900 mb-1">Drop campaign files here or click to upload.</h3>
															<span className="fw-semibold fs-4 text-muted">Upload up to 10 files</span>
														</div>

													</div>
												</div>

											</div>


											<div className="mb-10">

												<label className="fs-6 fw-semibold mb-2">Uploaded File</label>


												<div className="mh-300px scroll-y me-n7 pe-7">

													<div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
														<div className="d-flex align-items-center">

															<div className="symbol symbol-35px">
																<img src="assets/media/svg/files/pdf.svg" alt="icon" />
															</div>


															<div className="ms-6">
																<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Product Specifications</a>
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
																<img src="assets/media/svg/files/tif.svg" alt="icon" />
															</div>


															<div className="ms-6">
																<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Creative Poster</a>
																<div className="fw-semibold text-muted">2.4mb</div>
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
																<img src="assets/media/svg/files/folder-document.svg" alt="icon" />
															</div>


															<div className="ms-6">
																<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Landing Page Source</a>
																<div className="fw-semibold text-muted">1.12mb</div>
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
																<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Landing Page Styling</a>
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
																<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Design Source Files</a>
																<div className="fw-semibold text-muted">48mb</div>
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
																<img src="assets/media/svg/files/doc.svg" alt="icon" />
															</div>


															<div className="ms-6">
																<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Plan Document</a>
																<div className="fw-semibold text-muted">27kb</div>
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

										</div>

									</div>


									<div data-kt-stepper-element="content">

										<div className="w-100">

											<div className="pb-10 pb-lg-12">

												<h1 className="fw-bold text-dark">Configure Audiences</h1>


												<div className="text-muted fw-semibold fs-4">If you need more info, please check
													<a href="#" className="link-primary">Campaign Guidelines</a></div>

											</div>


											<div className="fv-row mb-10">

												<label className="fs-6 fw-semibold mb-2">Gender
													<span className="ms-1" data-bs-toggle="tooltip" title="Show your ads to either men or women, or select 'All' for both">
														<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
													</span></label>


												<div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">

													<div className="col">

														<label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">

															<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
																<input className="form-check-input" type="radio" name="campaign_gender" value="1" />
															</span>


															<span className="ms-5">
																<span className="fs-4 fw-bold text-gray-800 d-block">All</span>
															</span>

														</label>

													</div>


													<div className="col">

														<label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">

															<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
																<input className="form-check-input" type="radio" name="campaign_gender" value="2" />
															</span>


															<span className="ms-5">
																<span className="fs-4 fw-bold text-gray-800 d-block">Male</span>
															</span>

														</label>

													</div>


													<div className="col">

														<label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">

															<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
																<input className="form-check-input" type="radio" name="campaign_gender" value="3" />
															</span>


															<span className="ms-5">
																<span className="fs-4 fw-bold text-gray-800 d-block">Female</span>
															</span>

														</label>

													</div>

												</div>

											</div>


											<div className="fv-row mb-10">

												<label className="fs-6 fw-semibold mb-2">Age
													<span className="ms-1" data-bs-toggle="tooltip" title="Select the minimum and maximum age of the people who will find your ad relevant.">
														<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
													</span></label>


												<div className="d-flex flex-stack">
													<div id="kt_modal_create_campaign_age_min" className="fs-7 fw-semibold text-muted"></div>
													<div id="kt_modal_create_campaign_age_slider" className="noUi-sm w-100 ms-5 me-8"></div>
													<div id="kt_modal_create_campaign_age_max" className="fs-7 fw-semibold text-muted"></div>
												</div>

											</div>


											<div className="fv-row mb-10">

												<label className="fs-6 fw-semibold mb-2">Location
													<span className="ms-1" data-bs-toggle="tooltip" title="Enter one or more location points for more specific targeting.">
														<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
													</span></label>


												<input className="form-control d-flex align-items-center" value="" id="kt_modal_create_campaign_location" data-kt-flags-path="assets/media/flags/" />

											</div>

										</div>

									</div>


									<div data-kt-stepper-element="content">

										<div className="w-100">

											<div className="pb-10 pb-lg-12">

												<h1 className="fw-bold text-dark">Budget Estimates</h1>


												<div className="text-muted fw-semibold fs-4">If you need more info, please check
													<a href="#" className="link-primary">Campaign Guidelines</a></div>

											</div>


											<div className="fv-row mb-10">

												<label className="fs-6 fw-semibold mb-2">Campaign Duration
													<span className="ms-1" data-bs-toggle="tooltip" title="Choose how long you want your ad to run for">
														<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
													</span></label>


												<div className="d-flex gap-9 mb-7">

													<button type="button" className="btn btn-outline btn-outline-dashed btn-active-light-primary active" id="kt_modal_create_campaign_duration_all">Continuous duration
														<br />
														<span className="fs-7">Your ad will run continuously for a daily budget.</span></button>


													<button type="button" className="btn btn-outline btn-outline-dashed btn-active-light-primary btn-outline-default" id="kt_modal_create_campaign_duration_fixed">Fixed duration
														<br />
														<span className="fs-7">Your ad will run on the specified dates only.</span></button>

												</div>


												<input className="form-control form-control-solid d-none" placeholder="Pick date & time" id="kt_modal_create_campaign_datepicker" />

											</div>


											<div className="fv-row mb-10">

												<label className="fs-6 fw-semibold mb-2">Daily Budget
													<span className="ms-1" data-bs-toggle="tooltip" title="Choose the budget allocated for each day. Higher budget will generate better results">
														<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
													</span></label>


												<div className="d-flex flex-column text-center">
													<div className="d-flex align-items-start justify-content-center mb-7">
														<span className="fw-bold fs-4 mt-1 me-2">$</span>
														<span className="fw-bold fs-3x" id="kt_modal_create_campaign_budget_label"></span>
														<span className="fw-bold fs-3x">.00</span>
													</div>
													<div id="kt_modal_create_campaign_budget_slider" className="noUi-sm"></div>
												</div>

											</div>

										</div>

									</div>


									<div data-kt-stepper-element="content">

										<div className="w-100">

											<div className="pb-12 text-center">

												<h1 className="fw-bold text-dark">Campaign Created!</h1>


												<div className="fw-semibold text-muted fs-4">You will receive an email with with the summary of your newly created campaign!</div>

											</div>


											<div className="d-flex flex-center pb-20">
												<button id="kt_modal_create_campaign_create_new" type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">Create New Campaign</button>
												<a href="" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">View Campaign</a>
											</div>


											<div className="text-center px-4">
												<img src="assets/media/illustrations/sketchy-1/9.png" alt="" className="mww-100 mh-350px" />
											</div>

										</div>
									</div>


									<div className="d-flex flex-stack pt-10">

										<div className="me-2">
											<button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
												<i className="ki-outline ki-arrow-left fs-3 me-1"></i>Back</button>
										</div>


										<div>
											<button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="submit">
												<span className="indicator-label">Submit
													<i className="ki-outline ki-arrow-right fs-3 ms-2 me-0"></i></span>
												<span className="indicator-progress">Please wait...
													<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
											</button>
											<button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
												<i className="ki-outline ki-arrow-right fs-3 ms-1 me-0"></i></button>
										</div>

									</div>

								</form>

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


			<div className="modal fade" id="kt_modal_users_search" aria-hidden="true">

				<div className="modal-dialog modal-dialog-centered mw-650px">

					<div className="modal-content">

						<div className="modal-header pb-0 border-0 justify-content-end">

							<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
								<i className="ki-outline ki-cross fs-1"></i>
							</div>

						</div>


						<div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">

							<div className="text-center mb-13">
								<h1 className="mb-3">Search Users</h1>
								<div className="text-muted fw-semibold fs-5">Invite Collaborators To Your Project</div>
							</div>


							<div id="kt_modal_users_search_handler" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="inline">

								<form data-kt-search-element="form" className="w-100 position-relative mb-5" >

									<input type="hidden" />


									<i className="ki-outline ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y"></i>


									<input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" value="" placeholder="Search by username, full name or email..." data-kt-search-element="input" />


									<span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
										<span className="spinner-border h-15px w-15px align-middle text-muted"></span>
									</span>


									<span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
										<i className="ki-outline ki-cross fs-2 fs-lg-1 me-0"></i>
									</span>

								</form>


								<div className="py-5">

									<div data-kt-search-element="suggestions">

										<h3 className="fw-semibold mb-5">Recently searched:</h3>


										<div className="mh-375px scroll-y me-n7 pe-7">

											<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">

												<div className="symbol symbol-35px symbol-circle me-5">
													<img alt="Pic" src={avatarDefault} />
												</div>


												<div className="fw-semibold">
													<span className="fs-6 text-gray-800 me-2">Emma Smith</span>
													<span className="badge badge-light">Art Director</span>
												</div>

											</a>


											<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">

												<div className="symbol symbol-35px symbol-circle me-5">
													<span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
												</div>


												<div className="fw-semibold">
													<span className="fs-6 text-gray-800 me-2">Melody Macy</span>
													<span className="badge badge-light">Marketing Analytic</span>
												</div>

											</a>


											<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">

												<div className="symbol symbol-35px symbol-circle me-5">
													<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
												</div>


												<div className="fw-semibold">
													<span className="fs-6 text-gray-800 me-2">Max Smith</span>
													<span className="badge badge-light">Software Enginer</span>
												</div>

											</a>


											<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">

												<div className="symbol symbol-35px symbol-circle me-5">
													<img alt="Pic" src="assets/media/avatars/300-5.jpg" />
												</div>


												<div className="fw-semibold">
													<span className="fs-6 text-gray-800 me-2">Sean Bean</span>
													<span className="badge badge-light">Web Developer</span>
												</div>

											</a>


											<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">

												<div className="symbol symbol-35px symbol-circle me-5">
													<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
												</div>


												<div className="fw-semibold">
													<span className="fs-6 text-gray-800 me-2">Brian Cox</span>
													<span className="badge badge-light">UI/UX Designer</span>
												</div>

											</a>

										</div>

									</div>


									<div data-kt-search-element="results" className="d-none">

										<div className="mh-375px scroll-y me-n7 pe-7">

											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="0">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" value="0" />
													</label>


													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src={avatarDefault} />
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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="1">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" value="1" />
													</label>


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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="2">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" value="2" />
													</label>


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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="3">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" value="3" />
													</label>


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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="4">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" value="4" />
													</label>


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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="5">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" value="5" />
													</label>


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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="6">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" value="6" />
													</label>


													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src={avatarDefault} />
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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="7">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" value="7" />
													</label>


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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="8">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" value="8" />
													</label>


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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="9">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" value="9" />
													</label>


													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src={avatarDefault} />
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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="10">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" value="10" />
													</label>


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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="11">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" value="11" />
													</label>


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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="12">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" value="12" />
													</label>


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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="13">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" value="13" />
													</label>


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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="14">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" value="14" />
													</label>


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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="15">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" value="15" />
													</label>


													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src={avatarDefault} />
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


											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>


											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="16">

												<div className="d-flex align-items-center">

													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" value="16" />
													</label>


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

										</div>


										<div className="d-flex flex-center mt-15">
											<button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" className="btn btn-active-light me-3">Cancel</button>
											<button type="submit" id="kt_modal_users_search_submit" className="btn btn-primary">Add Selected Users</button>
										</div>

									</div>


									<div data-kt-search-element="empty" className="text-center d-none">

										<div className="fw-semibold py-10">
											<div className="text-gray-600 fs-3 mb-2">No users found</div>
											<div className="text-muted fs-6">Try to search by username, full name or email...</div>
										</div>


										<div className="text-center px-5">
											<img src="assets/media/illustrations/sketchy-1/1.png" alt="" className="w-100 h-200px h-sm-325px" />
										</div>

									</div>

								</div>

							</div>

						</div>

					</div>

				</div>

			</div>


			<div className="modal fade" id="kt_modal_invite_friends" aria-hidden="true">

				<div className="modal-dialog mw-650px">

					<div className="modal-content">

						<div className="modal-header pb-0 border-0 justify-content-end">

							<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
								<i className="ki-outline ki-cross fs-1"></i>
							</div>

						</div>


						<div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">

							<div className="text-center mb-13">

								<h1 className="mb-3">Invite a Friend</h1>


								<div className="text-muted fw-semibold fs-5">If you need more info, please check out
									<a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>

							</div>


							<div className="btn btn-light-primary fw-bold w-100 mb-8">
								<img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Invite Gmail Contacts</div>


							<div className="separator d-flex flex-center mb-8">
								<span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">or</span>
							</div>


							<textarea className="form-control form-control-solid mb-8" placeholder="Type or paste emails here"></textarea>


							<div className="mb-10">

								<div className="fs-6 fw-semibold mb-2">Your Invitations</div>


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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
												<option value="1">Guest</option>
												<option value="2" >Owner</option>
												<option value="3">Can Edit</option>
											</select>
										</div>

									</div>


									<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<img alt="Pic" src={avatarDefault} />
											</div>


											<div className="ms-5">
												<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
												<div className="fw-semibold text-muted">f.mit@kpmg.com</div>
											</div>

										</div>


										<div className="ms-2 w-100px">
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
												<option value="1" >Guest</option>
												<option value="2">Owner</option>
												<option value="3">Can Edit</option>
											</select>
										</div>

									</div>


									<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<img alt="Pic" src={avatarDefault} />
											</div>


											<div className="ms-5">
												<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
												<div className="fw-semibold text-muted">dam@consilting.com</div>
											</div>

										</div>


										<div className="ms-2 w-100px">
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
												<option value="1">Guest</option>
												<option value="2" >Owner</option>
												<option value="3">Can Edit</option>
											</select>
										</div>

									</div>


									<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

										<div className="d-flex align-items-center">

											<div className="symbol symbol-35px symbol-circle">
												<img alt="Pic" src={avatarDefault} />
											</div>


											<div className="ms-5">
												<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
												<div className="fw-semibold text-muted">ethan@loop.com.au</div>
											</div>

										</div>


										<div className="ms-2 w-100px">
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
												<option value="1" >Guest</option>
												<option value="2">Owner</option>
												<option value="3">Can Edit</option>
											</select>
										</div>

									</div>


									<div className="d-flex flex-stack py-4">

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
											<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
												<option value="1">Guest</option>
												<option value="2">Owner</option>
												<option value="3" >Can Edit</option>
											</select>
										</div>

									</div>

								</div>

							</div>


							<div className="d-flex flex-stack">

								<div className="me-5 fw-semibold">
									<label className="fs-6">Adding Users by Team Members</label>
									<div className="fs-7 text-muted">If you need more info, please check budget planning</div>
								</div>


								<label className="form-check form-switch form-check-custom form-check-solid">
									<input className="form-check-input" type="checkbox" value="1" />
									<span className="form-check-label fw-semibold text-muted">Allowed</span>
								</label>

							</div>

						</div>

					</div>

				</div>

			</div>
		</div>
	)
}

export default OverviewProfile