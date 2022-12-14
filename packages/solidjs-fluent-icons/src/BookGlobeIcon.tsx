import { splitProps, ComponentProps, JSX } from "solid-js"

function BookGlobeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4 16V4c0-1.1.9-2 2-2h8a2 2 0 012 2v11a1 1 0 01-1 1H5a1 1 0 001 1h9.5a.5.5 0 010 1H6a2 2 0 01-2-2zM15 4a1 1 0 00-1-1H6a1 1 0 00-1 1v11h10V4zM7.04 8h.97c.05-.77.2-1.49.42-2.06A3 3 0 007.04 8zM6 8.5a4 4 0 118 0 4 4 0 01-8 0zm6.96-.5a3 3 0 00-1.4-2.06c.23.57.38 1.29.43 2.06h.97zm-.97 1c-.05.77-.2 1.49-.42 2.06A3 3 0 0012.96 9h-.97zm-1-1a5.56 5.56 0 00-.39-1.78 1.88 1.88 0 00-.37-.59c-.11-.11-.2-.13-.23-.13-.04 0-.12.02-.23.13-.12.12-.25.31-.37.6-.2.45-.34 1.06-.38 1.77h1.96zM9.01 9c.04.7.18 1.32.38 1.78.12.28.25.47.37.59.11.11.2.13.23.13.04 0 .12-.02.23-.13.12-.12.25-.31.37-.6.2-.45.34-1.06.38-1.77H9.02zm-1 0h-.98a3 3 0 001.4 2.06A6.75 6.75 0 018 9z" />
		</svg>
	)
}
export default BookGlobeIcon
