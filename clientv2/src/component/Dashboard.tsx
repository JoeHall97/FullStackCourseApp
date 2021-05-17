import { Link } from "react-router-dom";
import { PlusCircleFill } from "react-bootstrap-icons";

export const Dashboard = (): JSX.Element => {
	return (
		<div>
			<h1>Dashboard</h1>
			<Link to={"/surveys/new"}>
				<PlusCircleFill
					size="50"
					color="black"
					style={{ position: "absolute", bottom: "25px", right: "12%" }}
				/>
			</Link>
		</div>
	);
};
