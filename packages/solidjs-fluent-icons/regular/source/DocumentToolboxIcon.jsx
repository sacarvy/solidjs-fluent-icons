import { splitProps } from "solid-js"
function DocumentToolboxIcon(props) {
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
			<path d="M6 2a2 2 0 00-2 2v4.27A2 2 0 015 8V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1h-1v1h1a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM4 12v-1.5C4 9.67 4.67 9 5.5 9h2c.83 0 1.5.67 1.5 1.5V12h1.5c.83 0 1.5.67 1.5 1.5V15H9v-.5a.5.5 0 00-1 0v.5H5v-.5a.5.5 0 00-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H4zm1-1.5V12h3v-1.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zM9 16h3v1.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 011 17.5V16h3v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0V16z" />
		</svg>
	)
}
export default DocumentToolboxIcon
