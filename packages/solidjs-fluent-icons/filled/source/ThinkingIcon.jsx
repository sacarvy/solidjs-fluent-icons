import { splitProps } from "solid-js"
function ThinkingIcon(props) {
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
			<path d="M7.7 2.64A4 4 0 0110 2a3.56 3.56 0 013.52 2.1c.33.7.43 1.44.46 1.92.65.05 1.31.2 1.86.56C16.56 7.06 17 7.85 17 9c0 1.17-.44 1.97-1.16 2.44-.69.45-1.56.56-2.34.56h-7c-.79 0-1.66-.13-2.34-.58C3.44 10.94 3 10.15 3 9s.44-1.94 1.16-2.42c.55-.36 1.2-.51 1.86-.56.03-.48.13-1.21.46-1.92.25-.53.63-1.06 1.21-1.46zM10 15a2 2 0 11-4 0 2 2 0 014 0zm-5 1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
		</svg>
	)
}
export default ThinkingIcon
