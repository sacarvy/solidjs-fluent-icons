import { splitProps, ComponentProps, JSX } from "solid-js"

function ScreenshotIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.5 5C5.67 5 5 5.67 5 6.5v2a.5.5 0 001 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 000-1h-2zm5 0a.5.5 0 000 1h2c.28 0 .5.22.5.5v2a.5.5 0 001 0v-2c0-.83-.67-1.5-1.5-1.5h-2zM6 11.5a.5.5 0 00-1 0v2c0 .83.67 1.5 1.5 1.5h2a.5.5 0 000-1h-2a.5.5 0 01-.5-.5v-2zm9 0a.5.5 0 00-1 0v2a.5.5 0 01-.5.5h-2a.5.5 0 000 1h2c.83 0 1.5-.67 1.5-1.5v-2zM3 5c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm1 0v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1z" />
		</svg>
	)
}
export default ScreenshotIcon
