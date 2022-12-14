import { splitProps } from "solid-js"
function GiftCardMultipleIcon(props) {
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
			<path d="M4.75 4H7v2.27A2 2 0 004.27 9H2V6.75A2.75 2.75 0 014.75 4zM2 12.25V10h4.3l-1.65 1.65a.5.5 0 00.7.7L7 10.71V15H4.75A2.75 2.75 0 012 12.25zM8 15h5.25A2.75 2.75 0 0016 12.25V10H8.7l1.65 1.65a.5.5 0 01-.7.7L8 10.71V15zm2.73-6H16V6.75A2.75 2.75 0 0013.25 4H8v2.27A2 2 0 0110.73 9zM8 9V8a1 1 0 111 1H8zM6 9h1V8a1 1 0 10-1 1zm.75 8c-.85 0-1.62-.39-2.12-1h8.62A3.75 3.75 0 0017 12.25v-5.5-.12c.61.5 1 1.27 1 2.12v3.5A4.75 4.75 0 0113.25 17h-6.5z" />
		</svg>
	)
}
export default GiftCardMultipleIcon
