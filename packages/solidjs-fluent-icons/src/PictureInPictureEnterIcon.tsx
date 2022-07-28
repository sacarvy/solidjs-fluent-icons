import { splitProps, ComponentProps, JSX } from "solid-js"

function PictureInPictureEnterIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M2 5.75A2.75 2.75 0 014.75 3h10.5A2.75 2.75 0 0118 5.75V10h-1V5.75C17 4.78 16.22 4 15.25 4H4.75C3.78 4 3 4.78 3 5.75v6.5c0 .97.78 1.75 1.75 1.75H9v1H4.75A2.75 2.75 0 012 12.25v-6.5zM11.5 11c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-6zM4.65 5.65c.2-.2.5-.2.7 0L8 8.29V6.5a.5.5 0 011 0v3a.5.5 0 01-.5.5h-3a.5.5 0 010-1h1.8L4.64 6.35a.5.5 0 010-.7z" />
		</svg>
	)
}
export default PictureInPictureEnterIcon
