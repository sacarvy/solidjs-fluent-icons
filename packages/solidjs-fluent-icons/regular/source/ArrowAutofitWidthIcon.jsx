import { splitProps } from "solid-js"
function ArrowAutofitWidthIcon(props) {
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
			<path d="M16.37 15l-1.18 1.14a.5.5 0 10.7.72l1.88-1.82c.3-.3.3-.78 0-1.08l-1.88-1.82a.5.5 0 10-.7.72L16.38 14H12.5a.5.5 0 100 1h3.87zM15 3a2 2 0 012 2v4.5a.5.5 0 01-1 0V5a1 1 0 00-1-1H5a1 1 0 00-1 1v4.5a.5.5 0 01-1 0V5c0-1.1.9-2 2-2h10zM4.81 16.14L3.63 15H7.5a.5.5 0 100-1H3.63l1.18-1.14a.5.5 0 00-.7-.72l-1.88 1.82c-.3.3-.3.79 0 1.08l1.89 1.82a.5.5 0 10.69-.72z" />
		</svg>
	)
}
export default ArrowAutofitWidthIcon
