import { splitProps, ComponentProps, JSX } from "solid-js"

function OpenOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.85 2.15l15 15a.5.5 0 01-.7.7l-1.41-1.4c-.5.34-1.1.55-1.74.55H6a3 3 0 01-3-3V6c0-.65.2-1.25.55-1.74l-1.4-1.4a.5.5 0 11.7-.71zm12.17 13.57L4.28 4.98A2 2 0 004 6v8c0 1.1.9 2 2 2h8a2 2 0 001.02-.28zm1.88-.94l-.9-.9V11.5a.5.5 0 011 0V14a3 3 0 01-.1.78zM5.22 3.1l.9.9H8.5a.5.5 0 000-1H6a3 3 0 00-.78.1zm5.78.4c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 01-1 0V4.7l-4.15 4.15a.5.5 0 01-.7-.7L15.29 4H11.5a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default OpenOffIcon
