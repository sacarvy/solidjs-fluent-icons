import { splitProps } from "solid-js"
function AlertUrgentIcon(props) {
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
			<path d="M2.47 12.25a5.16 5.16 0 019.42-4.2l1.22 2.75 1.67 1.62c.38.37.27 1-.22 1.22l-9.73 4.33a.75.75 0 01-1.05-.65L3.68 15l-1.21-2.75zm6.36 5.09a1.49 1.49 0 002.68-1.2l-2.68 1.2zm3.26-12.61a.5.5 0 01.69-.14 6.17 6.17 0 012.91 4.91.5.5 0 11-1 0c0-.13 0-.26-.02-.39a5.17 5.17 0 00-2.45-3.69.5.5 0 01-.13-.7zm.49-2.49a.5.5 0 01.68-.16c2.46 1.5 4.58 3.8 4.74 7.9a.5.5 0 01-1 .04c-.14-3.68-2-5.7-4.26-7.09a.5.5 0 01-.16-.69z" />
		</svg>
	)
}
export default AlertUrgentIcon
