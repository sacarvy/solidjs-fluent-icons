import { splitProps, ComponentProps, JSX } from "solid-js"

function DocumentJavascriptIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 01-2 2H8.5c.22-.3.38-.63.45-1H14a1 1 0 001-1V8h-3.5A1.5 1.5 0 0110 6.5V3H6a1 1 0 00-1 1v7.5l-.23.2a1.5 1.5 0 00-.77-.61V4zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5zm-8 5a.5.5 0 00-.5.5v4a.5.5 0 01-1 0V16a.5.5 0 00-1 0v.5a1.5 1.5 0 003 0v-4a.5.5 0 00-.5-.5zM5 13.5a1.5 1.5 0 013 0 .5.5 0 01-1 0 .5.5 0 00-1 0v.38c0 .2.1.36.28.45l.9.45c.5.25.82.77.82 1.34v.38a1.5 1.5 0 01-3 0 .5.5 0 011 0 .5.5 0 001 0v-.38a.5.5 0 00-.28-.45l-.9-.45A1.5 1.5 0 015 13.88v-.38z" />
		</svg>
	)
}
export default DocumentJavascriptIcon
