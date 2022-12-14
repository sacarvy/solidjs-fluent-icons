import { splitProps } from "solid-js"
function DataLineIcon(props) {
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
			<path d="M15.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM13 5.5a2.5 2.5 0 111.56 2.32l-1.29 1.92A2.5 2.5 0 0111.5 14a2.5 2.5 0 01-2.05-1.08L6.95 14A2.51 2.51 0 014.5 17a2.5 2.5 0 112.05-3.92L9.05 12A2.51 2.51 0 0111.5 9c.33 0 .65.07.94.18l1.29-1.92A2.5 2.5 0 0113 5.5zm-3 6a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm-7 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
		</svg>
	)
}
export default DataLineIcon
