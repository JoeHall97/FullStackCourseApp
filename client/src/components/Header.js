import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import { Envelope } from "react-bootstrap-icons";

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return [
					<li className='nav-item px-2' key='0'>
						<a className='nav-link' href='/auth/google'>
							Log In With Google
						</a>
					</li>,
					<li className='nav-item px-2' key='1'>
						<a className='nav-link' href='/about'>
							About
						</a>
					</li>,
				];
			default:
				return [
					<li className='nav-item px-2' key='0'>
						<a className='nav-link' href='/about'>
							About
						</a>
					</li>,
					<li key='1' className='nav-item px-2'>
						<Payments />
					</li>,
					<li key='2' className='nav-item px-2 pt-2 text-white text-center'>
						Credits: {this.props.auth.credits}
					</li>,
					<li key='3' className='px-2 nav-item'>
						<a className='nav-link' href='/api/logout'>
							Log Out
						</a>
					</li>,
				];
		}
	}

	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-expand-xs navbar-dark bg-dark'>
				<div className='container-fluid'>
					<Link to={this.props.auth ? "/surveys" : "/"} className='navbar-brand'>
						<Envelope className='float-start me-3' size={45} />
						<h2 className='pt-1'>Emaily</h2>
					</Link>
					{/* <button
						className='float-end navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarTogglerDemo01'
						aria-controls='navbarTogglerDemo01'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div className='float-end collapse navbar-collapse'> */}
					<ul className='float-end navbar-nav'>{this.renderContent()}</ul>
					{/* </div> */}
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
