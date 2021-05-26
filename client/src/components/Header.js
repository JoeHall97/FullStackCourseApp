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
				return (
					<li className='nav-item' key='0'>
						<a href='/auth/google'>Log In With Google</a>
					</li>
				);
			default:
				return [
					<li key='1' className='nav-item px-2'>
						<Payments />
					</li>,
					<li key='2' style={{ margin: "0 10px" }} className='nav-item px-2 pt-2 text-white text-center'>
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
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div className='container-fluid'>
					<Link to={this.props.auth ? "/surveys" : "/"} className='navbar-brand'>
						<Envelope className='me-3' size={45} />
						<h7>Emaily</h7>
					</Link>
					<ul className='float-end navbar-nav'>{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
