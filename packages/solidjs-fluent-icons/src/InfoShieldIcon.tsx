import { splitProps, ComponentProps, JSX } from "solid-js"

function InfoShieldIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17 9a8 8 0 10-6.28 7.81 5.93 5.93 0 01-.39-.94 7 7 0 115.64-7.47c.02 0 .03.02.04.03a5.06 5.06 0 00.99.8V9zM9.05 5a.75.75 0 110 1.5.75.75 0 010-1.5zM9 7.5a.5.5 0 01.5.41v4.59a.5.5 0 01-1 .1V8c0-.28.22-.5.5-.5zm8 2.85a4.63 4.63 0 01-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 00-.56 0 4.5 4.5 0 01-3.32 1.55.4.4 0 00-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0013 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V11a.4.4 0 00-.4-.33 4.24 4.24 0 01-1.6-.32z" />
		</svg>
	)
}
export default InfoShieldIcon
