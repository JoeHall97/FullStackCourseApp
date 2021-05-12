import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

interface HeaderProps {
	auth: any;
}
interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
	renderContent(): JSX.Element[] {
		switch (this.props.auth) {
			case null:
			case false:
				return [
					<li key='1'>
						<a href='/auth/google'>Log In With Google</a>
					</li>,
				];
			default:
				return [
					<li key='1'>
						<Payments />
					</li>,
					<li key='3' style={{ margin: "0 10px" }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key='2'>
						<a href='/api/logout'>Log Out</a>
					</li>,
				];
		}
	}

	render(): JSX.Element {
		return (
			<nav className='navbar navbar-dark bg-dark'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to={this.props.auth ? "/surveys" : "/"}>
						Emaily
					</Link>
					<div className='d-flex'>
						<ul>{this.renderContent()}</ul>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state: { auth: any }) {
	return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
