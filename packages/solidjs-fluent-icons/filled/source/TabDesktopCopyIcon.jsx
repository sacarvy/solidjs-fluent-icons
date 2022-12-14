import { splitProps } from "solid-js"
function TabDesktopCopyIcon(props) {
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
			<path d="M5 4.5A2.5 2.5 0 017.5 2H9v2.5c0 .83.67 1.5 1.5 1.5H18v6.5a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 015 12.5v-8zm5 0V2h5.5A2.5 2.5 0 0118 4.5V5h-7.5a.5.5 0 01-.5-.5zM12.5 18a2.5 2.5 0 002.45-2H7.5A3.5 3.5 0 014 12.5V5.05A2.5 2.5 0 002 7.5V14a4 4 0 004 4h6.5z" />
		</svg>
	)
}
export default TabDesktopCopyIcon
