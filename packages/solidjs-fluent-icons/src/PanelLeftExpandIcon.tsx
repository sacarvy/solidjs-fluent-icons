import { splitProps, ComponentProps, JSX } from "solid-js"

function PanelLeftExpandIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M13.18 10.5l-1 .87a.5.5 0 00.66.76l2-1.75a.5.5 0 000-.76l-2-1.75a.5.5 0 10-.66.76l1 .87H9.5a.5.5 0 000 1h3.68zM2 14c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8zm2 1a1 1 0 01-1-1V6a1 1 0 011-1h3v10H4zm4 0V5h8a1 1 0 011 1v8a1 1 0 01-1 1H8z" />
		</svg>
	)
}
export default PanelLeftExpandIcon
