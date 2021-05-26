import React, { Component } from "react";
import ReactStripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class Payments extends Component {
	render() {
		return (
			<ReactStripeCheckout
				name='Emaily'
				description='$5 for 5 survey credits'
				amount={500} // 5 USD
				token={(token) => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className='btn btn-primary'>Add credits</button>
			</ReactStripeCheckout>
		);
	}
}

export default connect(null, actions)(Payments);
