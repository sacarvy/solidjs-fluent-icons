import { splitProps } from "solid-js"
function ChannelShareIcon(props) {
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
			<path d="M3 5.5A2.5 2.5 0 015.5 3h5A2.5 2.5 0 0113 5.5a.5.5 0 01-1 0c0-.83-.67-1.5-1.5-1.5h-5C4.67 4 4 4.67 4 5.5v5c0 .83.67 1.5 1.5 1.5h4.51a2.25 2.25 0 11.12 1H5.5A2.5 2.5 0 013 10.5v-5zm8 6.75a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zM7.5 14a.5.5 0 00-.5.5A2.5 2.5 0 009.5 17h5a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0014.5 7H9.87A2.25 2.25 0 1010 8h4.51c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 018 14.5a.5.5 0 00-.5-.5zm.25-7.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
		</svg>
	)
}
export default ChannelShareIcon
