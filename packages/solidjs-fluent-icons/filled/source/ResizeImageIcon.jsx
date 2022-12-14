import { splitProps } from "solid-js"
function ResizeImageIcon(props) {
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
			<path d="M5.25 2A3.25 3.25 0 002 5.25v3a.75.75 0 001.5 0v-3c0-.97.78-1.75 1.75-1.75h3a.75.75 0 000-1.5h-3zm6.5 0a.75.75 0 000 1.5h3c.97 0 1.75.78 1.75 1.75v3a.75.75 0 001.5 0v-3C18 3.45 16.54 2 14.75 2h-3zM18 11.75a.75.75 0 00-1.5 0v3c0 .97-.78 1.75-1.75 1.75h-3a.75.75 0 000 1.5h3c1.8 0 3.25-1.46 3.25-3.25v-3zM1 12.5A2.5 2.5 0 013.5 10h4a2.5 2.5 0 012.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 00-2.12 0L1.4 17.88C1.15 17.48 1 17 1 16.5v-4zm7 .25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-5.88 5.84c.4.26.87.41 1.38.41h4c.51 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 00-.7 0L2.12 18.6z" />
		</svg>
	)
}
export default ResizeImageIcon
