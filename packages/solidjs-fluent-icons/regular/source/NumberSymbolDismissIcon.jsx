import { splitProps } from "solid-js"
function NumberSymbolDismissIcon(props) {
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
			<path d="M8.99 2.6a.5.5 0 00-.98-.2L7.09 7H3.5a.5.5 0 100 1h3.39l-.8 4H2.5a.5.5 0 000 1h3.4L5 17.4a.5.5 0 10.98.2l.92-4.6h2.3c.1-.35.23-.69.4-1H7.1l.8-4h5.03l-.27 1.31c.34-.12.7-.2 1.08-.26L13.96 8h3.54a.5.5 0 100-1h-3.33l.9-4.39a.5.5 0 10-.98-.2l-.95 4.6H8.11l.88-4.41zM19 14.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-2.65-1.15l-1.14 1.15 1.14 1.15a.5.5 0 01-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 01.7-.7l1.15 1.14 1.15-1.14a.5.5 0 01.7.7z" />
		</svg>
	)
}
export default NumberSymbolDismissIcon
