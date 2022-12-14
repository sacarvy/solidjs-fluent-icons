import { splitProps } from "solid-js"
function EyeTrackingIcon(props) {
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
			<path d="M3 4.5C3 3.67 3.67 3 4.5 3h3a.5.5 0 000-1h-3A2.5 2.5 0 002 4.5v3a.5.5 0 001 0v-3zm0 11c0 .83.67 1.5 1.5 1.5h3a.5.5 0 010 1h-3A2.5 2.5 0 012 15.5v-3a.5.5 0 011 0v3zM15.5 3c.83 0 1.5.67 1.5 1.5v3a.5.5 0 001 0v-3A2.5 2.5 0 0015.5 2h-3a.5.5 0 000 1h3zM17 15.5c0 .83-.67 1.5-1.5 1.5h-3a.5.5 0 000 1h3a2.5 2.5 0 002.5-2.5v-3a.5.5 0 00-1 0v3zm-10-4a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4zm-5.05.22a.5.5 0 01-.9-.44l.45.22-.45-.22v-.01l.01-.01a2.1 2.1 0 01.08-.14l.25-.38A6.85 6.85 0 0110 6a6.85 6.85 0 015.62 2.74 5.13 5.13 0 01.33.52v.01l-.44.23.45-.22a.5.5 0 01-.9.45V9.7a2.5 2.5 0 00-.25-.39A5.86 5.86 0 0010 7a5.86 5.86 0 00-4.8 2.32 4.14 4.14 0 00-.24.39l-.01.01z" />
		</svg>
	)
}
export default EyeTrackingIcon
