import { splitProps, ComponentProps, JSX } from "solid-js"

function PivotIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.5 4C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h4.59a1.5 1.5 0 000 1H5.5A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v4.59a1.5 1.5 0 00-1 0V5.5c0-.83-.67-1.5-1.5-1.5h-9zM6 5a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V6a1 1 0 00-1-1H6zm4 0a1 1 0 00-1 1v1a1 1 0 001 1h4a1 1 0 001-1V6a1 1 0 00-1-1h-4zM6 9a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1v-4a1 1 0 00-1-1H6zm10.85 2.15a.5.5 0 00-.7 0l-1 1a.5.5 0 00.7.7l.15-.14v1.79c0 .83-.67 1.5-1.5 1.5h-1.8l.15-.15a.5.5 0 00-.7-.7l-1 1a.5.5 0 000 .7l1 1a.5.5 0 00.7-.7l-.14-.15h1.79a2.5 2.5 0 002.5-2.5v-1.8l.15.15a.5.5 0 00.7-.7l-1-1z" />
		</svg>
	)
}
export default PivotIcon
