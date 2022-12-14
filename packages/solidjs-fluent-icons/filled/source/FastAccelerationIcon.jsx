import { splitProps } from "solid-js"
function FastAccelerationIcon(props) {
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
			<path d="M8.9 7.2a3.48 3.48 0 014.2 0l-1.08 1.08a2 2 0 00-2.04 0L8.9 7.2zM13 10a2 2 0 00-.28-1.02L13.8 7.9a3.48 3.48 0 010 4.2l-1.08-1.08A2 2 0 0013 10zm-2 2a2 2 0 001.02-.28l1.08 1.08a3.48 3.48 0 01-4.2 0l1.08-1.08A2 2 0 0011 12zm-2-2c0 .37.1.72.28 1.02L8.2 12.1a3.48 3.48 0 010-4.2l1.08 1.08A2 2 0 009 10zM6.1 5a6.98 6.98 0 00-1.43 8H3.5a.5.5 0 000 1h1.75c.26.36.54.7.85 1H1.5a.5.5 0 000 1h5.9a7 7 0 100-12H2.5a.5.5 0 000 1h3.6zM11 9a1 1 0 110 2 1 1 0 010-2z" />
		</svg>
	)
}
export default FastAccelerationIcon
