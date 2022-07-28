import { splitProps, ComponentProps, JSX } from "solid-js"

function DocumentProhibitedIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 01-2 2H9.74c.26-.3.48-.64.66-1H14a1 1 0 001-1V8h-3.5A1.5 1.5 0 0110 6.5V3H6a1 1 0 00-1 1v5.02c-.34.03-.68.1-1 .19V4zm7-.8v3.3c0 .28.22.5.5.5h3.3L11 3.2zM8.68 17.69a4.5 4.5 0 11-6.36-6.36 4.5 4.5 0 016.36 6.36zM3.4 17.3a3.5 3.5 0 004.9-4.9l-4.9 4.9zm-.7-.7l4.9-4.9a3.5 3.5 0 00-4.9 4.9z" />
		</svg>
	)
}
export default DocumentProhibitedIcon
