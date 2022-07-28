import { splitProps, ComponentProps, JSX } from "solid-js"

function VideoPersonStarIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v4.76a5.5 5.5 0 00-1-.66V5.5a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h2.1c-.16.32-.3.65-.4 1H7.5a.5.5 0 00-.5.5V15h2.02c.03.34.1.68.19 1H3.5A1.5 1.5 0 012 14.5v-9zm10.5 3c0 .34-.07.66-.19.95-.8.35-1.5.88-2.04 1.54L10 11a2.5 2.5 0 112.5-2.5zM10 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.02-2.64a.5.5 0 00-.96 0l-.47 1.53H12c-.48 0-.69.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95h-1.54l-.47-1.53z" />
		</svg>
	)
}
export default VideoPersonStarIcon
