import { splitProps } from "solid-js"
function MailAllUnreadIcon(props) {
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
			<path d="M14.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-3.16-4H4.5a2.5 2.5 0 00-2.48 2.22L9 8.92l3.26-1.73A3.5 3.5 0 0111.34 3zm1.97 4.8L9.25 9.92a.5.5 0 01-.5 0L2 6.37v6.13A2.5 2.5 0 004.5 15h9a2.5 2.5 0 002.5-2.5V7.66a3.49 3.49 0 01-2.7.13zM6.5 17a2.5 2.5 0 01-2-1h9a3.5 3.5 0 003.5-3.5v-5c.6.46 1 1.18 1 2v3a4.5 4.5 0 01-4.5 4.5h-7z" />
		</svg>
	)
}
export default MailAllUnreadIcon
