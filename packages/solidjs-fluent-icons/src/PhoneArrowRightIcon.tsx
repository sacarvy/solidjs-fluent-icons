import { splitProps, ComponentProps, JSX } from "solid-js"

function PhoneArrowRightIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h4.76a5.5 5.5 0 01-.66-1H5.5a.5.5 0 01-.5-.5v-13c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v5.7c.32-.08.66-.15 1-.18V3.5c0-.83-.67-1.5-1.5-1.5h-7zM9 14.5c0-.17 0-.34.02-.5H7.5a.5.5 0 000 1h1.52a5.57 5.57 0 01-.02-.5zm5.5-4.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" />
		</svg>
	)
}
export default PhoneArrowRightIcon
