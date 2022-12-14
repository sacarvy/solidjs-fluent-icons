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
			<path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5.8l-1.65 1.65a.5.5 0 01-.7 0L5 12.21a.5.5 0 11.7-.71l.8.8V6.5a.5.5 0 011 0v5.8l.8-.8a.5.5 0 11.7.7zm6-4.4a.5.5 0 01-.7.7l-.8-.8v5.8a.5.5 0 01-1 0V7.7l-.8.8a.5.5 0 11-.7-.7l1.65-1.65c.2-.2.5-.2.7 0L15 7.79z" />
		</svg>
	)
}
export default ArrowCircleDownUpIcon
