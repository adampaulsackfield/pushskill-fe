import React from 'react';
import { StyledAbout } from '../styles/About.style';

const About = () => {
	return (
		<StyledAbout>
			<section>
				<h1>About Us</h1>
				<div>
					<p>
						<span>.push(skill)</span> was created as a platform to allow anyone
						who wants to self learn a new skill to pair up with someone who can
						encourage them
						<br />
						and hold them accountable to goals they have set themselves. The
						thinking being that if you have no one to ask you how your learning
						is going
						<br />
						it is easier to let it slip and not complete tasks. Users can also
						gain achievements as a way of gamifying the learning experience.
						<br />
						<br />
						The site allows a user to sign up or log in. Once they have logged
						in users will see a list of people who have been selected as they
						share traits
						<br />
						with the user. From there the user can select one of these people to
						become your learning buddy. They can then chat to them in real time.
						<br />
						The User can also view their profile and see any achievements they
						have earned.
					</p>
				</div>
				<div className='social-links'>
					Team members:
					<p>
						Adam Sackfield |{' '}
						<a href='https://github.com/adampaulsackfield'>adampaulsackfield</a>
					</p>
					<p>
						Dane Whitfield |{' '}
						<a target='blank' href='https://github.com/danewhitfield'>
							danewhitfield
						</a>
					</p>
					<p>
						Owen Corrigan |{' '}
						<a href='https://github.com/ojcorrigan'>ojcorrigan</a>
					</p>
				</div>
			</section>
		</StyledAbout>
	);
};

export default About;
