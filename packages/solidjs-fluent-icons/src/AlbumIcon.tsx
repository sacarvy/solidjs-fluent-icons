import { splitProps, ComponentProps, JSX } from "solid-js"

function AlbumIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8 8.5C8 7.67 8.67 7 9.5 7h4c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 018 9.5v-1zM9.5 8a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-4zM2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm4 9h10a1 1 0 001-1V6a1 1 0 00-1-1H6v10zM5 5H4a1 1 0 00-1 1v8a1 1 0 001 1h1V5z" />
		</svg>
	)
}
export default AlbumIcon
