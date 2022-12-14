import { splitProps } from "solid-js"
function BriefcaseOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L5.3 6.01A2.5 2.5 0 003 8.5v5A2.5 2.5 0 005.5 16h9c.24 0 .47-.03.7-.1l1.95 1.95a.5.5 0 00.7-.7l-1.73-1.74L2.85 2.15zM17 13.5c0 .4-.1.78-.26 1.12L8.12 6H12V4H8v1.88l-1-1V3.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6h1.5A2.5 2.5 0 0117 8.5v5z" />
		</svg>
	)
}
export default BriefcaseOffIcon
