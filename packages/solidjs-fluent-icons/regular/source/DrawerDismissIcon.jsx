import { splitProps } from "solid-js"
function DrawerDismissIcon(props) {
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
			<path d="M18 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7L13.5 4.79l-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7L14.21 5.5l1.14-1.15zM17 9.75c-.3.25-.64.47-1 .65v.6h-3.5a.5.5 0 00-.5.5 2 2 0 11-4 0 .5.5 0 00-.5-.5H4V8h4.6c-.16-.32-.3-.65-.4-1H4c0-1.1.9-2 2-2h2.02c.03-.34.1-.68.19-1H6a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V9.74zM16 15a2 2 0 01-2 2H6a2 2 0 01-2-2v-3h3.04a3 3 0 005.92 0H16v3z" />
		</svg>
	)
}
export default DrawerDismissIcon
