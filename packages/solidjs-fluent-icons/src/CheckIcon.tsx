import { splitProps, ComponentProps, JSX } from "solid-js"

function CheckIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M18 7.12V13a2 2 0 01-2 2H4a2 2 0 01-2-2V7c0-1.1.9-2 2-2h11.88l-1 1H4a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1V8.12l1-1zM4 8.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5H9a.5.5 0 010 1H4.5a.5.5 0 01-.5-.5zm13.85-6.35c.2.2.2.5 0 .7l-6 6a.5.5 0 01-.7-.7l6-6c.2-.2.5-.2.7 0z" />
		</svg>
	)
}
export default CheckIcon
