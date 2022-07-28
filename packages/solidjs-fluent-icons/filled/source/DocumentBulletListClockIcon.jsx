import { splitProps } from "solid-js"
function DocumentBulletListClockIcon(props) {
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
			<path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h4.76a5.47 5.47 0 01-1.24-3H8.5a.5.5 0 010-1h.52c.03-.34.1-.68.19-1H8.5a.5.5 0 010-1h1.1c.18-.36.4-.7.66-1H8.5a.5.5 0 010-1h2.84A5.47 5.47 0 0116 9.2V8h-4.5A1.5 1.5 0 0110 6.5zm-4 4a.5.5 0 111 0 .5.5 0 01-1 0zm0 2a.5.5 0 111 0 .5.5 0 01-1 0zm.5 1.5a.5.5 0 110 1 .5.5 0 010-1z" />
			<path d="M11 6.5V2.25L15.75 7H11.5a.5.5 0 01-.5-.5z" />
			<path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-3a.5.5 0 00-1 0v3c0 .28.22.5.5.5h2a.5.5 0 000-1H15v-2.5z" />
		</svg>
	)
}
export default DocumentBulletListClockIcon
