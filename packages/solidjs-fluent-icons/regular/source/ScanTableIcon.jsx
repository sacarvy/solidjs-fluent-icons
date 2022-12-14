import { splitProps } from "solid-js"
function ScanTableIcon(props) {
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
			<path d="M6 4a2 2 0 00-2 2v1.5a.5.5 0 01-1 0V6a3 3 0 013-3h1.5a.5.5 0 010 1H6zm2 2a2 2 0 00-2 2v4c0 1.1.9 2 2 2h4a2 2 0 002-2V8a2 2 0 00-2-2H8zm5 2H7a1 1 0 011-1h4a1 1 0 011 1zM7 9h6v3a1 1 0 01-1 1H8a1 1 0 01-1-1V9zm5.5-6a.5.5 0 000 1H14a2 2 0 012 2v1.5a.5.5 0 001 0V6a3 3 0 00-3-3h-1.5zm-9 9c.28 0 .5.22.5.5V14c0 1.1.9 2 2 2h1.5a.5.5 0 010 1H6a3 3 0 01-3-3v-1.5c0-.28.22-.5.5-.5zm13.5.5a.5.5 0 00-1 0V14a2 2 0 01-2 2h-1.5a.5.5 0 000 1H14a3 3 0 003-3v-1.5z" />
		</svg>
	)
}
export default ScanTableIcon
