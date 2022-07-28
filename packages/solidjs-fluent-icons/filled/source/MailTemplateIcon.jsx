import { splitProps } from "solid-js"
function MailTemplateIcon(props) {
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
			<path d="M4.5 2A2.5 2.5 0 002 4.5v9A2.5 2.5 0 004.5 16h1.54a3.53 3.53 0 01-.04-.5v-4A3.5 3.5 0 019.5 8h6c.17 0 .34.01.5.04V4.5A2.5 2.5 0 0013.5 2h-9zM5 4.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm2 2c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm5.5 7.2l-5.3-3.17A2.5 2.5 0 019.5 9h6a2.5 2.5 0 012.3 1.53l-5.3 3.17zm.26 1L18 11.59v3.92a2.5 2.5 0 01-2.5 2.5h-6A2.5 2.5 0 017 15.5v-3.92l5.24 3.13c.16.1.36.1.52 0z" />
		</svg>
	)
}
export default MailTemplateIcon
