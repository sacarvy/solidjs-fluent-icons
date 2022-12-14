import { splitProps } from "solid-js"
function DrawerAddIcon(props) {
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
			<path d="M13.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V5h1.5a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0V6h-1.5a.5.5 0 010-1H13V3.5c0-.28.22-.5.5-.5zM17 9.74V15a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h2.2c-.08.32-.15.66-.18 1H6a2 2 0 00-2 2h4.2c.1.35.24.68.4 1H4v3h3.5c.28 0 .5.22.5.5a2 2 0 104 0c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66zM14 17a2 2 0 002-2v-3h-3.04a3 3 0 01-5.92 0H4v3c0 1.1.9 2 2 2h8z" />
		</svg>
	)
}
export default DrawerAddIcon
