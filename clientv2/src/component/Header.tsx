import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FetchUserActionPayload } from "../actions";
import Payments from "./Payments";

interface HeaderProps {
	auth: FetchUserActionPayload | false | null;
}
interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
	renderContent(): JSX.Element[] {
		switch (this.props.auth) {
			case null:
				return [<div></div>];
			case false:
				return [
					<li className="nav-item" key="1">
						<a href="/auth/google">Log In With Google</a>
					</li>,
				];
			default:
				return [
					<li className="nav-item me-4" key="2">
						<Payments />
					</li>,
					<li className="nav-item me-4" key="3">
						Credits: {this.props.auth.credits}
					</li>,
					<li className="nav-item" key="4">
						<a href="/api/logout">Log Out</a>
					</li>,
				];
		}
	}

	render(): JSX.Element {
		return (
			<nav
				className="navbar navbar-expand-lg navbar-dark bg-dark text-light text-center"
				style={{ fontSize: "1.15rem" }}
			>
				<div className="container-fluid">
					<Link className="navbar-brand" to={this.props.auth ? "/surveys" : "/"}>
						Emaily
					</Link>
					<div>
						<ul className="navbar-nav mx-2 mx-lg-2 justify-content-end">{this.renderContent()}</ul>
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
