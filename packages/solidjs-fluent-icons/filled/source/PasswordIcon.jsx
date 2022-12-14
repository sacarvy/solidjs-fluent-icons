import { splitProps } from "solid-js"
function PasswordIcon(props) {
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
			<path d="M2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75v5.5A2.75 2.75 0 0115.25 15H4.75A2.75 2.75 0 012 12.25v-5.5zm5.15 1.4l-.65.64-.65-.64a.5.5 0 10-.7.7l.64.65-.64.65a.5.5 0 00.7.7l.65-.64.65.64a.5.5 0 00.7-.7l-.64-.65.64-.65a.5.5 0 10-.7-.7zm4 0l-.65.64-.65-.64a.5.5 0 10-.7.7l.64.65-.64.65a.5.5 0 00.7.7l.65-.64.65.64a.5.5 0 00.7-.7l-.64-.65.64-.65a.5.5 0 00-.7-.7zM13 10.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5z" />
		</svg>
	)
}
export default PasswordIcon
