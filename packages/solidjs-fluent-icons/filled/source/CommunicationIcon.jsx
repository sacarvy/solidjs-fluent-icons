import { splitProps } from "solid-js"
function CommunicationIcon(props) {
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
			<path d="M3.5 11a6.5 6.5 0 1111.1 4.6.75.75 0 101.06 1.05 8 8 0 10-11.33 0A.75.75 0 005.4 15.6 6.48 6.48 0 013.5 11zm3 0a3.5 3.5 0 115.98 2.47.75.75 0 101.06 1.06A4.99 4.99 0 0010 6a5 5 0 00-3.54 8.53.75.75 0 001.06-1.06A3.49 3.49 0 016.5 11zM10 9a2 2 0 100 4 2 2 0 000-4z" />
		</svg>
	)
}
export default CommunicationIcon
