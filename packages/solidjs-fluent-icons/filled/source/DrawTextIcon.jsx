import { splitProps } from "solid-js"
function DrawTextIcon(props) {
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
			<path d="M10.14 10.5H6.86L8.5 5.82l1.64 4.68zm.53 1.5l.33.94 1.18-1.17-2.88-8.2a.85.85 0 00-1.6 0L4.04 14a.75.75 0 001.42.5l.87-2.5h4.34zm5.14-2.45l-4.83 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.92.92 0 00-.03.14 4.6 4.6 0 01-1.1-.1c-.08 0-.1-.1-.07-.17.18-.35.23-1.07-.4-1.33-.87-.35-1.99.13-2.87.5-.37.15-.7.29-.94.34-.4.09-.85-.06-1.22-.24-.21-.11-.48.08-.36.28.22.37.61.74 1.33.83.82.1 1.39-.16 1.97-.41.4-.18.8-.36 1.3-.43.09-.01.15.09.11.17-.15.35-.13.9.32 1.24.52.4 2.19.51 3.31.19l1.22-.31c.39-.1.74-.3 1.02-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z" />
		</svg>
	)
}
export default DrawTextIcon
