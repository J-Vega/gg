import React from 'react';


import {Route} from 'react-router-dom';

import './article.css';

export default function Article(props){
	return(
		<div className="article-container" category={props.category}>
			<a href={props.link}><p className="article-title">{props.title}</p></a>
			<p className="article-date">{props.date}</p>
			<img className="article-image" src={props.imagelink} />
			<p>{props.intro}</p>
			<a href={props.link}>Continue Reading</a>
			
		</div>
		);
}