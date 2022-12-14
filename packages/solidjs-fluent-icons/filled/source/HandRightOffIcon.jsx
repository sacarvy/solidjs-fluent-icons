import { splitProps } from "solid-js"
function HandRightOffIcon(props) {
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
			<path d="M4 5.25c0-.15.05-.3.13-.42L2.15 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-3.72-3.71c-.25.31-.49.64-.7.98-.37.6-.71 1.23-1.05 1.86-.36.68-.59 1.02-1.68 1.02H6.95C6 18 5.64 17.47 5 16a11.7 11.7 0 01-1-3.5V5.25zm2.5 1.96l-1-1V9a.5.5 0 001 0V7.2zM8 3.75v2.13l-1.5-1.5v-.63a.75.75 0 011.5 0zm3.1 5.24l3.71 3.7c.22-.2.45-.39.69-.56l1.3-.99c.13-.09.2-.23.2-.38 0-.05 0-.1-.02-.14-.2-.8-1-1.12-1.98-1.12-.6 0-1.34.32-2 .75v-6.5a.75.75 0 00-1.5 0V8.5a.5.5 0 01-.4.49zM9 6.88l1.5 1.5V2.75a.75.75 0 00-1.5 0v4.13z" />
		</svg>
	)
}
export default HandRightOffIcon
