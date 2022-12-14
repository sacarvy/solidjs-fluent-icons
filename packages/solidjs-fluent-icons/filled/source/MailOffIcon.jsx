import { splitProps } from "solid-js"
function MailOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L3.5 4.21a2.5 2.5 0 00-1.48 2.01l7.98 4.7.13-.08.73.73-.6.36a.5.5 0 01-.51 0L2 7.37v7.13A2.5 2.5 0 004.5 17h11c.24 0 .47-.03.7-.1l.95.95a.5.5 0 00.7-.7l-15-15zm9.8 8.37l5.09 5.1c.17-.34.26-.72.26-1.12V7.37l-5.35 3.15zM6.12 4l5.8 5.8 6.06-3.58A2.5 2.5 0 0015.5 4H6.12z" />
		</svg>
	)
}
export default MailOffIcon
