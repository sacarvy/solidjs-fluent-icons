import { splitProps } from "solid-js"
function ScaleFillIcon(props) {
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
			<path d="M3 5c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm3.3 1.04a.5.5 0 00-.3.46v2a.5.5 0 001 0v-.8l1.15 1.15a.5.5 0 10.7-.7L7.71 7h.79a.5.5 0 000-1h-2a.5.5 0 00-.2.04zM6 11.5v2a.5.5 0 00.14.35.5.5 0 00.36.15h2a.5.5 0 000-1h-.8l1.15-1.15a.5.5 0 00-.7-.7L7 12.29v-.79a.5.5 0 00-1 0zm7.85-5.36A.5.5 0 0013.5 6h-2a.5.5 0 000 1h.8l-1.15 1.15a.5.5 0 00.7.7L13 7.71v.79a.5.5 0 001 0v-2a.5.5 0 00-.14-.35zm-.16 7.82a.5.5 0 00.3-.46v-2a.5.5 0 00-.99 0v.8l-1.15-1.15a.5.5 0 00-.7.7L12.29 13h-.79a.5.5 0 000 1h2a.5.5 0 00.2-.04z" />
		</svg>
	)
}
export default ScaleFillIcon
