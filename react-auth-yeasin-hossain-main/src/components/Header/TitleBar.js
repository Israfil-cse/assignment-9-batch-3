import React from 'react';
import { Helmet } from 'react-helmet';
import titleBar from '../../images/titlebar.svg';
function TitleBar({ title }) {
	return (
		<div>
			{/* Title bar nad fab icon  */}
			<Helmet>
				<meta charSet="utf-8" />
				<link rel="icon" href={titleBar} />
				<title>{title || 'City Tour'}</title>
			</Helmet>
		</div>
	);
}

export default TitleBar;
