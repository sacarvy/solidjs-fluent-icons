import { splitProps } from "solid-js"
function RatioOneToOneIcon(props) {
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
			<path d="M6.76 7.07c.15.1.24.26.24.43v5a.5.5 0 01-1 0V8.3l-.28.15a.5.5 0 11-.44-.9l1-.5a.5.5 0 01.48.02zM14 7.5a.5.5 0 00-.72-.45l-1 .5a.5.5 0 10.44.9L13 8.3v4.19a.5.5 0 001 0v-5zm-4 1a.5.5 0 11-1 0 .5.5 0 011 0zM9.5 12a.5.5 0 100-1 .5.5 0 000 1zM2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75v6.5A2.75 2.75 0 0115.25 16H4.75A2.75 2.75 0 012 13.25v-6.5zM4.75 5C3.78 5 3 5.78 3 6.75v6.5c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-6.5C17 5.78 16.22 5 15.25 5H4.75z" />
		</svg>
	)
}
export default RatioOneToOneIcon
