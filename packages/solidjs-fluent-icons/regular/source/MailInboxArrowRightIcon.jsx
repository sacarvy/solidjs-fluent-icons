import { splitProps } from "solid-js"
function MailInboxArrowRightIcon(props) {
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
			<path d="M13.5 1a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85A.5.5 0 0016 5.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L14.29 5H11.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2zM8.02 5H6a2 2 0 00-2 2v4h3.5c.28 0 .5.22.5.5v.01a1.64 1.64 0 00.03.3c.04.2.1.46.23.72.13.25.3.49.57.66.26.18.63.31 1.17.31.54 0 .9-.13 1.17-.3.26-.18.44-.42.57-.67A2.57 2.57 0 0012 11.5v-.01c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66V15a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h2.2c-.08.32-.15.66-.18 1zm-.97 7H4v3c0 1.1.9 2 2 2h8a2 2 0 002-2v-3h-3.05c-.05.26-.14.62-.32.97a2.7 2.7 0 01-.9 1.06c-.45.29-1.02.47-1.73.47s-1.28-.18-1.72-.47a2.7 2.7 0 01-.91-1.06c-.18-.35-.27-.7-.32-.97z" />
		</svg>
	)
}
export default MailInboxArrowRightIcon
