import React from "react";
import './portfolio.css';


export default function Portfolio() {
	const projectPortfolioArr = [
		{
			name: 'Run Buddy',
			image: 'run_buddy_screenshot.png',
			repo: 'https://github.com/Tydomx/run-buddy',
			deployed: 'https://tydomx.github.io/run-buddy/'
		},
		{
			name: 'barkr meetup',
			image: 'barkr.png',
			repo: 'https://github.com/Tydomx/barkr-meetup',
			deployed: 'https://barkr-meetup.herokuapp.com/'
		},
		{
			name: 'Marvel Project',
			image: 'MarvelProjectScreenshot.png',
			repo: 'https://github.com/Tydomx/Marvel_project',
			deployed: 'https://tydomx.github.io/Marvel_project/'
		},
		{
			name: 'Code Quiz',
			image: 'codeQuiz.png',
			repo: 'https://github.com/Tydomx/Code_Quiz',
			deployed: 'https://tydomx.github.io/Code_Quiz/'
		},
		{
			name: 'Weather Dashboard',
			image: 'weatherDashboard.png',
			repo: 'https://github.com/Tydomx/weather-dashboard',
			deployed: 'https://tydomx.github.io/weather-dashboard/'
		},
		{
			name: 'Team Profile Generator',
			image: 'teamProfileGenerator.png',
			repo: 'https://github.com/Tydomx/team-profile-generator',
			deployed: 'https://www.youtube.com/watch?v=8-oJ8RnlSO4&feature=youtu.be'
		},
	];

	return (
		<section>
			<h2 className="portfolioTitle">Portfolio Projects: </h2>
			<div className="containerProjects">
				{projectPortfolioArr.map(({ name, image, repo, deployed, index }) => (
					<div className="col-lg-4 col-sm-6" key={index}>
						<h2 className="portfolioName">{name}</h2>
						<a href={deployed} target='_blank' rel="noreferrer">
							<img className="portfolioProjectImage flex-row"
								src={require(`../../../assets/images/${image}`)}
								alt={name}
								style={{ width: "75%", height: "275px" }} />
						</a>
						<div className="repoLink">
							<h3>Repo Link</h3>
							<a href={repo} target='_blank' rel="noreferrer">
								<p>{repo}</p>
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}