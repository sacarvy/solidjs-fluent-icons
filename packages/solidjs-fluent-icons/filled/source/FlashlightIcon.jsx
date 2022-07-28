import { splitProps } from "solid-js"
function FlashlightIcon(props) {
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
			<path d="M13.96 1.17c.27 0 .5.22.5.5v.83a.5.5 0 11-1 0v-.83c0-.28.22-.5.5-.5zm3.9.98c.19.2.19.5 0 .7l-1.5 1.5a.5.5 0 11-.71-.7l1.5-1.5c.2-.2.5-.2.7 0zM7 5.2v2.58l5.2 5.2h2.6L7 5.22zm8.7 7.29l1.1-1.09a2 2 0 000-2.82L11.4 3.2a2 2 0 00-2.82 0L7.5 4.29l8.2 8.2zm-4.7.7L6.8 9l-4.1 4.09a2 2 0 000 2.82L4.1 17.3a2 2 0 002.82 0L11 13.21zm-3.15-.35l-1 1a.5.5 0 01-.7-.7l1-1a.5.5 0 11.7.7zM17 6.05c0-.29.22-.5.5-.5h.83a.5.5 0 110 1h-.83a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default FlashlightIcon
