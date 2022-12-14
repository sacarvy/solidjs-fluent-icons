import { splitProps } from "solid-js"
function PhoneDesktopIcon(props) {
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
			<path d="M6 3h10a1 1 0 011 1v7a1 1 0 01-1 1H9v1h3v2H9v1h5.5a.5.5 0 000-1H13v-2h3a2 2 0 002-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3h1V4a1 1 0 011-1zM4.5 15a.5.5 0 000 1h1a.5.5 0 000-1h-1zM2 9.5C2 8.67 2.67 8 3.5 8h3C7.33 8 8 8.67 8 9.5v7c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 012 16.5v-7zM3.5 9a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-3z" />
		</svg>
	)
}
export default PhoneDesktopIcon
