import { useParams } from "react-router-dom";

const Placeholder = () => {
	const { category } = useParams();
	return <p>{category}</p>;
};

export default Placeholder;
