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
			<path d="M5 16c0 1.1.9 2 2 2h3.26a5.48 5.48 0 01-.76-5.8v-5L8.35 8.36a.5.5 0 11-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 01-.7.7L10.5 7.21v3.52a5.48 5.48 0 014.5-1.7V4a2 2 0 00-2-2H7a2 2 0 00-2 2v12zm14-1.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0l-2.65 2.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" />
		</svg>
	)
}
export default PhoneUpdateCheckmarkIcon
