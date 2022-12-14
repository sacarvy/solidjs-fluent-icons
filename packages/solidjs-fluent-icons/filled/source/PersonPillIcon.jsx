import { splitProps } from "solid-js"
function PersonPillIcon(props) {
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
			<path d="M10 2a4 4 0 100 8 4 4 0 000-8zm2.88 9l-2.94 2.94a3.62 3.62 0 00-.75 4.03 8.59 8.59 0 01-4.06-1.17A4.35 4.35 0 013 13a2 2 0 012-2h7.88zm5.47-.35a2.62 2.62 0 00-3.7 0l-4 4a2.62 2.62 0 003.7 3.7l4-4a2.62 2.62 0 000-3.7zm-3 .7a1.62 1.62 0 112.3 2.3L16 15.29 13.7 13l1.65-1.65zm-1.5 4.3c.2.2.2.5 0 .7l-1 1a.5.5 0 01-.7-.7l1-1c.2-.2.5-.2.7 0z" />
		</svg>
	)
}
export default PersonPillIcon
