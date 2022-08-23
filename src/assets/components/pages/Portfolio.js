import React from "react";

export default function Portfolio() {
	const projectPortfolioArr = [
		{
			name: '',
			image: '',
			repo: '',
			deployed: ''
		},
		{
			name: '',
			image: '',
			repo: '',
			deployed: ''
		},
		{
			name: '',
			image: '',
			repo: '',
			deployed: ''
		},
		{
			name: '',
			image: '',
			repo: '',
			deployed: ''
		},
		{
			name: '',
			image: '',
			repo: '',
			deployed: ''
		},
		{
			name: '',
			image: '',
			repo: '',
			deployed: ''
		},
	]


	return (
		<div>
			<h2>Portfolio Projects: </h2>
			<div>
				{projectPortfolioArr.map(({ name, image, repo, deployed, index }) => (
					<div className="col-lg-6 col-sm-10" key={index}>
						<a href={deployed} target='_blank' rel="noreferrer">
							<h2>{name}</h2>
							<img className="portfolioProjectImage" src={require(`../../../assets/images/${image}`)} alt={name} />
						</a>
						<a href={repo} target='_blank' rel="noreferrer">
							<h3>Repository</h3>
							<p>{repo}</p>
						</a>
					</div>
				))}
			</div>
		</div>
	)
}