import React from "react";
import LoginScreen from "../content/images/LoginScreen.png";
import LandingPage from "../content/images/LandingPage.png";
import StripeCheckout from "../content/images/StripeCheckout.png";
import SurveyPage from "../content/images/SurveyPage.png";
import "./About.css";

const About = () => {
	return (
		<div className='text-center pt-5' style={{ width: "100%" }}>
			<h1>About This Website</h1>
			<p className='pt-2'>
				Emaily is a demo website, created by <a href='https://github.com/JoeHall97'>Joseph Hall</a>, that
				allows for users to send out email surveys and collect the results of the surveys. This is a website
				built as part of a{" "}
				<a href='https://www.udemy.com/course/node-with-react-fullstack-web-development/'>Udemy course</a>,
				and has been extended to add a new design and features.
			</p>
			<h2 className='pt-5'>How To Use The Website</h2>
			<div className='container' style={{ margin: "auto", width: "80%" }}>
				<div className='row pt-4'>
					<div className='col-lg-6 col-sm-12'>
						<img src={LoginScreen} className='img-thumbnail' alt='Image of the front page' />
					</div>
					<div className='col-lg-6 col-sm-12'>
						<p>
							To create a new account, or login to an existing account, you will need to login with google.
						</p>
					</div>
				</div>
				<div className='row pt-4'>
					<div className='col-lg-6 order-sm-12 col-sm-12'>
						<p>
							Once you've logged in you'll be redirected to the landing page. From here, you'll be able to see
							all of the surveys that you've sent, along with results. You can also add credits to your
							account, and create a new survey (by pressing the plus button at the bottom right).
						</p>
					</div>
					<div className='col-lg-6 order-sm-1 col-sm-12'>
						<img src={LandingPage} className='img-thumbnail' alt='Image of the landing page' />
					</div>
				</div>
				<div className='row pt-4'>
					<div className='col-lg-4 col-sm-12'>
						<img className='img-thumbnail' src={StripeCheckout} alt='Image of the stripe checkout' />
					</div>
					<div className='col-lg-8 col-sm-12'>
						<p>
							Since this is just a demo website, no actual credit card information is needed. Just enter in an
							email that is in the correct format, a card number of: 4242 4242 4242 42424, a valid expiration
							date, and a valid csv. Check the image for an example.
						</p>
					</div>
				</div>
				<div className='row py-4'>
					<div className='col-lg-6 order-sm-12 col-sm-12'>
						<p>
							To send out a survey you must provide:
							<ul>
								<li>A Survey Title</li>
								<li>The subject line of the email.</li>
								<li>
									The body of the email, which should contain the question you wish to pose to the recipients.
								</li>
								<li>A list of recipients, which should be a set of email addresses separated by commas.</li>
							</ul>
						</p>
					</div>
					<div className='col-lg-6 order-sm-1 col-sm-12'>
						<img className='img-thumbnail' src={SurveyPage} alt='Image of the survey creation page' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
