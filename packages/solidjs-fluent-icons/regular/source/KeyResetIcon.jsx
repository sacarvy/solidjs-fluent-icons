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
			<path d="M14 7a1 1 0 100-2 1 1 0 000 2zm-7 .5C7 4.42 9.42 2 12.5 2S18 4.42 18 7.5c0 1-.26 1.93-.7 2.74a4.99 4.99 0 00-.83-.59c.34-.63.53-1.37.53-2.15C17 4.98 15.02 3 12.5 3a4.45 4.45 0 00-4.4 5.46c.1.52.02 1.13-.41 1.56l-4.54 4.54a.5.5 0 00-.15.35v1.59c0 .28.22.5.5.5h2a.5.5 0 00.5-.5V16a1 1 0 011-1h1v-1a1 1 0 011-1h.38A1.5 1.5 0 009 14v1a1 1 0 01-1 1H7v.5c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 012 16.5v-1.59c0-.4.16-.78.44-1.06l4.54-4.54c.13-.13.2-.37.14-.64A5.62 5.62 0 017 7.5zm4.85 1.35a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L10.71 11H14a3 3 0 11-3 3 .5.5 0 10-1 0 4 4 0 104-4h-3.3l1.15-1.15z" />
		</svg>
	)
}
export default KeyResetIcon
