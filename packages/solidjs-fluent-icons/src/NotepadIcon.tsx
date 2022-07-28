import { splitProps, ComponentProps, JSX } from "solid-js"

function NotepadIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.5 7a.5.5 0 000 1h5a.5.5 0 000-1h-5zM7 10.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 000 1h2a.5.5 0 000-1h-2zm-1-11a.5.5 0 00-.5.5V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h6a.5.5 0 00.35-.15l4-4a.5.5 0 00.15-.35v-9c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 00-1 0V3h-2.5v-.5a.5.5 0 00-1 0V3H7v-.5a.5.5 0 00-.5-.5zm8 2c.28 0 .5.22.5.5V13h-2.5c-.83 0-1.5.67-1.5 1.5V17H5.5a.5.5 0 01-.5-.5v-12c0-.28.22-.5.5-.5h9zm-.2 10L12 16.3v-1.8c0-.28.22-.5.5-.5h1.8z" />
		</svg>
	)
}
export default NotepadIcon
