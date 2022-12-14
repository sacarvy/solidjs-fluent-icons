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
			<path d="M13.43 4.75L15.7 7h-3.95c-2.8-.1-4.49-1.62-4.49-3.75a.75.75 0 00-1.5 0v.21C5.87 6.42 8.35 8.5 12 8.5h3.69l-2.26 2.26-.07.08a.75.75 0 001.13.98l3.54-3.54a.75.75 0 00.09-.1l.03-.06.05-.1.03-.1.02-.1V7.68l-.01-.06-.02-.07-.03-.09-.05-.1-.04-.05-.07-.08-3.54-3.54-.08-.07a.75.75 0 00-.98 1.14zM7.5 11a2 2 0 11-4 0 2 2 0 014 0zM9 15.5C9 16.75 8 18 5.5 18S2 16.75 2 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default ArrowForwardDownPersonIcon
