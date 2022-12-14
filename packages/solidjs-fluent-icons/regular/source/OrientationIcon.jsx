import { splitProps } from "solid-js"
function OrientationIcon(props) {
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
			<path d="M3.25 5a.25.25 0 00-.25.25v.25a.5.5 0 01-1 0v-.25C2 4.56 2.56 4 3.25 4h.25a.5.5 0 010 1h-.25z" />
			<path d="M5 4.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" />
			<path d="M8 4.5c0-.28.22-.5.5-.5h.25C9.44 4 10 4.56 10 5.25v.25a.5.5 0 01-1 0v-.25A.25.25 0 008.75 5H8.5a.5.5 0 01-.5-.5z" />
			<path d="M14.85 5.85l-.15.16a3.5 3.5 0 01-.2 6.99.5.5 0 010-1 2.5 2.5 0 00.22-5l.13.15a.5.5 0 01-.7.7l-1-1a.5.5 0 010-.7l1-1a.5.5 0 01.7.7z" />
			<path d="M2 10.5C2 9.67 2.67 9 3.5 9h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 012 14.5v-4zm1.5-.5a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h8a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-8z" />
			<path d="M9.5 9a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z" />
			<path d="M3 7.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1z" />
		</svg>
	)
}
export default OrientationIcon
