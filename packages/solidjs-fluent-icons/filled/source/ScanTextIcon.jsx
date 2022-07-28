import { splitProps } from "solid-js"
function ScanTextIcon(props) {
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
			<path d="M6 4.5c-.83 0-1.5.67-1.5 1.5v1.75a.75.75 0 01-1.5 0V6a3 3 0 013-3h1.75a.75.75 0 010 1.5H6zm0 2.25c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 016 6.75zm0 3c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 016 9.75zM6.75 12a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zm5.5-9a.75.75 0 000 1.5H14c.83 0 1.5.67 1.5 1.5v1.75a.75.75 0 001.5 0V6a3 3 0 00-3-3h-1.75zm-8.5 8.5c.41 0 .75.34.75.75V14c0 .83.67 1.5 1.5 1.5h1.75a.75.75 0 010 1.5H6a3 3 0 01-3-3v-1.75c0-.41.34-.75.75-.75zm13.25.75a.75.75 0 00-1.5 0V14c0 .83-.67 1.5-1.5 1.5h-1.75a.75.75 0 000 1.5H14a3 3 0 003-3v-1.75z" />
		</svg>
	)
}
export default ScanTextIcon
