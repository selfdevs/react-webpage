/// Style imports
import Styles from "./style.module.scss"

/// Layouts
import { NavigationBar } from "views/navigationBar/navigationBar"

/// Controller

/// Models

/// Types

/// Images

/// Elements

export const Home = (): JSX.Element => {
	return (
		<>
			<div id={`${Styles.navigationBar}`}>
				<NavigationBar />
			</div>
			Home
		</>
	)
}
