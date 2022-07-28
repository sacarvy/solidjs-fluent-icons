import { splitProps } from "solid-js"
function DesktopCursorIcon(props) {
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
			<path d="M3.5 2C2.67 2 2 2.67 2 3.5v10c0 .83.67 1.5 1.5 1.5H7v2H5.5a.5.5 0 000 1H11v-1H8v-2h3v-4.5a1.5 1.5 0 012.56-1.07l4.4 4.37c.03-.1.04-.2.04-.3v-10c0-.83-.67-1.5-1.5-1.5h-13zm9.36 8.14a.5.5 0 00-.86.36v8a.5.5 0 00.9.3l2-2.65 3.5.78a.5.5 0 00.45-.84l-6-5.95z" />
		</svg>
	)
}
export default DesktopCursorIcon
