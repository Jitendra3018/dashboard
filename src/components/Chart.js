import styled from "styled-components";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
	return (
		<Container>
			<Title>{title}</Title>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550bd" />
					<YAxis stroke="#5550bd" />
					{grid && (
						<CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
					)}
					<Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
		</Container>
	);
}

const Container = styled.div`
	margin: 20px;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Title = styled.h3`
	margin-bottom: 15px;
`;
