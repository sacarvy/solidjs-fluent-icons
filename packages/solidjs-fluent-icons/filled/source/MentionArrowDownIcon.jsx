import { splitProps } from "solid-js"
function MentionArrowDownIcon(props) {
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
			<path d="M10 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM5.15 7.85A.5.5 0 005.5 8a.5.5 0 00.35-.15l2-2a.5.5 0 10-.7-.7L6 6.29V3.5a.5.5 0 00-1 0v2.8L3.85 5.14a.5.5 0 10-.7.7l2 2zm7.6-.38a3.51 3.51 0 00-1.9-.7 5.46 5.46 0 01-.6 1.5c.09-.02.17-.02.25-.02 1.42 0 2.25 1.05 2.25 2.75 0 1.67-.87 2.75-2.25 2.75S8.25 12.67 8.25 11c0-.28.02-.53.06-.77-.47.28-1 .5-1.56.63V11c0 2.43 1.46 4.25 3.75 4.25 1.2 0 2.17-.5 2.83-1.32.55 1.14 1.47 1.82 2.67 1.82 2.03 0 3.25-1.92 3.25-4.75a8.25 8.25 0 00-8.97-8.22c.26.45.46.95.58 1.47H11A6.75 6.75 0 0117.75 11c0 2.1-.73 3.25-1.75 3.25S14.25 13.1 14.25 11V7.4a.75.75 0 00-1.5.07zm-9.97 2.81c.45.26.95.46 1.47.58V11a6.75 6.75 0 009.05 6.35.75.75 0 01.5 1.4A8.23 8.23 0 012.76 11l.03-.72z" />
		</svg>
	)
}
export default MentionArrowDownIcon
