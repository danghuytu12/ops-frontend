import React, { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'
import Menu from './menu'
import Toolbar from './toolbar'

interface IProps {
	children: ReactNode;
	pageSeoTitle: string,
	pageSeoDescription: string,
	pageBannerImage: string,
	pageSeoUrl: string;
	pageSiteName: string;
}

const PageLayout = ({ children, pageSeoTitle, pageSeoDescription, pageBannerImage, pageSeoUrl, pageSiteName }: IProps) => {
	return (
		<div>
			<head>
				<title>SAPP Academy</title>
				<meta name='description' content='test' />
				<meta property='og:type' content='article' />
				<meta property='og:title' itemProp='name' content={pageSeoTitle} />
				<meta property='og:description' itemProp='description' content={pageSeoDescription} />
				<meta property='og:url' itemProp='url' content={pageSeoUrl} />
				<meta property='og:site_name' content={pageSiteName} />
				<meta property='og:image' itemProp='image' content={pageBannerImage} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content={pageSiteName} />
				<meta name='twitter:title' content={pageSeoTitle} />
				<meta name='twitter:description' content={pageSeoDescription} />
				<meta name='twitter:image' content={pageBannerImage} />
			</head>
		
			<div className="d-flex flex-column flex-root app-root" id="kt_app_root">
				<div className="app-page flex-column flex-column-fluid" id="kt_app_page">
					<Header />

					<div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
						<Toolbar />
						{children}
						<Footer />
						<Menu />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PageLayout