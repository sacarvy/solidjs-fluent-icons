import { splitProps } from "solid-js"
function FolderLinkIcon(props) {
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
			<path d="M9.39 4.29L8.07 3.3a1.5 1.5 0 00-.9-.3H4.5A2.5 2.5 0 002 5.5v1h5.07a.5.5 0 00.36-.16L9.4 4.3zm1.17.21l-2.4 2.53c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 004.5 17h2.26a4.5 4.5 0 013.74-7h5c.93 0 1.79.28 2.5.76V6.84a2.5 2.5 0 00-2.5-2.34h-4.94zM8 14.5a2.5 2.5 0 012.5-2.5h1a.5.5 0 000-1h-1a3.5 3.5 0 100 7h1a.5.5 0 000-1h-1A2.5 2.5 0 018 14.5zm10 0a2.5 2.5 0 00-2.5-2.5h-1a.5.5 0 010-1h1a3.5 3.5 0 110 7h-1a.5.5 0 010-1h1a2.5 2.5 0 002.5-2.5zm-8 0c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default FolderLinkIcon
