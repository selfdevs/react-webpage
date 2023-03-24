import React from "react"
import ReactDOM from "react-dom/client"

/// Style imports

/// Layouts
import { AppInfo } from "./views/appInfo"
import { LoadingIcon } from "./views/loadingIcon/loadingIcon"

/// Controller

/// Models

/// Types

/// Images

/// Elements

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<AppInfo>{LoadingIcon()}</AppInfo>
	</React.StrictMode>
)
