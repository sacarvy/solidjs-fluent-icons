import { splitProps } from "solid-js"
function StarArrowRightEndIcon(props) {
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
			<path d="M10.9 2.56a1 1 0 00-1.8 0L7.17 6.45l-4.31.62a1 1 0 00-.56 1.7l3.13 3.03-.74 4.28a1 1 0 001.45 1.05l3.05-1.6a5.44 5.44 0 01-.17-1.03l-3.35 1.75.74-4.28a1 1 0 00-.29-.88L3 8.06l4.32-.63a1 1 0 00.75-.54L10 2.99l1.93 3.9c.15.3.43.5.75.54l4.32.63-.85.82c.35.11.69.25 1 .42l.55-.53a1 1 0 00-.56-1.7l-4.31-.62-1.93-3.9zM19 14.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-4.15 2.35a.5.5 0 01-.7-.7L15.29 15H12.5a.5.5 0 010-1h2.8l-1.15-1.15a.5.5 0 01.7-.7l2 2a.5.5 0 01.15.35.5.5 0 01-.14.35l-2 2z" />
		</svg>
	)
}
export default StarArrowRightEndIcon
