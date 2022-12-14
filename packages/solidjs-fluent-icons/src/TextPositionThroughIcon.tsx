import { splitProps, ComponentProps, JSX } from "solid-js"

function TextPositionThroughIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM3.5 6h2.76c-.2.3-.38.64-.5 1H3.5a.5.5 0 010-1zm0 3h2v1h-2a.5.5 0 010-1zm0 3h2v1h-2a.5.5 0 010-1zm13 0h-2v1h2a.5.5 0 000-1zm-8-3v1h3V9h-3zm8 1h-2V9h2a.5.5 0 010 1zm-8 2v1h3v-1h-3zm8-5h-2.26c-.12-.36-.3-.7-.5-1h2.76a.5.5 0 010 1zm-13 8h13a.5.5 0 010 1h-13a.5.5 0 010-1zm4-6.5a2.5 2.5 0 015 0v5a.5.5 0 001 0v-5a3.5 3.5 0 10-7 0v5a.5.5 0 001 0v-5z" />
		</svg>
	)
}
export default TextPositionThroughIcon
