import { splitProps, ComponentProps, JSX } from "solid-js"

function PhoneLaptopIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 4.5C3 3.67 3.67 3 4.5 3h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H10v-1h5.5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5V6H3V4.5zM10 15h7.5a.5.5 0 000-1H10v1zm-5 0a.5.5 0 000 1h1a.5.5 0 000-1H5zM2 8.5C2 7.67 2.67 7 3.5 7h4C8.33 7 9 7.67 9 8.5v8c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 012 16.5v-8zM3.5 8a.5.5 0 00-.5.5v8c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-4z" />
		</svg>
	)
}
export default PhoneLaptopIcon
