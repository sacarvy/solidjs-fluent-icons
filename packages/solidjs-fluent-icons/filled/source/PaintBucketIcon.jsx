import { splitProps } from "solid-js"
function PaintBucketIcon(props) {
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
			<path d="M9 2.5a.5.5 0 00-1 0V4c-.2.07-.4.19-.56.35L2.35 9.44a1.5 1.5 0 000 2.12L6.7 15.9a1.5 1.5 0 002.12 0l5.09-5.09a1.5 1.5 0 000-2.12L9.56 4.35A1.5 1.5 0 009 4V2.5zm4.27 7.5H3.2L8 5.2v1.3a.5.5 0 001 0V5.2l4.19 4.2a.5.5 0 01.08.6zm2.75 1.4a.6.6 0 00-1.04 0l-1.65 2.82a2.51 2.51 0 104.34 0l-1.65-2.83z" />
		</svg>
	)
}
export default PaintBucketIcon
