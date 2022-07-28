import { splitProps, ComponentProps, JSX } from "solid-js"

function SquareHintIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6 3.5a.5.5 0 00-.5-.5A2.5 2.5 0 003 5.5a.5.5 0 001 0C4 4.67 4.67 4 5.5 4a.5.5 0 00.5-.5zM16.5 6a.5.5 0 00.5-.5A2.5 2.5 0 0014.5 3a.5.5 0 000 1c.83 0 1.5.67 1.5 1.5 0 .28.22.5.5.5zm-2 11a.5.5 0 010-1c.83 0 1.5-.67 1.5-1.5a.5.5 0 011 0 2.5 2.5 0 01-2.5 2.5zm-11-3a.5.5 0 00-.5.5A2.5 2.5 0 005.5 17a.5.5 0 000-1A1.5 1.5 0 014 14.5a.5.5 0 00-.5-.5zM3 9a.5.5 0 011 0v2a.5.5 0 01-1 0V9zm13.5-.5a.5.5 0 00-.5.5v2a.5.5 0 001 0V9a.5.5 0 00-.5-.5zm-8-5c0-.28.22-.5.5-.5h2a.5.5 0 010 1H9a.5.5 0 01-.5-.5zM9 16a.5.5 0 000 1h2a.5.5 0 000-1H9z" />
		</svg>
	)
}
export default SquareHintIcon
