import { splitProps } from "solid-js"
function BugProhibitedIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			shape-rendering="geometricPrecision"
			fill="currentColor"
			aria-hidden="true"
			preserveAspectRatio="xMidYMid meet"
			style={
				typeof props?.style === "string"
					? `display:${props?.hidden ? "none" : "block"}` + ";" + props.style
					: { display: props?.hidden ? "none" : "block", ...props?.style }
			}
			ref={props.ref}
			{...others}
		>
			<path d="M14.5 10a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM11 14.5a3.5 3.5 0 015.6-2.8l-4.9 4.9c-.46-.6-.7-1.34-.7-2.1zm3.5 3.5c-.76 0-1.5-.24-2.1-.7l4.9-4.9a3.48 3.48 0 01-.33 4.57A3.5 3.5 0 0114.5 18zM17 3.5a.5.5 0 00-1 0v2A1.5 1.5 0 0114.5 7H14a3 3 0 00-2.31-2.92A2 2 0 0012 3v-.5a.5.5 0 00-1 0V3a1 1 0 01-2 0v-.5a.5.5 0 10-1 0V3c0 .38.1.76.31 1.08A3 3 0 006 7h-.5A1.5 1.5 0 014 5.5v-2a.5.5 0 10-1 0v2A2.5 2.5 0 005.5 8H6v1.5H2.5a.5.5 0 100 1H6V12h-.5A2.5 2.5 0 003 14.5v2a.5.5 0 001 0v-2A1.5 1.5 0 015.5 13H6a3.99 3.99 0 003.59 3.96 5.46 5.46 0 01.85-6.17A5.5 5.5 0 0114 9.03V8h.5A2.5 2.5 0 0017 5.5v-2z" />
		</svg>
	)
}
export default BugProhibitedIcon
