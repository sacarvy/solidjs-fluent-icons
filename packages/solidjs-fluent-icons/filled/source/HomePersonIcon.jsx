import { splitProps } from "solid-js"
function HomePersonIcon(props) {
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
			<path d="M9 2.39a1.5 1.5 0 012 0l5.5 4.94c.32.28.5.69.5 1.12v.95a2.99 2.99 0 00-4.33 1.6H8.5a.5.5 0 00-.5.5v4c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 013 15.5V8.45c0-.43.18-.84.5-1.12L9 2.39zM17.5 12a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default HomePersonIcon
