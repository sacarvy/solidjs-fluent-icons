import { splitProps } from "solid-js"
function PersonMailIcon(props) {
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
			<path d="M9 2a4 4 0 100 8 4 4 0 000-8zm-5 9a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18v-5c0-1.1.9-2 2-2H4zm10.51 4.93l-4.5-2.63c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43zm.23 1.01l4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-3.05l4.25 2.48c.15.09.33.1.49.01z" />
		</svg>
	)
}
export default PersonMailIcon
