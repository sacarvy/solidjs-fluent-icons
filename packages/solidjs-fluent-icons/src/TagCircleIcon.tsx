import { splitProps, ComponentProps, JSX } from "solid-js"

function TagCircleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.5 7C6.67 7 6 7.67 6 8.5v3c0 .83.67 1.5 1.5 1.5h4.06c.4 0 .79-.14 1.1-.39l1.78-1.44a1.5 1.5 0 000-2.34L12.66 7.4c-.31-.25-.7-.39-1.1-.39H7.5zM7 8.5c0-.28.22-.5.5-.5h4.06c.17 0 .34.06.47.17L13.8 9.6a.5.5 0 010 .78l-1.78 1.44c-.13.11-.3.17-.47.17H7.5a.5.5 0 01-.5-.5v-3zM10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z" />
		</svg>
	)
}
export default TagCircleIcon
