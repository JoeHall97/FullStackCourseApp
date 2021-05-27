import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
import { PlusCircle } from "react-bootstrap-icons";

const Dashboard = () => {
	return (
		<div>
			<SurveyList />
			<div>
				<Link to='/surveys/new' className='btn mt-4 float-end float-bottom' style={{ paddingRight: "10%" }}>
					{/* <i className='medium material-icons'>add</i> */}
					<PlusCircle size={40} />
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
