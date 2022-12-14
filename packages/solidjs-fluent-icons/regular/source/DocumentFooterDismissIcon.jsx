import { splitProps } from "solid-js"
function DocumentFooterDismissIcon(props) {
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
			<path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7L15.21 5.5l1.14-1.15zM15 16v-5.02c.34-.03.68-.1 1-.19V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2h4.26c-.26.3-.48.64-.66 1H6a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1zm-8-2a1 1 0 100 2h6a1 1 0 100-2H7z" />
		</svg>
	)
}
export default DocumentFooterDismissIcon
