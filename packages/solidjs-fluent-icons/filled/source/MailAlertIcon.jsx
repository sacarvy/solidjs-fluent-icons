import { splitProps } from "solid-js"
function MailAlertIcon(props) {
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
			<path d="M11.5 4a3 3 0 016 0v2l1.32 1.12a.5.5 0 01-.33.88H10.5a.5.5 0 01-.32-.88L11.5 6V4zm3 6a1.5 1.5 0 01-1.42-1h2.83c-.2.58-.76 1-1.41 1zm-4-4.46l-.97.82A1.5 1.5 0 0010.5 9h1.52l.12.33.11.27L10 10.92l-7.98-4.7A2.5 2.5 0 014.5 4h6v1.54zm-.25 6.4l2.62-1.55a2.49 2.49 0 003.99-1.06l.11-.33H18v5.5a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5V7.37l7.75 4.56c.15.1.35.1.5 0z" />
		</svg>
	)
}
export default MailAlertIcon
