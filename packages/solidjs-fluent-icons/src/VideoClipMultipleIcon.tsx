import { splitProps, ComponentProps, JSX } from "solid-js"

function VideoClipMultipleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7 11.25v-4.5c0-.6.67-.95 1.17-.61l3.61 2.45c.3.2.3.63 0 .82l-3.6 2.46A.75.75 0 017 11.25zM2 5.5A2.5 2.5 0 014.5 3h9A2.5 2.5 0 0116 5.5v7a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 012 12.5v-7zM4.5 4C3.67 4 3 4.67 3 5.5v7c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-9zm0 12c.46.6 1.18 1 2 1H14a4 4 0 004-4V7.5c0-.82-.4-1.54-1-2V13a3 3 0 01-3 3H4.5z" />
		</svg>
	)
}
export default VideoClipMultipleIcon
