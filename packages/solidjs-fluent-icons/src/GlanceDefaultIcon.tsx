import { splitProps, ComponentProps, JSX } from "solid-js"

function GlanceDefaultIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 12 12"
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
			<path d="M6 9.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-2C6.67 5 6 5.67 6 6.5v3zm1.5.5a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-2zM1 5.5C1 6.33 1.67 7 2.5 7h1C4.33 7 5 6.33 5 5.5v-3C5 1.67 4.33 1 3.5 1h-1C1.67 1 1 1.67 1 2.5v3zm1.5.5a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-1zm5-2a1.5 1.5 0 110-3h2a1.5 1.5 0 010 3h-2zM7 2.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5zm-6 7c0 .83.67 1.5 1.5 1.5h1a1.5 1.5 0 000-3h-1C1.67 8 1 8.67 1 9.5zm1.5.5a.5.5 0 010-1h1a.5.5 0 010 1h-1z" />
		</svg>
	)
}
export default GlanceDefaultIcon
