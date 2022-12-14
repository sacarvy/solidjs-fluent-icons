import { splitProps } from "solid-js"
function LibraryIcon(props) {
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
			<path d="M3.5 2C2.67 2 2 2.67 2 3.5v12.98c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V3.5C6 2.67 5.33 2 4.5 2h-1zm5 0C7.67 2 7 2.67 7 3.5v12.98c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1zm7.22 4.16a1.5 1.5 0 00-1.87-1.1l-.75.2A1.5 1.5 0 0012.04 7l2 9.8c.18.84 1.02 1.36 1.84 1.15l.99-.25c.79-.2 1.27-1 1.1-1.78l-2.25-9.76z" />
		</svg>
	)
}
export default LibraryIcon
