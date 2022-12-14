import { splitProps } from "solid-js"
function WalkieTalkieIcon(props) {
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
			<path d="M8 7v2h4V7H8z" />
			<path d="M7.5 1c.28 0 .5.22.5.5V3h6.5c.83 0 1.5.67 1.5 1.5v7c0 .1-.03.2-.08.28L14 14.65v1.85c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 016 16.5v-1.85l-1.92-2.87A.5.5 0 014 11.5v-7C4 3.67 4.67 3 5.5 3H7V1.5c0-.28.22-.5.5-.5zM7 6.5v3c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5zm1 6c0 .28.22.5.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5z" />
		</svg>
	)
}
export default WalkieTalkieIcon
