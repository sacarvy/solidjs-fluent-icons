import { splitProps, ComponentProps, JSX } from "solid-js"

function HighlightLinkIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3.5 2c.28 0 .5.22.5.5v4c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-4a.5.5 0 011 0v4c0 .65-.42 1.2-1 1.41V9a2 2 0 01-2 2v1h-1v-1H7v5.7l2-1.01c.02.35.1.7.21 1.01l-2.49 1.25A.5.5 0 016 17.5V11a2 2 0 01-2-2V7.91c-.58-.2-1-.76-1-1.41v-4c0-.28.22-.5.5-.5zM5 8v1a1 1 0 001 1h8a1 1 0 001-1V8H5zm7.5 5a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H16a.5.5 0 000 1h.5a2.5 2.5 0 000-5H16zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default HighlightLinkIcon
