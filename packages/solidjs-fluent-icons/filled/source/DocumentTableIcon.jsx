import { splitProps } from "solid-js"
function DocumentTableIcon(props) {
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
			<path d="M9 15v-2h4v1.5a.5.5 0 01-.5.5H9zm4-4.5V12H9v-2h3.5c.28 0 .5.22.5.5zM7 13h1v2h-.5a.5.5 0 01-.5-.5V13zm1-1v-2h-.5a.5.5 0 00-.5.5V12h1zm2-5.5V2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5zm-4 4C6 9.67 6.67 9 7.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 016 14.5v-4zm5-4V2.25L15.75 7H11.5a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default DocumentTableIcon
