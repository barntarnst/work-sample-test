import React from 'react';
import Parser from 'html-react-parser';

export default ({ id, date, title, content, ...rest }) => {

return (
		<div className="post-container">
			<div className="post-left">{new Date(date).toLocaleDateString('sv-SE')}</div>
			<div className="post-center">
				<div className="post-title">

					<p>{Parser(title.rendered)}</p>
				</div>
				<div className="post-description">
					{ Parser(content.rendered)}
				</div>
			</div>
			<div />
		</div>
	);
};

// convert to local date.
// {new Date(date).toLocaleDateString('sv-SE')}
