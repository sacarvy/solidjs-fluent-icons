import { splitProps } from "solid-js"
function MailLinkIcon(props) {
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
			<path d="M12.5 3a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zM16 3a.5.5 0 000 1h.5a1.5 1.5 0 010 3H16a.5.5 0 000 1h.5a2.5 2.5 0 000-5H16zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm-3 0c0-.54.12-1.05.34-1.5H4.5a2.5 2.5 0 00-2.48 2.22l7.98 4.7L13.26 9h-.76A3.5 3.5 0 019 5.5zM16.5 9h-1.27l-4.98 2.93a.5.5 0 01-.5 0L2 7.37v7.13A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5V8.66c-.45.22-.96.34-1.5.34z" />
		</svg>
	)
}
export default MailLinkIcon
