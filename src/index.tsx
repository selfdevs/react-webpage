import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"

/// Style imports
import "styles/designTokens/global.scss"
import "styles/global.scss"

/// Layouts
import { AppInfo } from "./views/appInfo"
import { Home } from "views/home/home"

/// Controller

/// Models

/// Types

/// Images

/// Elements

const NoMatch = (): JSX.Element => {
	const navigate = useNavigate()

	React.useEffect(() => {
		navigate("/")
	})

	return <></>
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<BrowserRouter>
		<AppInfo>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="mainframe" element={<>Mainframe</>} />
				<Route path="ecosystem" element={<>Ecosystem</>} />
				<Route path="ambassadors" element={<>Ambassadors</>} />
				<Route path="contact" element={<>Contact</>} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</AppInfo>
	</BrowserRouter>
)
