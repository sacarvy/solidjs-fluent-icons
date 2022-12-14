import { splitProps, ComponentProps, JSX } from "solid-js"

function ExtendedDockIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10.35 4.15a.5.5 0 00-.7 0l-3 3a.5.5 0 10.7.7L10 5.21l2.65 2.64a.5.5 0 00.7-.7l-3-3zM3 10c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H3zm-.5 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-2zM9 10c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H9zm-.5 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5v-2zm5 0c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 01-1.5-1.5v-2zM15 11a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2z" />
		</svg>
	)
}
export default ExtendedDockIcon
