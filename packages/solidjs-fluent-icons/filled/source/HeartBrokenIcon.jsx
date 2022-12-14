import { splitProps } from "solid-js"
function HeartBrokenIcon(props) {
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
			<path d="M9.27 4.18a4.3 4.3 0 00-6 .1 4.4 4.4 0 000 6.18l6.28 6.34c.26.27.69.27.95 0l6.24-6.3a4.4 4.4 0 00-.02-6.19 4.3 4.3 0 00-6.13-.01l-.59.59-1.34 2.06 3 2.53a.5.5 0 01.03.73l-2 2a.5.5 0 11-.71-.7l1.62-1.62-2.92-2.46a.5.5 0 01-.1-.66l1.7-2.6z" />
		</svg>
	)
}
export default HeartBrokenIcon
