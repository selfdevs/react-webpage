import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

/// Style imports

/// Layouts
import { AppInfo } from "./views/appInfo"

/// Controller

/// Models

/// Types

/// Images

/// Elements

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<AppInfo />} />
			<Route path="about" element={<Link to="/">Back to home</Link>} />
		</Routes>
	</BrowserRouter>
)
