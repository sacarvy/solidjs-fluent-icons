import { splitProps } from "solid-js"
function GlassesOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L4.89 5.6 2.36 8.52c-.22.27-.36.6-.36.98v3A2.5 2.5 0 004.5 15h2A2.5 2.5 0 009 12.5V11h1.3l.7.7v.8a2.5 2.5 0 002.5 2.5h.8l2.85 2.85a.5.5 0 00.7-.7l-15-15zM7.3 8H4.14L5.6 6.3 7.3 8zm9.48 6.65L11.1 8.97A1.5 1.5 0 0112.5 8h3.36l-2.29-2.65a1 1 0 00-.76-.35H12a.5.5 0 010-1h.81a2 2 0 011.52.7l3.2 3.71c.29.28.47.66.47 1.09v3c0 .92-.5 1.72-1.23 2.15zM6.32 4.2l.8.8a1 1 0 01.07 0H8a.5.5 0 000-1h-.81a2 2 0 00-.87.2z" />
		</svg>
	)
}
export default GlassesOffIcon
