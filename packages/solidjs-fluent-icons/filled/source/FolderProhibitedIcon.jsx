import { splitProps } from "solid-js"
function FolderProhibitedIcon(props) {
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
			<path d="M9.39 4.29L8.07 3.3a1.5 1.5 0 00-.9-.3H4.5A2.5 2.5 0 002 5.5v1h5.07a.5.5 0 00.36-.16L9.4 4.3zm1.17.21l-2.4 2.53c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 004.5 17h5.1a5.5 5.5 0 018.4-6.74V6.84a2.5 2.5 0 00-2.5-2.34h-4.94zm-.56 10a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm4.5-3.5a3.5 3.5 0 00-2.8 5.6l4.9-4.9a3.48 3.48 0 00-2.1-.7zm0 7a3.5 3.5 0 002.8-5.6l-4.9 4.9c.59.44 1.31.7 2.1.7z" />
		</svg>
	)
}
export default FolderProhibitedIcon
