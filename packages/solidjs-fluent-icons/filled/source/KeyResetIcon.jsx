import { splitProps } from "solid-js"
function KeyResetIcon(props) {
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
			<path d="M12.5 2a5.45 5.45 0 00-5.38 6.67c.06.27 0 .5-.14.64l-4.54 4.54A1.5 1.5 0 002 14.91v1.59c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V16h1a1 1 0 001-1v-1c0-.51.26-.96.65-1.23l-1.21-1.2a1.5 1.5 0 010-2.13l2-2A1.5 1.5 0 0112.9 9H14a5 5 0 013.3 1.24A5.54 5.54 0 0012.5 2zM14 5a1 1 0 110 2 1 1 0 010-2zm-2.15 3.85a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L10.71 11H14a3 3 0 11-3 3 .5.5 0 10-1 0 4 4 0 104-4h-3.3l1.15-1.15z" />
		</svg>
	)
}
export default KeyResetIcon
