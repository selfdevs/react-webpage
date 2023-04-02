import React from "react"

/// Style imports

/// Layouts

/// Controller

/// Models
import { useInitThemeModel, useThemeModelContext } from "models/theme"

/// Types

/// Images

/// Elements

export const AppInfo = ({
	children
}: {
	children: React.ReactNode
}): JSX.Element => {
	const [themeModel, setThemeModel] = useInitThemeModel()

	return (
		<div>
			<useThemeModelContext.Provider
				value={{ data: themeModel, setThemeModel }}>
				<div id={`${themeModel.currentColourMode}`}>{children}</div>
			</useThemeModelContext.Provider>
		</div>
	)
}
