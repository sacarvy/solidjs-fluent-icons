import { splitProps } from "solid-js"
function BorderTopBottomDoubleIcon(props) {
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
			<path d="M3.05 5.41A3 3 0 016 3h8a3 3 0 012.95 2.41.5.5 0 01-.4.6.5.5 0 01-.6-.47A2 2 0 0014 4H6a2 2 0 00-1.95 1.6.5.5 0 01-.6.4.5.5 0 01-.4-.59zM16.5 12a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zm-13 4a.5.5 0 000 1h13a.5.5 0 000-1h-13zM3 14.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zm0-3a.5.5 0 001 0v-3a.5.5 0 00-1 0v3z" />
		</svg>
	)
}
export default BorderTopBottomDoubleIcon
