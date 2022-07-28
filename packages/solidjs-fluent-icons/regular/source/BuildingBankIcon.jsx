import { splitProps } from "solid-js"
function BuildingBankIcon(props) {
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
			<path d="M10 5.87a.83.83 0 100-1.66.83.83 0 000 1.66zm6 7.47V8h.1a.92.92 0 00.52-1.67l-5.85-4.15a1.33 1.33 0 00-1.54 0L3.38 6.33A.92.92 0 003.9 8H4v5.34c-.6.38-1 1.06-1 1.83v1.33c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-1.33c0-.77-.4-1.45-1-1.83zM9.8 3a.33.33 0 01.4 0l5.63 4H4.17L9.8 3zM15 8v5h-2V8h2zM5 13V8h2v5H5zm.17 1h9.66c.65 0 1.17.52 1.17 1.17V16H4v-.83c0-.65.52-1.17 1.17-1.17zm4.33-1H8V8h1.5v5zm1 0V8H12v5h-1.5z" />
		</svg>
	)
}
export default BuildingBankIcon
