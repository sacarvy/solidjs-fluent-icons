import { splitProps } from "solid-js"
function MicOffIcon(props) {
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
			<path d="M13 10a3 3 0 01-.1.78L7 4.88A3 3 0 0113 5v5zM7 7.7V10a3 3 0 004.74 2.45l1.07 1.07A4.5 4.5 0 015.5 10a.5.5 0 00-1.01 0 5.5 5.5 0 005 5.48v2.02a.5.5 0 001 0v-2.02a5.48 5.48 0 003.02-1.25l3.63 3.62a.5.5 0 00.7-.7l-15-15a.5.5 0 10-.7.7L7 7.71zm7.8 4.98c.45-.8.7-1.7.7-2.68a.5.5 0 00-1 0c0 .7-.16 1.35-.44 1.94l.74.74z" />
		</svg>
	)
}
export default MicOffIcon
