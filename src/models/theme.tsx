import React from "react"

/// Style imports

/// Layouts

/// Controller

/// Models

/// Types

/// Images

/// Elements

export type TypeThemeModel = {
	currentColourMode: "dark" | "light"
}

export type TypeThemeModelInit = [
	TypeThemeModel,
	React.Dispatch<React.SetStateAction<TypeThemeModel>>
]

export const useInitThemeModel = (): TypeThemeModelInit =>
	React.useState({
		currentColourMode: "dark"
	})

type TypeThemeModelUse = {
	data: TypeThemeModel
	setThemeModel: React.Dispatch<React.SetStateAction<TypeThemeModel>>
}

export const useThemeModelContext: React.Context<TypeThemeModelUse | null> =
	React.createContext(null)

export const useThemeModel = (): TypeThemeModelUse =>
	React.useContext(useThemeModelContext)
