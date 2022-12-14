import { splitProps } from "solid-js"
function PhoneTabletIcon(props) {
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
			<path d="M4 4.8C4 3.8 4.84 3 5.84 3h10.32c1 0 1.84.8 1.84 1.8v7.4c0 1-.84 1.8-1.84 1.8H10v-2h2.5a.5.5 0 000-1H10V8a2 2 0 00-2-2H4V4.8zM3.5 7C2.67 7 2 7.67 2 8.5v8c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-8C9 7.67 8.33 7 7.5 7h-4zm1 8.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default PhoneTabletIcon
