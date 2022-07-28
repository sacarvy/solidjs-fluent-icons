import { splitProps } from "solid-js"
function DismissCircleIcon(props) {
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
			<path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zM7.8 7.11l.08.06L10 9.3l2.12-2.12a.5.5 0 01.64-.06l.07.06c.17.18.2.44.06.64l-.06.07L10.7 10l2.12 2.12c.17.17.2.44.06.64l-.06.07a.5.5 0 01-.64.06l-.07-.06L10 10.7l-2.12 2.12a.5.5 0 01-.64.06l-.07-.06a.5.5 0 01-.06-.64l.06-.07L9.3 10 7.17 7.88a.5.5 0 01-.06-.64l.06-.07a.5.5 0 01.64-.06z" />
		</svg>
	)
}
export default DismissCircleIcon
