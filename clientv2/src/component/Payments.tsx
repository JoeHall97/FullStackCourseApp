import ReactStripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

const Payments = (props: any): JSX.Element => {
	return (
		<ReactStripeCheckout
			name='Emaily'
			description='$5 for 5 survey credits'
			amount={500} // 5 USD
			token={(token) => props.handleToken(token)}
			stripeKey={process.env.REACT_APP_STRIPE_KEY}
		>
			<button className='btn btn-secondary'>Add Credits</button>
		</ReactStripeCheckout>
	);
};

export default connect(null, actions)(Payments);
