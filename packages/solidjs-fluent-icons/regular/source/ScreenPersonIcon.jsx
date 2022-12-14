import { splitProps } from "solid-js"
function ScreenPersonIcon(props) {
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
			<path d="M4.75 4A2.75 2.75 0 002 6.75v6.5A2.75 2.75 0 004.75 16h6.3c.07-.37.23-.7.45-1H4.75C3.78 15 3 14.22 3 13.25v-6.5C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75V9.4c.4.23.74.56 1 .94V6.75A2.75 2.75 0 0015.25 4H4.75zm12.75 8a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default ScreenPersonIcon
