import { splitProps, ComponentProps, JSX } from "solid-js"

function SelectObjectSkewIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M16.49 6h.01a1.5 1.5 0 10-1.41-2l-.01.02A1.5 1.5 0 0016.48 6zm-5.4 10a1.5 1.5 0 101.42-2h-.01c-.65 0-1.2.42-1.41 1l-.01.02a1.5 1.5 0 000 .98zM3.5 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM7.49 6a1.5 1.5 0 10.02-3 1.5 1.5 0 00-.02 3zm-3.62 7.03l2.32-6.4c.28.17.6.3.94.34l-2.32 6.4c-.28-.17-.6-.3-.94-.34zM14.05 5h-4.1a2.51 2.51 0 000-1h4.1a2.51 2.51 0 000 1zm-8.1 11h4.1a2.51 2.51 0 010-1h-4.1a2.51 2.51 0 010 1zm6.92-2.97l2.32-6.4c.28.17.6.3.94.34l-2.32 6.4c-.28-.17-.6-.3-.94-.34z" />
		</svg>
	)
}
export default SelectObjectSkewIcon
