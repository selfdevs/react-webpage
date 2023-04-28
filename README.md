# Self.Dev

![License](https://img.shields.io/badge/license-MIT-green)

This is the website for the Self Dev community written in React and Typescript.

## Table of Contents

-   [Installation](#installation)
-   [File Structure](#file-structure)
-   [Developer Notes](#developer-notes)

## Installation

In the project directory, you can run the following scripts to install and run the software locally:

### `npm install`

Installs the packages needed to run the software locally.

### `npm start`

Runs the app in the development mode.

> [http://localhost:3000](http://localhost:3000)

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## File Structure

- #### views
	- Navigation
	- UI elements
	- Layouts
	- Styling
- #### components
	- UI elements
	- Layouts
	- Styling
- #### models
	- Data & State (definition)
	- Sharing data & state to views
- #### controllers
	- User interactions
	- Globally used functions
- #### public
	- Static files
- #### styles
	- Design tokens *(variables)*
	- Global styling
<!-- - #### types
	- Globally shared type definition
	- Types for exported items -->

## Developer Notes

- **ESLint** will **automatically** start **linting** any **staged files** when running **`git commit`**

### Code guidelines

- Javascript **ES6+**
- **Types** have to be **manually defined** and **assigned** where possible
	*Typescript should not automatically infer types*
- **Default exports** are only allowed in the **app** directory
	*Always **name exports** in **other** directories*
- Include the following **comments** at the top of **files with** (the potential of) **imports**:
<details><summary>Code:</summary>

	Views/Components/Models/Controllers:
	```javascript
/// Style imports
/// Layouts
/// Controller
/// Models
/// Types
/// Images
/// Elements
	```

</details>

- *(POTENTIALLY)* Any **information** from a **view** that needs to be **accessed** in **other views** needs to be put in the **model** and is passed through a **context** rather than props

### Naming convention

- **Exported variable names** are written in **upper camel case** *(Pascal case) `VariableName`*
- **Non-exported variable names** are written in **lower camel case** *(dromedary case) `variableName`*
	*Exception: **Array variable names** are written in **upper snake case** `VARIABLE_NAME`*
- **Type definition variable names** are written in **upper camel case** *(dromedary case)* and start with "Type" *`TypeVariableName`*

WHAT TO POTENTIALLY ADD: https://softwareengineering.stackexchange.com/a/280647
