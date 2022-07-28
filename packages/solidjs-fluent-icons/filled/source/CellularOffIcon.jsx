import { splitProps } from "solid-js"
function CellularOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L10 10.71v4.65a.75.75 0 001.5-.11v-3.04l1.5 1.5V15.36a.75.75 0 001.5-.11v-.04l2.65 2.64a.5.5 0 00.7-.7l-15-15zM13 10.88V6.75a.75.75 0 011.5-.11v5.74l-1.5-1.5zm4.48 4.48L16 13.88l.01-9.13a.74.74 0 011.48-.12l.01.1-.01 10.52-.01.1zM5.49 12.64a.75.75 0 00-1.49.11v2.61a.75.75 0 001.5-.11v-2.61zm3-2a.75.75 0 00-1.49.11v4.61a.75.75 0 001.5-.11v-4.61z" />
		</svg>
	)
}
export default CellularOffIcon
