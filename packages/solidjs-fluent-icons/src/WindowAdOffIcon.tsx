import { splitProps, ComponentProps, JSX } from "solid-js"

function WindowAdOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.85 2.15l15 15a.5.5 0 01-.7.7l-1.27-1.27c-.4.27-.87.42-1.38.42h-9A2.5 2.5 0 013 14.5v-9c0-.51.15-.98.41-1.38L2.15 2.85a.5.5 0 11.7-.7zm12.3 13.7L10 10.71v1.79a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5h1.8l-1-1H4v7.5c0 .83.67 1.5 1.5 1.5h9c.23 0 .45-.05.65-.15zM5.29 6L4.14 4.85c-.09.2-.14.42-.14.65V6h1.3zm3 3H6v3h3V9.7L8.3 9zM16 6H8.13l1 1H16v6.88l.97.97c.02-.11.03-.23.03-.35v-9A2.5 2.5 0 0014.5 3h-9c-.12 0-.24 0-.35.02l.97.98h8.38c.83 0 1.5.67 1.5 1.5V6z" />
		</svg>
	)
}
export default WindowAdOffIcon
