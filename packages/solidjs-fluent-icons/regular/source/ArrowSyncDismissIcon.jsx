import { splitProps } from "solid-js"
function ArrowSyncDismissIcon(props) {
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
			<path d="M11.41 2.93c.2.2.2.51 0 .7l-.01.02a6.48 6.48 0 00-6 1.75 6.5 6.5 0 00.7 9.8.5.5 0 11-.6.8A7.5 7.5 0 019.59 2.5l-1-.99a.5.5 0 01.71-.7l2.12 2.12zm-2.8 13.42l-.02.01a.5.5 0 000 .71l2.12 2.12a.5.5 0 00.7-.7l-1-1a7.5 7.5 0 004.07-13.5.5.5 0 10-.59.8 6.5 6.5 0 01-5.3 11.55zm3.24-8.2c.2.2.2.5 0 .7L10.71 10l1.14 1.15a.5.5 0 01-.7.7L10 10.71l-1.15 1.14a.5.5 0 01-.7-.7L9.29 10 8.15 8.85a.5.5 0 11.7-.7L10 9.29l1.15-1.14c.2-.2.5-.2.7 0zM5 10a5 5 0 1110 0 5 5 0 01-10 0zm5-4a4 4 0 100 8 4 4 0 000-8z" />
		</svg>
	)
}
export default ArrowSyncDismissIcon
