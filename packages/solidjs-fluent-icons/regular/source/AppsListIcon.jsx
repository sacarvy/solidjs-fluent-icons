import { splitProps } from "solid-js"
function AppsListIcon(props) {
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
			<path d="M2 3.5C2 2.67 2.67 2 3.5 2h1C5.33 2 6 2.67 6 3.5v1C6 5.33 5.33 6 4.5 6h-1A1.5 1.5 0 012 4.5v-1zM3.5 3a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM2 9.5C2 8.67 2.67 8 3.5 8h1C5.33 8 6 8.67 6 9.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 012 10.5v-1zM3.5 9a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM2 15.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 012 16.5v-1zm1.5-.5a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM8 4.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 6c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 6c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default AppsListIcon
