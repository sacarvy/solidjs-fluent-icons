import { splitProps, ComponentProps, JSX } from "solid-js"

function ShortpickIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7 2a1 1 0 00-1 1v2a1 1 0 001 1h.5a.5.5 0 000-1H7V3h.5a.5.5 0 000-1H7zm2.5 0a.5.5 0 000 1h1a.5.5 0 000-1h-1zm3 0a.5.5 0 000 1h.5v2h-.5a.5.5 0 000 1h.5a1 1 0 001-1V3a1 1 0 00-1-1h-.5zm-3 3a.5.5 0 000 1h1a.5.5 0 000-1h-1zM5 7.5a.5.5 0 00-1 0v8A2.5 2.5 0 006.5 18h7a2.5 2.5 0 002.5-2.5v-8a.5.5 0 00-1 0v8c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 015 15.5v-8zM7 12a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1H7zm0 1h6v2H7v-2zM6 8a1 1 0 011-1h.5a.5.5 0 010 1H7v2h.5a.5.5 0 010 1H7a1 1 0 01-1-1V8zm3-.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm3 0c0-.28.22-.5.5-.5h.5a1 1 0 011 1v2a1 1 0 01-1 1h-.5a.5.5 0 010-1h.5V8h-.5a.5.5 0 01-.5-.5zm-3 3c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default ShortpickIcon
