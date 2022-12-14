import { splitProps } from "solid-js"
function BorderBottomDoubleIcon(props) {
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
			<path d="M8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zM4.05 5.54a2 2 0 011.55-1.5.5.5 0 00.4-.59.5.5 0 00-.66-.38 3 3 0 00-2.29 2.34.5.5 0 00.4.6.5.5 0 00.6-.47zM14.6 3.05a3 3 0 012.36 2.36.5.5 0 01-.4.6.5.5 0 01-.6-.47 2 2 0 00-1.55-1.5.5.5 0 01-.4-.59.5.5 0 01.6-.4zM16.5 12a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM3 11.5a.5.5 0 001 0v-3a.5.5 0 00-1 0v3zm0 5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zm.5-2.5a.5.5 0 000 1h13a.5.5 0 000-1h-13z" />
		</svg>
	)
}
export default BorderBottomDoubleIcon
