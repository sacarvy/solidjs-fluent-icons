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
			<path d="M5.84 4a.83.83 0 00-.84.8V6H4V4.8C4 3.8 4.84 3 5.84 3h10.32c1 0 1.84.8 1.84 1.8v7.4c0 1-.84 1.8-1.84 1.8H10v-1h6.16c.48 0 .84-.37.84-.8V4.8c0-.43-.36-.8-.84-.8H5.84zM10 12h2.5a.5.5 0 000-1H10v1zm-5 3a.5.5 0 000 1h1a.5.5 0 000-1H5zM2 8.5C2 7.67 2.67 7 3.5 7h4C8.33 7 9 7.67 9 8.5v8c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 012 16.5v-8zM3.5 8a.5.5 0 00-.5.5v8c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-4z" />
		</svg>
	)
}
export default PhoneTabletIcon
