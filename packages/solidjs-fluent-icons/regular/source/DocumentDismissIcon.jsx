import { splitProps } from "solid-js"
function DocumentDismissIcon(props) {
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
			<path d="M6 2a2 2 0 00-2 2v5.2c.32-.08.66-.15 1-.18V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1h-3.6c-.18.36-.4.7-.66 1H14a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM8.67 17.68a4.5 4.5 0 10-6.36-6.36 4.5 4.5 0 006.36 6.36zm-4.95-4.95c.2-.2.51-.2.7 0L5.5 13.8l1.06-1.06a.5.5 0 11.7.7L6.22 14.5l1.06 1.06a.5.5 0 11-.71.7L5.5 15.22l-1.06 1.06a.5.5 0 11-.7-.71l1.05-1.06-1.06-1.06a.5.5 0 010-.7z" />
		</svg>
	)
}
export default DocumentDismissIcon
