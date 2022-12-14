import { splitProps } from "solid-js"
function ContactCardRibbonIcon(props) {
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
			<path d="M3.5 4C2.67 4 2 4.67 2 5.5v9c0 .83.67 1.5 1.5 1.5H13v-.35a3.98 3.98 0 01-.87-3.65h-.63a.5.5 0 010-1h1.04A4 4 0 0118 9.54V5.5c0-.83-.67-1.5-1.5-1.5h-13zm3 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.55.75c.53 0 .95.42.95.95 0 .85-.58 1.58-1.4 1.79l-.06.01a4.3 4.3 0 01-2.08 0l-.06-.01c-.82-.2-1.4-.94-1.4-1.8 0-.52.42-.94.95-.94h3.1zM11 8.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm8 4.5a3 3 0 11-6 0 3 3 0 016 0zm-1 3.46a3.98 3.98 0 01-4 0v2.29c0 .2.21.31.38.22L16 18l1.62.97c.17.1.38-.03.38-.22v-2.29z" />
		</svg>
	)
}
export default ContactCardRibbonIcon
