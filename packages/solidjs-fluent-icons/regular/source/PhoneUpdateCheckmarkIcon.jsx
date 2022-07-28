import { splitProps } from "solid-js"
function PhoneUpdateCheckmarkIcon(props) {
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
			<path d="M6 16a1 1 0 001 1h2.6c.18.36.4.7.66 1H7a2 2 0 01-2-2V4c0-1.1.9-2 2-2h6a2 2 0 012 2v5.02a5.57 5.57 0 00-1 0V4a1 1 0 00-1-1H7a1 1 0 00-1 1v12zm3.5-3.8c.25-.54.6-1.04 1-1.47V7.2l1.15 1.14a.5.5 0 00.7-.7l-2-2a.5.5 0 00-.7 0l-2 2a.5.5 0 10.7.7L9.5 7.21v5zm9.5 2.3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0l-2.65 2.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" />
		</svg>
	)
}
export default PhoneUpdateCheckmarkIcon
