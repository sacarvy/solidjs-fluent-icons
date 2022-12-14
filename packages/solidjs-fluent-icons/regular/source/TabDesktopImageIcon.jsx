import { splitProps } from "solid-js"
function TabDesktopImageIcon(props) {
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
			<path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-2.84c.15-.31.25-.65.3-1h2.54c.82 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 018 5.5V4H5.5C4.67 4 4 4.67 4 5.5v2.54c-.36.05-.7.15-1 .3V5.5zM16 6v-.5c0-.83-.68-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16zM2 11.5A2.5 2.5 0 014.5 9h4a2.5 2.5 0 012.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 00-2.12 0L2.4 16.88C2.15 16.48 2 16 2 15.5v-4zm7 .25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-5.88 5.84c.4.26.87.41 1.38.41h4c.51 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 00-.7 0L3.12 17.6z" />
		</svg>
	)
}
export default TabDesktopImageIcon
