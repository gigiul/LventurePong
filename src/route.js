import { Route, Routes } from "react-router-dom";
import App from "./App"
import Page from "./Pages/page"

const Root = () => {
	return (
		<Routes>
			<Route path="/" element={<App />}/>
			<Route path="/page" element={<Page />}/>
		</Routes>
	);
}

export default Root;