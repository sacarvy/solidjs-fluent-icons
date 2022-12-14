import { splitProps, ComponentProps, JSX } from "solid-js"

function TextQuoteIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.83 8.62a8.8 8.8 0 01-.96 2.76 12.06 12.06 0 01-2.22 2.77.5.5 0 00.7.7h.02c.74-.75 1.66-1.67 2.38-2.98A10.83 10.83 0 009 6.5a2.5 2.5 0 10-1.17 2.12zM8 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.83 2.12a8.8 8.8 0 01-.96 2.76 12.06 12.06 0 01-2.22 2.77.5.5 0 00.7.7h.02c.74-.75 1.66-1.67 2.38-2.98A10.83 10.83 0 0016 6.5a2.5 2.5 0 10-1.17 2.12zM13.5 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
		</svg>
	)
}
export default TextQuoteIcon
