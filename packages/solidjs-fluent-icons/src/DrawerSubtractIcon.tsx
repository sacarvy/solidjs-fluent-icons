import { splitProps, ComponentProps, JSX } from "solid-js"

function DrawerSubtractIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M18 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2 0a.5.5 0 00-.5-.5h-4a.5.5 0 000 1h4a.5.5 0 00.5-.5zm1 4.24c-.3.26-.64.48-1 .66v.6h-3.5a.5.5 0 00-.5.5 2 2 0 11-4 0 .5.5 0 00-.5-.5H4V8h4.6c-.16-.32-.3-.65-.4-1H4c0-1.1.9-2 2-2h2.02c.03-.34.1-.68.19-1H6a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V9.74zM16 15a2 2 0 01-2 2H6a2 2 0 01-2-2v-3h3.04a3 3 0 005.92 0H16v3z" />
		</svg>
	)
}
export default DrawerSubtractIcon
