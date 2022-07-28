import { splitProps } from "solid-js"
function ArrowMoveIcon(props) {
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
			<path d="M10.53 2.22a.75.75 0 00-1.06 0L7.22 4.47a.75.75 0 001.06 1.06l.97-.97v2.69a.75.75 0 001.5 0V4.56l.97.97a.75.75 0 101.06-1.06l-2.25-2.25zM2.22 9.47c-.3.3-.3.77 0 1.06l2.25 2.25a.75.75 0 001.06-1.06l-.97-.97h2.69a.75.75 0 000-1.5H4.56l.97-.97a.75.75 0 00-1.06-1.06L2.22 9.47zm8.31 8.31l2.25-2.25a.75.75 0 10-1.06-1.06l-.97.97v-2.69a.75.75 0 00-1.5 0v2.69l-.97-.97a.75.75 0 00-1.06 1.06l2.25 2.25c.3.3.77.3 1.06 0zm5-10.56l2.25 2.25c.3.3.3.77 0 1.06l-2.25 2.25a.75.75 0 11-1.06-1.06l.97-.97h-2.69a.75.75 0 010-1.5h2.69l-.97-.97a.75.75 0 011.06-1.06z" />
		</svg>
	)
}
export default ArrowMoveIcon
