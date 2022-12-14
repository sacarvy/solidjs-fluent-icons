import { splitProps } from "solid-js"
function ShareScreenPersonPIcon(props) {
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
			<path d="M2 7a3 3 0 013-3h10a3 3 0 013 3v3.34a3 3 0 10-4.73 3.67c-1.1.1-2 .92-2.22 1.99H5a3 3 0 01-3-3V7zm4 .5v5a.5.5 0 001 0V11h1a2 2 0 100-4H6.5a.5.5 0 00-.5.5zM7 10h1a1 1 0 000-2H7v2zm10.5 2a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default ShareScreenPersonPIcon
