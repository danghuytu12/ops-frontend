import React from 'react'

const Toolbar = () => {
    return (
        <>
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

                                            <a className="menu-link" href="../../demo39/dist/pages/user-profile/overview.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Overview</span>
                                            </a>

                                        </div>


                                        <div className="menu-item">

                                            <a className="menu-link active" href="../../demo39/dist/pages/user-profile/projects.html">
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
        </>
    )
}

export default Toolbar
