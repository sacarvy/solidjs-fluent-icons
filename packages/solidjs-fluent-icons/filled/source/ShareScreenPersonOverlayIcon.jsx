import { splitProps } from "solid-js"
function ShareScreenPersonOverlayIcon(props) {
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
			<path d="M2 7a3 3 0 013-3h10a3 3 0 013 3v3.34a3 3 0 10-4.73 3.67c-1.1.1-2 .92-2.22 1.99H5a3 3 0 01-3-3V7zm2 0v3a1 1 0 001 1h4a1 1 0 001-1V7a1 1 0 00-1-1H5a1 1 0 00-1 1zm13.5 5a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default ShareScreenPersonOverlayIcon
