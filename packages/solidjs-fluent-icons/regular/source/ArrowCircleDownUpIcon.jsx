import { splitProps } from "solid-js"
function ArrowCircleDownUpIcon(props) {
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
			<path d="M7.35 13.85L9 12.21a.5.5 0 10-.7-.71l-.8.8V6.5a.5.5 0 00-1 0v5.8l-.8-.8a.5.5 0 10-.7.7l1.65 1.65c.2.2.5.2.7 0zM15 7.8l-1.65-1.64a.5.5 0 00-.7 0L11 7.79a.5.5 0 10.7.71l.8-.8v5.8a.5.5 0 101 0V7.7l.8.8a.5.5 0 10.7-.7zM18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8 7a7 7 0 100-14 7 7 0 000 14z" />
		</svg>
	)
}
export default ArrowCircleDownUpIcon
