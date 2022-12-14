import { splitProps, ComponentProps, JSX } from "solid-js"

function CommunicationPersonIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 11a7 7 0 0113.79-1.7c.48.22.88.57 1.18 1a8 8 0 10-13.63 6.35.5.5 0 00.7-.7A6.98 6.98 0 013 11zm11.64-1.87a5 5 0 10-8.18 5.4.5.5 0 00.7-.7A3.99 3.99 0 0110 7a4 4 0 013.74 2.57c.27-.2.57-.35.9-.44zM8 11a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2zm7.5 2a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default CommunicationPersonIcon
