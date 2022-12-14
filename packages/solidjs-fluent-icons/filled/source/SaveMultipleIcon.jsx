import { splitProps } from "solid-js"
function SaveMultipleIcon(props) {
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
			<path d="M6 5.5V3H5a2 2 0 00-2 2v8c0 1.1.9 2 2 2v-4.5C5 9.67 5.67 9 6.5 9h5c.83 0 1.5.67 1.5 1.5V15a2 2 0 002-2V6.62a2 2 0 00-.59-1.41L12.8 3.59A2 2 0 0011.38 3H11v2.5c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 016 5.5zm1 0V3h3v2.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5zm5 9.5H6v-4.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V15zm-3.5 2c-.95 0-1.82-.38-2.45-1h7.45a2.5 2.5 0 002.5-2.5V6.05c.62.63 1 1.5 1 2.45v5a3.5 3.5 0 01-3.5 3.5h-5z" />
		</svg>
	)
}
export default SaveMultipleIcon
