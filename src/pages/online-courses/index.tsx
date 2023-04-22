import PageLayout from "../../components/Layout/PageLayout"
import illustrations from "../../_metronic/assets/media/svg/illustrations/easy/6.svg";

const OnlineCourse = () => {
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
											
											<h1 className="page-heading d-flex flex-column justify-content-center text-dark fw-bold fs-3 m-0">Hello Tyler</h1>
											
											
											<ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
												
												<li className="breadcrumb-item text-muted">
													<a href="../../demo39/dist/index.html" className="text-muted text-hover-primary">Home</a>
												</li>
												
												
												<li className="breadcrumb-item">
													<span className="bullet bg-gray-400 w-5px h-2px"></span>
												</li>
												
												
												<li className="breadcrumb-item text-muted">Dashboards</li>
												
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
									
									<div className="row g-5 g-xl-10 mb-5 mb-xl-10">
										
										<div className="col-xl-8">
											
											<div className="card h-xl-100">
												
												<div className="card-header position-relative py-0 border-bottom-2">
													
													<ul className="nav nav-stretch nav-pills nav-pills-custom d-flex mt-3">
														
														<li className="nav-item p-0 ms-0 me-8">
															
															<a className="nav-link btn btn-color-muted px-0" data-bs-toggle="tab" href="#kt_table_widget_7_tab_content_1">
																
																<span className="nav-text fw-semibold fs-4 mb-3">Monday</span>
																
																
																<span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
																
															</a>
															
														</li>
														
														
														<li className="nav-item p-0 ms-0 me-8">
															
															<a className="nav-link btn btn-color-muted px-0" data-bs-toggle="tab" href="#kt_table_widget_7_tab_content_2">
																
																<span className="nav-text fw-semibold fs-4 mb-3">Tuesday</span>
																
																
																<span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
																
															</a>
															
														</li>
														
														
														<li className="nav-item p-0 ms-0 me-8">
															
															<a className="nav-link btn btn-color-muted px-0 show active" data-bs-toggle="tab" href="#kt_table_widget_7_tab_content_3">
																
																<span className="nav-text fw-semibold fs-4 mb-3">Wednesday</span>
																
																
																<span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
																
															</a>
															
														</li>
														
														
														<li className="nav-item p-0 ms-0 me-8">
															
															<a className="nav-link btn btn-color-muted px-0" data-bs-toggle="tab" href="#kt_table_widget_7_tab_content_4">
																
																<span className="nav-text fw-semibold fs-4 mb-3">Thursday</span>
																
																
																<span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
																
															</a>
															
														</li>
														
														
														<li className="nav-item p-0 ms-0 me-8">
															
															<a className="nav-link btn btn-color-muted px-0" data-bs-toggle="tab" href="#kt_table_widget_7_tab_content_5">
																
																<span className="nav-text fw-semibold fs-4 mb-3">Friday</span>
																
																
																<span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
																
															</a>
															
														</li>
														
													</ul>
													
													
													<div className="card-toolbar">
														
														<div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" className="btn btn-sm btn-light d-flex align-items-center px-4">
															
															<div className="text-gray-600 fw-bold">Loading date range...</div>
															
															<i className="ki-outline ki-calendar-8 fs-1 ms-2 me-0"></i>
														</div>
														
													</div>
													
												</div>
												
												
												<div className="card-body">
													
													<div className="tab-content mb-2">
														
														<div className="tab-pane fade" id="kt_table_widget_7_tab_content_1">
															
															<div className="table-responsive">
																
																<table className="table align-middle">
																	
																	<thead>
																		<tr>
																			<th className="min-w-150px p-0"></th>
																			<th className="min-w-200px p-0"></th>
																			<th className="min-w-100px p-0"></th>
																			<th className="min-w-80px p-0"></th>
																		</tr>
																	</thead>
																	
																	
																	<tbody>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">11:43-09:43am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 1:
																			<span className="text-gray-800">French className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">5</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 205min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">09:40-11:20am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 2:
																			<span className="text-gray-800">Physics className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">13</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 25min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">10:35-43:09am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 3:
																			<span className="text-gray-800">Chemistry className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Court:
																			<span className="text-gray-800">Main</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 15min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">15:30-12:23pm</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 4:
																			<span className="text-gray-800">Biology className</span>
																			
																			<span className="cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Held by Dr. Ana">
																				<i className="ki-outline ki-information fs-1 text-warning"></i>
																			</span>
																			</td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">23</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																	</tbody>
																	
																</table>
																
															</div>
															
														</div>
														
														
														<div className="tab-pane fade" id="kt_table_widget_7_tab_content_2">
															
															<div className="table-responsive">
																
																<table className="table align-middle">
																	
																	<thead>
																		<tr>
																			<th className="min-w-150px p-0"></th>
																			<th className="min-w-200px p-0"></th>
																			<th className="min-w-100px p-0"></th>
																			<th className="min-w-80px p-0"></th>
																		</tr>
																	</thead>
																	
																	
																	<tbody>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">09:15-12:23am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 1:
																			<span className="text-gray-800">Geography className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">45</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 20min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">08:30-09:30am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 2:
																			<span className="text-gray-800">English className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">9</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 20min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">11:15-12:13am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 3:
																			<span className="text-gray-800">Sports className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Court:
																			<span className="text-gray-800">Main</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 25min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">14:10-15:35pm</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 4:
																			<span className="text-gray-800">Picture className</span>
																			
																			<span className="cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Held by Dr. Lebron">
																				<i className="ki-outline ki-information fs-1 text-warning"></i>
																			</span>
																			</td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">12</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																	</tbody>
																	
																</table>
																
															</div>
															
														</div>
														
														
														<div className="tab-pane fade show active" id="kt_table_widget_7_tab_content_3">
															
															<div className="table-responsive">
																
																<table className="table align-middle">
																	
																	<thead>
																		<tr>
																			<th className="min-w-150px p-0"></th>
																			<th className="min-w-200px p-0"></th>
																			<th className="min-w-100px p-0"></th>
																			<th className="min-w-80px p-0"></th>
																		</tr>
																	</thead>
																	
																	
																	<tbody>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">08:30-09:12am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 1:
																			<span className="text-gray-800">Math className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">45</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 15min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">09:30-10:50am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 2:
																			<span className="text-gray-800">History className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">12</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 20min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">10:35-11:20am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 3:
																			<span className="text-gray-800">Sports className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Court:
																			<span className="text-gray-800">Main</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 15min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">12:40-13:25pm</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 4:
																			<span className="text-gray-800">Chemistry className</span>
																			
																			<span className="cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Held by Dr. Natali">
																				<i className="ki-outline ki-information fs-1 text-warning"></i>
																			</span>
																			</td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">19</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																	</tbody>
																	
																</table>
																
															</div>
															
														</div>
														
														
														<div className="tab-pane fade" id="kt_table_widget_7_tab_content_4">
															
															<div className="table-responsive">
																
																<table className="table align-middle">
																	
																	<thead>
																		<tr>
																			<th className="min-w-150px p-0"></th>
																			<th className="min-w-200px p-0"></th>
																			<th className="min-w-100px p-0"></th>
																			<th className="min-w-80px p-0"></th>
																		</tr>
																	</thead>
																	
																	
																	<tbody>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">11:25-14:13am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 1:
																			<span className="text-gray-800">Geography className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">15</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 25min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">08:30-09:30am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 2:
																			<span className="text-gray-800">English className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">9</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 20min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">11:15-12:13am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 3:
																			<span className="text-gray-800">Sports className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Court:
																			<span className="text-gray-800">Main</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 25min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">14:10-15:35pm</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 4:
																			<span className="text-gray-800">Picture className</span>
																			
																			<span className="cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Held by Dr. Kevin">
																				<i className="ki-outline ki-information fs-1 text-warning"></i>
																			</span>
																			</td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">12</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																	</tbody>
																	
																</table>
																
															</div>
															
														</div>
														
														
														<div className="tab-pane fade" id="kt_table_widget_7_tab_content_5">
															
															<div className="table-responsive">
																
																<table className="table align-middle">
																	
																	<thead>
																		<tr>
																			<th className="min-w-150px p-0"></th>
																			<th className="min-w-200px p-0"></th>
																			<th className="min-w-100px p-0"></th>
																			<th className="min-w-80px p-0"></th>
																		</tr>
																	</thead>
																	
																	
																	<tbody>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">11:43-09:43am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 1:
																			<span className="text-gray-800">French className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">5</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 205min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">09:40-11:20am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 2:
																			<span className="text-gray-800">Physics className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">13</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 25min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">10:35-43:09am</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 3:
																			<span className="text-gray-800">Chemistry className</span></td>
																			<td className="fs-6 fw-bold text-gray-400">Court:
																			<span className="text-gray-800">Main</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																		<tr>
																			<td className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2" >Break 15min</td>
																		</tr>
																		<tr>
																			<td className="fs-6 fw-bold text-gray-800">15:30-12:23pm</td>
																			<td className="fs-6 fw-bold text-gray-400">lesson 4:
																			<span className="text-gray-800">Biology className</span>
																			
																			<span className="cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Held by Dr. Emma">
																				<i className="ki-outline ki-information fs-1 text-warning"></i>
																			</span>
																			</td>
																			<td className="fs-6 fw-bold text-gray-400">Cabinet:
																			<span className="text-gray-800">23</span></td>
																			<td className="pe-0 text-end">
																				<button className="btn btn-sm btn-light">Skip</button>
																			</td>
																		</tr>
																	</tbody>
																	
																</table>
																
															</div>
															
														</div>
														
													</div>
													
													
													<div className="float-end">
														<a href="#" className="btn btn-sm btn-light me-2" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">Add Lesson</a>
														<a href="#" className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Call Sick for Today</a>
													</div>
													
												</div>
												
											</div>
											
										</div>
										
										
										<div className="col-xl-4">
											
											<div className="card bg-primary h-xl-100">
												
												<div className="card-body d-flex flex-column pt-13 pb-14">
													
													<div className="m-0">
														
														<h1 className="fw-semibold text-white text-center lh-lg mb-9">How are you feeling today?
														<span className="fw-bolder">Here we are to Help</span></h1>
														
														
														<div className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center card-rounded-bottom h-200px mh-200px my-5 mb-lg-12" 
                                                        style={{ backgroundImage: `url(${illustrations})` }}
                                                        // style="background-image:url('assets/media/svg/illustrations/easy/6.svg')"
                                                        ></div>
														
													</div>
													
													
													<div className="text-center">
														
														<a className="btn btn-sm btn-success btn-color-white me-2" data-bs-target="#kt_modal_invite_friends" data-bs-toggle="modal">Psychologist</a>
														
														
														<a className="btn btn-sm bg-white btn-color-white bg-opacity-20" href="../../demo39/dist/pages/careers/list.html">Nurse</a>
														
													</div>
													
												</div>
												
											</div>
											
										</div>
										
									</div>
									
									
									<div className="row g-5 g-xl-10 mb-5 mb-xl-10">
										
										<div className="col-xxl-8">
											
											<div className="card h-xl-100">
												
												<div className="card-header position-relative py-0 border-bottom-2">
													
													<ul className="nav nav-stretch nav-pills nav-pills-custom d-flex mt-3">
														
														<li className="nav-item p-0 ms-0 me-8">
															
															<a className="nav-link btn btn-color-muted active px-0" data-bs-toggle="tab" id="kt_chart_widgets_22_tab_1" href="#kt_chart_widgets_22_tab_content_1">
																
																<span className="nav-text fw-semibold fs-4 mb-3">Overview</span>
																
																
																<span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
																
															</a>
															
														</li>
														
														
														<li className="nav-item p-0 ms-0">
															
															<a className="nav-link btn btn-color-muted px-0" data-bs-toggle="tab" id="kt_chart_widgets_22_tab_2" href="#kt_chart_widgets_22_tab_content_2">
																
																<span className="nav-text fw-semibold fs-4 mb-3">Performance</span>
																
																
																<span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
																
															</a>
															
														</li>
														
													</ul>
													
													
													<div className="card-toolbar">
														
														<div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" className="btn btn-sm btn-light d-flex align-items-center px-4">
															
															<div className="text-gray-600 fw-bold">Loading date range...</div>
															
															<i className="ki-outline ki-calendar-8 fs-1 ms-2 me-0"></i>
														</div>
														
													</div>
													
												</div>
												
												
												<div className="card-body pb-3">
													
													<div className="tab-content">
														
														<div className="tab-pane fade show active" id="kt_chart_widgets_22_tab_content_1">
															
															<div className="d-flex flex-wrap flex-md-nowrap">
																
																<div className="me-md-5 w-100">
																	
																	<div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
																		
																		<div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
																			
																			<div className="symbol symbol-50px me-4">
																				<span className="symbol-label">
																					<i className="ki-outline ki-timer fs-2qx text-primary"></i>
																				</span>
																			</div>
																			
																			
																			<div className="me-2">
																				<a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Attendance</a>
																				<span className="text-gray-400 fw-bold d-block fs-7">Great, you always attending className. keep it up</span>
																			</div>
																			
																		</div>
																		
																		
																		<div className="d-flex align-items-center">
																			<span className="text-dark fw-bolder fs-2x">73</span>
																			<span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">/</span>
																			<span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">76</span>
																			<span className="badge badge-lg badge-light-success align-self-center px-2">95%</span>
																		</div>
																		
																	</div>
																	
																	
																	<div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
																		
																		<div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
																			
																			<div className="symbol symbol-50px me-4">
																				<span className="symbol-label">
																					<i className="ki-outline ki-element-11 fs-2qx text-primary"></i>
																				</span>
																			</div>
																			
																			
																			<div className="me-2">
																				<a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Homeworks</a>
																				<span className="text-gray-400 fw-bold d-block fs-7">Don’t forget to turn in your task</span>
																			</div>
																			
																		</div>
																		
																		
																		<div className="d-flex align-items-center">
																			<span className="text-dark fw-bolder fs-2x">207</span>
																			<span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">/</span>
																			<span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">214</span>
																			<span className="badge badge-lg badge-light-success align-self-center px-2">92%</span>
																		</div>
																		
																	</div>
																	
																	
																	<div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
																		
																		<div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
																			
																			<div className="symbol symbol-50px me-4">
																				<span className="symbol-label">
																					<i className="ki-outline ki-abstract-24 fs-2qx text-primary"></i>
																				</span>
																			</div>
																			
																			
																			<div className="me-2">
																				<a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Tests</a>
																				<span className="text-gray-400 fw-bold d-block fs-7">You take 12 subjects at this semester</span>
																			</div>
																			
																		</div>
																		
																		
																		<div className="d-flex align-items-center">
																			<span className="text-dark fw-bolder fs-2x">27</span>
																			<span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">/</span>
																			<span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">38</span>
																			<span className="badge badge-lg badge-light-warning align-self-center px-2">80%</span>
																		</div>
																		
																	</div>
																	
																</div>
																
																
																<div className="d-flex justify-content-between flex-column w-225px w-md-600px mx-auto mx-md-0 pt-3 pb-10">
																	
																	<div className="fs-4 fw-bold text-gray-900 text-center mb-5">Session Attendance
																	<br />for Current Academic Year</div>
																	
																	
																	<div id="kt_chart_widgets_22_chart_1" className="mx-auto mb-4"></div>
																	
																	
																	<div className="mx-auto">
																		
																		<div className="d-flex align-items-center mb-2">
																			
																			<div className="bullet bullet-dot w-8px h-7px bg-success me-2"></div>
																			
																			
																			<div className="fs-8 fw-semibold text-muted">Precent(133)</div>
																			
																		</div>
																		
																		
																		<div className="d-flex align-items-center mb-2">
																			
																			<div className="bullet bullet-dot w-8px h-7px bg-primary me-2"></div>
																			
																			
																			<div className="fs-8 fw-semibold text-muted">Illness(9)</div>
																			
																		</div>
																		
																		
																		<div className="d-flex align-items-center mb-2">
																			
																			<div className="bullet bullet-dot w-8px h-7px bg-info me-2"></div>
																			
																			
																			<div className="fs-8 fw-semibold text-muted">Late(2)</div>
																			
																		</div>
																		
																		
																		<div className="d-flex align-items-center mb-2">
																			
																			<div className="bullet bullet-dot w-8px h-7px bg-danger me-2"></div>
																			
																			
																			<div className="fs-8 fw-semibold text-muted">Absent(3)</div>
																			
																		</div>
																		
																	</div>
																	
																</div>
																
															</div>
															
														</div>
														
														
														<div className="tab-pane fade" id="kt_chart_widgets_22_tab_content_2">
															
															<div className="d-flex flex-wrap flex-md-nowrap">
																
																<div className="me-md-5 w-100">
																	
																	<div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
																		
																		<div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
																			
																			<div className="symbol symbol-50px me-4">
																				<span className="symbol-label">
																					<i className="ki-outline ki-element-11 fs-2qx text-primary"></i>
																				</span>
																			</div>
																			
																			
																			<div className="me-2">
																				<a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Homeworks</a>
																				<span className="text-gray-400 fw-bold d-block fs-7">Don’t forget to turn in your task</span>
																			</div>
																			
																		</div>
																		
																		
																		<div className="d-flex align-items-center">
																			<span className="text-dark fw-bolder fs-2x">423</span>
																			<span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">/</span>
																			<span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">154</span>
																			<span className="badge badge-lg badge-light-danger align-self-center px-2">74%</span>
																		</div>
																		
																	</div>
																	
																	
																	<div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
																		
																		<div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
																			
																			<div className="symbol symbol-50px me-4">
																				<span className="symbol-label">
																					<i className="ki-outline ki-abstract-24 fs-2qx text-primary"></i>
																				</span>
																			</div>
																			
																			
																			<div className="me-2">
																				<a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Tests</a>
																				<span className="text-gray-400 fw-bold d-block fs-7">You take 12 subjects at this semester</span>
																			</div>
																			
																		</div>
																		
																		
																		<div className="d-flex align-items-center">
																			<span className="text-dark fw-bolder fs-2x">43</span>
																			<span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">/</span>
																			<span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">53</span>
																			<span className="badge badge-lg badge-light-info align-self-center px-2">65%</span>
																		</div>
																		
																	</div>
																	
																	
																	<div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
																		
																		<div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
																			
																			<div className="symbol symbol-50px me-4">
																				<span className="symbol-label">
																					<i className="ki-outline ki-timer fs-2qx text-primary"></i>
																				</span>
																			</div>
																			
																			
																			<div className="me-2">
																				<a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Attendance</a>
																				<span className="text-gray-400 fw-bold d-block fs-7">Great, you always attending className. keep it up</span>
																			</div>
																			
																		</div>
																		
																		
																		<div className="d-flex align-items-center">
																			<span className="text-dark fw-bolder fs-2x">53</span>
																			<span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">/</span>
																			<span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">94</span>
																			<span className="badge badge-lg badge-light-primary align-self-center px-2">87%</span>
																		</div>
																		
																	</div>
																	
																</div>
																
																
																<div className="d-flex justify-content-between flex-column w-225px w-md-600px mx-auto mx-md-0 pt-3 pb-10">
																	
																	<div className="fs-4 fw-bold text-gray-900 text-center mb-5">Session Attendance
																	<br />for Current Academic Year</div>
																	
																	
																	<div id="kt_chart_widgets_22_chart_2" className="mx-auto mb-4"></div>
																	
																	
																	<div className="mx-auto">
																		
																		<div className="d-flex align-items-center mb-2">
																			
																			<div className="bullet bullet-dot w-8px h-7px bg-success me-2"></div>
																			
																			
																			<div className="fs-8 fw-semibold text-muted">Precent(133)</div>
																			
																		</div>
																		
																		
																		<div className="d-flex align-items-center mb-2">
																			
																			<div className="bullet bullet-dot w-8px h-7px bg-primary me-2"></div>
																			
																			
																			<div className="fs-8 fw-semibold text-muted">Illness(9)</div>
																			
																		</div>
																		
																		
																		<div className="d-flex align-items-center mb-2">
																			
																			<div className="bullet bullet-dot w-8px h-7px bg-info me-2"></div>
																			
																			
																			<div className="fs-8 fw-semibold text-muted">Late(2)</div>
																			
																		</div>
																		
																		
																		<div className="d-flex align-items-center mb-2">
																			
																			<div className="bullet bullet-dot w-8px h-7px bg-danger me-2"></div>
																			
																			
																			<div className="fs-8 fw-semibold text-muted">Absent(3)</div>
																			
																		</div>
																		
																	</div>
																	
																</div>
																
															</div>
															
														</div>
														
													</div>
													
												</div>
												
											</div>
											
										</div>
										
										
										<div className="col-xxl-4">
											
											<div id="kt_sliders_widget_3_slider" className="card card-flush carousel slide h-xl-100" data-bs-ride="carousel" data-bs-interval="5000">
												
												<div className="card-header pt-5 mb-5">
													
													<h3 className="card-title align-items-start flex-column">
														<span className="card-label fw-bold text-dark">Academic Performance</span>
														<span className="text-gray-400 mt-1 fw-semibold fs-7">Avg. 72% completed lessons</span>
													</h3>
													
													
													<div className="card-toolbar">
														<div className="d-flex justify-content-end">
															<a href="#kt_sliders_widget_3_slider" className="carousel-control-prev position-relative me-5 active" role="button" data-bs-slide="prev">
																<i className="ki-outline ki-left-square fs-2x text-gray-400"></i>
															</a>
															<a href="#kt_sliders_widget_3_slider" className="carousel-control-next position-relative me-1" role="button" data-bs-slide="next">
																<i className="ki-outline ki-right-square fs-2x text-gray-400"></i>
															</a>
														</div>
													</div>
													
												</div>
												
												
												<div className="card-body p-0">
													
													<div className="carousel-inner">
														
														<div className="carousel-item active show">
															
															<span className="text-gray-800 fw-bold fs-4 mb-3 px-8">Chemistry</span>
															
															
															<div className="d-flex align-items-center w-100 px-8">
																
																<span className="fs-2qx text-gray-800 fw-bold">6</span>
																
																
																<div className="progress h-6px w-100 mx-3 bg-light-primary">
																	{/* <div className="progress-bar bg-primary" role="progressbar" style="width: 62%" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div> */}
																</div>
																
																
																<span className="text-gray-400 fw-bold fs-4">62%</span>
																
															</div>
															
															
															{/* <div id="kt_sliders_widget_3_chart_1" className="min-h-auto ps-4 pe-6" style="height: 330px"></div> */}
															
														</div>
														
														
														<div className="carousel-item">
															
															<span className="text-gray-800 fw-bold fs-4 mb-3 px-8">Mathematics</span>
															
															
															<div className="d-flex align-items-center w-100 px-8">
																
																<span className="fs-2qx text-gray-800 fw-bold">4</span>
																
																
																<div className="progress h-6px w-100 mx-3 bg-light-danger">
																	{/* <div className="progress-bar bg-danger" role="progressbar" style="width: 73%" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div> */}
																</div>
																
																
																<span className="text-gray-400 fw-bold fs-4">73%</span>
																
															</div>
															
															
															{/* <div id="kt_sliders_widget_3_chart_2" className="min-h-auto ps-4 pe-6" style="height: 330px"></div> */}
															
														</div>
														
													</div>
													
												</div>
												
											</div>
											
										</div>
										
									</div>
									
									
									<div className="row g-5 g-xl-10">
										
										<div className="col-xxl-8">
											
											<div className="card h-xl-100" id="kt_timeline_widget_2_card">
												
												<div className="card-header position-relative py-0 border-bottom-2">
													
													<ul className="nav nav-stretch nav-pills nav-pills-custom d-flex mt-3">
														
														<li className="nav-item p-0 ms-0 me-8">
															
															<a className="nav-link btn btn-color-muted active px-0" data-bs-toggle="pill" href="#kt_timeline_widget_2_tab_1">
																
																<span className="nav-text fw-semibold fs-4 mb-3">Today Homeworks</span>
																
																
																<span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
																
															</a>
															
														</li>
														
														
														<li className="nav-item p-0 ms-0 me-8">
															
															<a className="nav-link btn btn-color-muted px-0" data-bs-toggle="pill" href="#kt_timeline_widget_2_tab_2">
																
																<span className="nav-text fw-semibold fs-4 mb-3">Recent</span>
																
																
																<span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
																
															</a>
															
														</li>
														
														
														<li className="nav-item p-0 ms-0">
															
															<a className="nav-link btn btn-color-muted px-0" data-bs-toggle="pill" href="#kt_timeline_widget_2_tab_3">
																
																<span className="nav-text fw-semibold fs-4 mb-3">Future</span>
																
																
																<span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded"></span>
																
															</a>
															
														</li>
														
													</ul>
													
												</div>
												
												
												<div className="card-body">
													
													<div className="tab-content">
														
														<div className="tab-pane fade show active" id="kt_timeline_widget_2_tab_1">
															
															<div className="table-responsive">
																
																<table className="table align-middle gs-0 gy-4">
																	
																	<thead>
																		<tr>
																			<th className="p-0 w-10px"></th>
																			<th className="p-0 w-25px"></th>
																			<th className="p-0 min-w-400px"></th>
																			<th className="p-0 min-w-100px"></th>
																			<th className="p-0 min-w-125px"></th>
																		</tr>
																	</thead>
																	
																	
																	<tbody>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-success"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-success form-check-solid">
																					<input className="form-check-input" type="checkbox" value=""  data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Book p. 77-85, read & complete tasks 1-6 on p. 85</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">Physics</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-success">Done</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-primary"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-solid">
																					<input className="form-check-input" type="checkbox" value="" data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Workbook p. 17, tasks 1-6</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">Mathematics</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-primary">In Process</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-success"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-success form-check-solid">
																					<input className="form-check-input" type="checkbox" value=""  data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Learn paragraph p. 99, Exercise 1,2,3Scoping & Estimations</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">Chemistry</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-success">Done</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-primary"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-solid">
																					<input className="form-check-input" type="checkbox" value="" data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Write essay 1000 words “WW2 results”</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">History</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-primary">In Process</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-primary"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-solid">
																					<input className="form-check-input" type="checkbox" value="" data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Internal conflicts in Philip Larkin poems, read p 380-515</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">English Language</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-primary">In Process</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																	</tbody>
																	
																</table>
															</div>
															
														</div>
														
														
														<div className="tab-pane fade" id="kt_timeline_widget_2_tab_2">
															
															<div className="table-responsive">
																
																<table className="table align-middle gs-0 gy-4">
																	
																	<thead>
																		<tr>
																			<th className="p-0 w-10px"></th>
																			<th className="p-0 w-25px"></th>
																			<th className="p-0 min-w-400px"></th>
																			<th className="p-0 min-w-100px"></th>
																			<th className="p-0 min-w-125px"></th>
																		</tr>
																	</thead>
																	
																	
																	<tbody>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-success"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-success form-check-solid">
																					<input className="form-check-input" type="checkbox" value=""  data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Book p. 77-85, read & complete tasks 1-6 on p. 85</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">Physics</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-success">Done</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-primary"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-solid">
																					<input className="form-check-input" type="checkbox" value="" data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Workbook p. 17, tasks 1-6</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">Mathematics</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-primary">In Process</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-success"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-success form-check-solid">
																					<input className="form-check-input" type="checkbox" value=""  data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Learn paragraph p. 99, Exercise 1,2,3Scoping & Estimations</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">Chemistry</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-success">Done</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-primary"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-solid">
																					<input className="form-check-input" type="checkbox" value="" data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Write essay 1000 words “WW2 results”</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">History</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-primary">In Process</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																	</tbody>
																	
																</table>
															</div>
															
														</div>
														
														
														<div className="tab-pane fade" id="kt_timeline_widget_2_tab_3">
															
															<div className="table-responsive">
																
																<table className="table align-middle gs-0 gy-4">
																	
																	<thead>
																		<tr>
																			<th className="p-0 w-10px"></th>
																			<th className="p-0 w-25px"></th>
																			<th className="p-0 min-w-400px"></th>
																			<th className="p-0 min-w-100px"></th>
																			<th className="p-0 min-w-125px"></th>
																		</tr>
																	</thead>
																	
																	
																	<tbody>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-primary"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-solid">
																					<input className="form-check-input" type="checkbox" value="" data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Workbook p. 17, tasks 1-6</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">Mathematics</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-primary">In Process</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-success"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-success form-check-solid">
																					<input className="form-check-input" type="checkbox" value=""  data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Learn paragraph p. 99, Exercise 1,2,3Scoping & Estimations</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">Chemistry</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-success">Done</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-primary"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-solid">
																					<input className="form-check-input" type="checkbox" value="" data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Write essay 1000 words “WW2 results”</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">History</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-primary">In Process</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																		<tr>
																			<td>
																				<span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center h-40px bg-primary"></span>
																			</td>
																			<td className="ps-0">
																				<div className="form-check form-check-custom form-check-solid">
																					<input className="form-check-input" type="checkbox" value="" data-kt-element="checkbox" />
																				</div>
																			</td>
																			<td>
																				<a href="#" className="text-gray-800 text-hover-primary fw-bold fs-6">Internal conflicts in Philip Larkin poems, read p 380-515</a>
																				<span className="text-gray-400 fw-bold fs-7 d-block">English Language</span>
																			</td>
																			<td className="text-end">
																				<span data-kt-element="status" className="badge badge-light-primary">In Process</span>
																			</td>
																			<td className="text-end">
																				
																				<div className="d-flex justify-content-end flex-shrink-0">
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-printer fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3">
																						<i className="ki-outline ki-sms fs-3"></i>
																					</a>
																					
																					
																					<a href="#" className="btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm">
																						<i className="ki-outline ki-paper-clip fs-3"></i>
																					</a>
																					
																				</div>
																				
																			</td>
																		</tr>
																	</tbody>
																	
																</table>
															</div>
															
														</div>
														
													</div>
													
												</div>
												
											</div>
											
										</div>
										
										
										<div className="col-xxl-4">
											
											<div className="card h-xl-100">
												
												<div className="card-header border-0 pt-5">
													<h3 className="card-title align-items-start flex-column">
														<span className="card-label fw-bold text-dark">Recommended for you</span>
														<span className="text-muted mt-1 fw-semibold fs-7">8k social visitors</span>
													</h3>
													
													<div className="card-toolbar">
														<a href="#" className="btn btn-sm btn-light">All Courses</a>
													</div>
													
												</div>
												
												
												<div className="card-body pt-6">
													
													<div className="d-flex flex-stack">
														
														<div className="symbol symbol-40px me-4">
															<div className="symbol-label fs-2 fw-semibold bg-danger text-inverse-danger">M</div>
														</div>
														
														
														<div className="d-flex align-items-center flex-row-fluid flex-wrap">
															
															<div className="flex-grow-1 me-2">
																<a href="../../demo39/dist/pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">UI/UX Design</a>
																<span className="text-muted fw-semibold d-block fs-7">40+ Courses</span>
															</div>
															
															
															<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																<i className="ki-outline ki-arrow-right fs-2"></i>
															</a>
															
														</div>
														
													</div>
													
													
													<div className="separator separator-dashed my-4"></div>
													
													
													<div className="d-flex flex-stack">
														
														<div className="symbol symbol-40px me-4">
															<div className="symbol-label fs-2 fw-semibold bg-success text-inverse-success">Q</div>
														</div>
														
														
														<div className="d-flex align-items-center flex-row-fluid flex-wrap">
															
															<div className="flex-grow-1 me-2">
																<a href="../../demo39/dist/pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">QA Analysis</a>
																<span className="text-muted fw-semibold d-block fs-7">18 Courses</span>
															</div>
															
															
															<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																<i className="ki-outline ki-arrow-right fs-2"></i>
															</a>
															
														</div>
														
													</div>
													
													
													<div className="separator separator-dashed my-4"></div>
													
													
													<div className="d-flex flex-stack">
														
														<div className="symbol symbol-40px me-4">
															<div className="symbol-label fs-2 fw-semibold bg-info text-inverse-info">W</div>
														</div>
														
														
														<div className="d-flex align-items-center flex-row-fluid flex-wrap">
															
															<div className="flex-grow-1 me-2">
																<a href="../../demo39/dist/pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">Web Development</a>
																<span className="text-muted fw-semibold d-block fs-7">120+ Courses</span>
															</div>
															
															
															<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																<i className="ki-outline ki-arrow-right fs-2"></i>
															</a>
															
														</div>
														
													</div>
													
													
													<div className="separator separator-dashed my-4"></div>
													
													
													<div className="d-flex flex-stack">
														
														<div className="symbol symbol-40px me-4">
															<div className="symbol-label fs-2 fw-semibold bg-primary text-inverse-primary">M</div>
														</div>
														
														
														<div className="d-flex align-items-center flex-row-fluid flex-wrap">
															
															<div className="flex-grow-1 me-2">
																<a href="../../demo39/dist/pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">Marketing</a>
																<span className="text-muted fw-semibold d-block fs-7">50+ Courses.</span>
															</div>
															
															
															<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																<i className="ki-outline ki-arrow-right fs-2"></i>
															</a>
															
														</div>
														
													</div>
													
													
													<div className="separator separator-dashed my-4"></div>
													
													
													<div className="d-flex flex-stack">
														
														<div className="symbol symbol-40px me-4">
															<div className="symbol-label fs-2 fw-semibold bg-warning text-inverse-warning">P</div>
														</div>
														
														
														<div className="d-flex align-items-center flex-row-fluid flex-wrap">
															
															<div className="flex-grow-1 me-2">
																<a href="../../demo39/dist/pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">Philosophy</a>
																<span className="text-muted fw-semibold d-block fs-7">24+ Courses</span>
															</div>
															
															
															<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
																<i className="ki-outline ki-arrow-right fs-2"></i>
															</a>
															
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
        </PageLayout>
    )
}

export default OnlineCourse
