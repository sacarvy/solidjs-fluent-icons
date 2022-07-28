import { splitProps } from "solid-js"
function ReceiptMoneyIcon(props) {
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
			<path d="M6 2a2 2 0 00-2 2v7h1V4a1 1 0 011-1h7a1 1 0 011 1v11h-3v1h4a3 3 0 003-3v-2h-3V4a2 2 0 00-2-2H6zm11 11a2 2 0 01-2 2v-3h2v1zM7.5 5a.5.5 0 000 1h4a.5.5 0 000-1h-4zM7 7.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM8.5 12c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 011 16.5v-3c0-.83.67-1.5 1.5-1.5h6zm.5 4.5v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5zm0-3a.5.5 0 01-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1zM2.5 13a.5.5 0 01-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1zM2 16.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1zm3.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
		</svg>
	)
}
export default ReceiptMoneyIcon
