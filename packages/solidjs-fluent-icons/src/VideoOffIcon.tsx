import { splitProps, ComponentProps, JSX } from "solid-js"

function VideoOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L3.5 4.21A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h7a2.5 2.5 0 002.3-1.5l3.35 3.35a.5.5 0 00.7-.7l-15-15zM13 13.69A1.5 1.5 0 0111.5 15h-7A1.5 1.5 0 013 13.5v-7c0-.76.57-1.4 1.3-1.49L13 13.7zm.01-2.81l3.47 3.47A1 1 0 0018 13.5v-7a1 1 0 00-1.6-.8L14 7.5v-1A2.5 2.5 0 0011.5 4H6.12l1 1h4.38c.83 0 1.5.67 1.5 1.5v4.38zm1-2.13l3-2.25v7l-3-2.25v-2.5z" />
		</svg>
	)
}
export default VideoOffIcon
