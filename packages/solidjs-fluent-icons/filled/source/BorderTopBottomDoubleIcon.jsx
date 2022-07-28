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
			<path d="M6 4.5a1.5 1.5 0 00-1.43 1.04.75.75 0 01-1.38-.58A3 3 0 016 3h8a3 3 0 012.81 1.96.75.75 0 01-1.38.58A1.5 1.5 0 0014 4.5H6zM3.75 11a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5c0 .41-.34.75-.75.75zm12.5 0a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5c0 .41-.34.75-.75.75zm-12.5 4.5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75zM3 13.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
		</svg>
	)
}
export default BorderTopBottomDoubleIcon
