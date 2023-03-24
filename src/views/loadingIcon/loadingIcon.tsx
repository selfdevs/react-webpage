/// Style imports
import Styles from "./style.module.scss"

/// Layouts

/// Controller

/// Models

/// Types

/// Images

/// Elements

export const LoadingIcon = (): JSX.Element => {
	return (
		<div className={`${Styles.loadingIcon}`}>
			<div key={0}></div>
			<div key={1}></div>
			<div key={2}></div>
			<div key={3}></div>
		</div>
	)
}
