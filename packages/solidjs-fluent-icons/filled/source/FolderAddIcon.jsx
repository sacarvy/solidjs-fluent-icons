import { splitProps } from "solid-js"
function FolderAddIcon(props) {
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
			<path d="M9.39 4.29L8.07 3.3a1.5 1.5 0 00-.9-.3H4.5A2.5 2.5 0 002 5.5v1h5.07a.5.5 0 00.36-.16L9.4 4.3zm1.17.21l-2.4 2.53c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 004.5 17h5.1a5.5 5.5 0 018.4-6.74V6.84a2.5 2.5 0 00-2.5-2.34h-4.94zm8.44 10a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default FolderAddIcon
