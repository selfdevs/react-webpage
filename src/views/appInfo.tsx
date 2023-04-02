import React from "react"
import { Link } from "react-router-dom"

/// Style imports
import "styles/designTokens/global.scss"
import "styles/global.scss"

/// Layouts

/// Controller

/// Models
import { useInitThemeModel, useThemeModelContext } from "models/theme"

/// Types

/// Images

/// Elements
import { LoadingIcon } from "./loadingIcon/loadingIcon"

export const AppInfo = (): JSX.Element => {
	const [themeModel, setThemeModel] = useInitThemeModel()

	return (
		<div>
			<useThemeModelContext.Provider
				value={{ data: themeModel, setThemeModel }}>
				<div id={`${themeModel.currentColourMode}`}>
					<Link to="about">
						<LoadingIcon />
					</Link>
				</div>
			</useThemeModelContext.Provider>
		</div>
	)
}
