import { splitProps, ComponentProps, JSX } from "solid-js"

function BuildingBankLinkIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 5.87a.83.83 0 100-1.66.83.83 0 000 1.66zM3.5 17h4.84a3.48 3.48 0 01-.3-1H4v-.83c0-.65.52-1.17 1.17-1.17h3.17c.17-.38.42-.71.71-1H8V8h1.5v4.63c.3-.21.64-.38 1-.49V8H12v4h1V8h2v4h.5c.17 0 .34.01.5.03V8h.1a.92.92 0 00.52-1.67l-5.85-4.15a1.33 1.33 0 00-1.54 0L3.38 6.33A.92.92 0 003.9 8H4v5.34c-.6.38-1 1.06-1 1.83v1.33c0 .28.22.5.5.5zM9.8 3a.33.33 0 01.4 0l5.63 4H4.17L9.8 3zM5 13V8h2v5H5zm6.5 0a2.5 2.5 0 000 5h.5a.5.5 0 100-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 100-1h-.5zm3.5 0a.5.5 0 100 1h.5a1.5 1.5 0 110 3H15a.5.5 0 100 1h.5a2.5 2.5 0 000-5H15zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 110 1h-4a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default BuildingBankLinkIcon
