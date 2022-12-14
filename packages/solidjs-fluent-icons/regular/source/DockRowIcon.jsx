import { splitProps } from "solid-js"
function DockRowIcon(props) {
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
			<path d="M3 4c-.83 0-1.5.67-1.5 1.5v2C1.5 8.33 2.17 9 3 9h2c.83 0 1.5-.67 1.5-1.5v-2C6.5 4.67 5.83 4 5 4H3zm-.5 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2A.5.5 0 015 8H3a.5.5 0 01-.5-.5v-2zM3 10c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H3zm-.5 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-2zm5-6C7.5 4.67 8.17 4 9 4h2c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H9a1.5 1.5 0 01-1.5-1.5v-2zM9 5a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 00.5-.5v-2A.5.5 0 0011 5H9zm0 5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H9zm-.5 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5v-2zm5-6c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 01-1.5-1.5v-2zM15 5a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 00.5-.5v-2A.5.5 0 0017 5h-2zm0 5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2zm-.5 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2z" />
		</svg>
	)
}
export default DockRowIcon
