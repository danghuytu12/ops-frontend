import React, { ReactNode } from 'react'

const PageLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <head>
                <title>SAPP Academy</title>
                <meta name='description' content='test' />
                <meta property='og:type' content='article' />
                <meta property='og:title' itemProp='name' content='test' />
                <meta property='og:description' itemProp='description' content='test' />
                <meta property='og:url' itemProp='url' content='test' />
                <meta property='og:site_name' content='test' />
                <meta property='og:image' itemProp='image' content='test' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:site' content='test' />
                <meta name='twitter:title' content='test' />
                <meta name='twitter:description' content='test' />
                <meta name='twitter:image' content='test' />
                {/* <link rel='search' type='application/opensearchdescription+xml' title='Metaforce Search' href='/opensearch' /> */}
            </head>
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
												<img alt="Pic" src="" />
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
												<img alt="Pic" src="" />
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
													<img alt="Pic" src="" />
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
														<img alt="Pic" src="" />
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
														<img alt="Pic" src="" />
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
														<img alt="Pic" src="" />
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
														<img alt="Pic" src="" />
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
												<img alt="Pic" src="" />
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
												<img alt="Pic" src="" />
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
												<img alt="Pic" src="" />
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
            {children}
        </div>
    )
}

export default PageLayout