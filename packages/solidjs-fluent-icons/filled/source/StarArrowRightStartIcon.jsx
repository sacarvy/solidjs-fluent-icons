import { splitProps } from "solid-js"
function StarArrowRightStartIcon(props) {
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
			<path d="M9.1 2.56a1 1 0 011.8 0l1.93 3.9 4.31.64a1 1 0 01.56 1.7l-3.13 3.05.74 4.3a1 1 0 01-1.45 1.05l-2.98-1.57a5.52 5.52 0 00-7.8-6.07L2.3 8.8a1 1 0 01.56-1.7l4.31-.63L9.1 2.56zM5.5 10a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85A.5.5 0 008 14.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L6.29 14H3.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" />
		</svg>
	)
}
export default StarArrowRightStartIcon
