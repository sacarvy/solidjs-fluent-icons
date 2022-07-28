import { splitProps } from "solid-js"
function FlashIcon(props) {
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
			<path d="M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1 1.4L12.22 7h2.56c.95 0 1.4 1.14.77 1.81l-8.68 8.86c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77zM7.2 3a.06.06 0 00-.06.05L4.9 10.92c0 .04.02.08.06.08h1.91a.5.5 0 01.49.62l-1.33 5.3v.04l.03.03.04.01h.01l.03-.02 8.68-8.86a.06.06 0 00.01-.03v-.05a.08.08 0 00-.03-.03L14.77 8H11.5a.5.5 0 01-.47-.67l1.5-4.25a.06.06 0 00-.07-.08H7.21z" />
		</svg>
	)
}
export default FlashIcon
