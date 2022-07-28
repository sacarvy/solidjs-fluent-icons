import { splitProps } from "solid-js"
function TextDirectionHorizontalRightIcon(props) {
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
			<path d="M6.5 3c.3 0 .58.19.7.47l3 7.5a.75.75 0 01-1.4.56L8 9.5H5l-.8 2.03a.75.75 0 01-1.4-.56l3-7.5A.75.75 0 016.5 3zm0 2.77L5.6 8h1.8l-.9-2.23zm8.28-1.55a.75.75 0 10-1.06 1.06l.72.72h-3.69a.75.75 0 000 1.5h3.69l-.72.72a.75.75 0 001.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2zm0 7.5a.75.75 0 10-1.06 1.06l.72.72H3.75a.75.75 0 000 1.5h10.69l-.72.72a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2z" />
		</svg>
	)
}
export default TextDirectionHorizontalRightIcon
