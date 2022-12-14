import { splitProps, ComponentProps, JSX } from "solid-js"

function HomeCheckmarkIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M13.35 8.85a.5.5 0 00-.7-.7L9 11.78l-1.65-1.65a.5.5 0 10-.7.71l2 2c.2.2.5.2.7 0l4-4zM11 2.38a1.5 1.5 0 00-2 0L3.5 7.33c-.32.28-.5.69-.5 1.11v7.06c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8.44c0-.42-.18-.83-.5-1.11L11 2.38zm-1.33.75a.5.5 0 01.66 0l5.5 4.94c.11.1.17.23.17.37v7.06a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V8.44a.5.5 0 01.17-.37l5.5-4.94z" />
		</svg>
	)
}
export default HomeCheckmarkIcon
