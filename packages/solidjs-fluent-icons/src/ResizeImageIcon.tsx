import { splitProps, ComponentProps, JSX } from "solid-js"

function ResizeImageIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5 2a3 3 0 00-3 3v3.5a.5.5 0 001 0V5c0-1.1.9-2 2-2h3.5a.5.5 0 000-1H5zm6.5 0a.5.5 0 000 1H15a2 2 0 012 2v3.5a.5.5 0 001 0V5a3 3 0 00-3-3h-3.5zm6.5 9.5a.5.5 0 00-1 0V15a2 2 0 01-2 2h-3.5a.5.5 0 000 1H15a3 3 0 003-3v-3.5zm-17 1A2.5 2.5 0 013.5 10h4a2.5 2.5 0 012.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 00-2.12 0L1.4 17.88C1.15 17.48 1 17 1 16.5v-4zm7 .25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-5.88 5.84c.4.26.87.41 1.38.41h4c.51 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 00-.7 0L2.12 18.6z" />
		</svg>
	)
}
export default ResizeImageIcon
