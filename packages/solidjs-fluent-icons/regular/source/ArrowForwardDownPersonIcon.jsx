import { splitProps } from "solid-js"
function ArrowForwardDownPersonIcon(props) {
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
			<path d="M13.61 4.32L16.3 7h-4.55C8.8 6.9 7 5.27 7 3a.5.5 0 00-1 0v.2C6.11 6.03 8.48 8 12 8h4.3l-2.69 2.68-.06.07a.5.5 0 00.77.64l3.55-3.55.05-.07.04-.08.02-.06.02-.09v-.06.02a.5.5 0 00-.01-.1v-.03l-.03-.06-.03-.06-.05-.07-3.56-3.57-.07-.06a.5.5 0 00-.64.77zM7.5 11a2 2 0 11-4 0 2 2 0 014 0zM9 15.5C9 16.75 8 18 5.5 18S2 16.75 2 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default ArrowForwardDownPersonIcon
