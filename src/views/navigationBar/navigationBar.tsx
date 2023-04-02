import { Link } from "react-router-dom"

/// Style imports
import Styles from "./style.module.scss"

/// Layouts

/// Controller

/// Models

/// Types

/// Images

/// Elements

export const NavigationBar = (): JSX.Element => {
	return (
		<div id={`${Styles.contentContainer}`}>
			<Link className={`${Styles.menuElement}`} to="/">
				Home
			</Link>
			<Link className={`${Styles.menuElement}`} to="mainframe">
				Mainframe
			</Link>
			<Link className={`${Styles.menuElement}`} to="ecosystem">
				Ecosystem
			</Link>
			<Link className={`${Styles.menuElement}`} to="ambassadors">
				Ambassadors
			</Link>
			<Link className={`${Styles.menuElement}`} to="contact">
				Contact
			</Link>
		</div>
	)
}
