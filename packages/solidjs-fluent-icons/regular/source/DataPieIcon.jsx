import { splitProps } from "solid-js"
function DataPieIcon(props) {
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
			<path d="M9 12a1 1 0 01-1-1V5.08A6 6 0 1014.92 12H9zM8 4.07c.55-.08 1 .38 1 .93v6h6c.55 0 1 .45.93 1A7 7 0 118 4.07zM11 9V3a6 6 0 016 6h-6zm6.06 1c.5 0 .93-.37.94-.86V9a7 7 0 00-7.14-7c-.5.01-.86.44-.86.94V9a1 1 0 001 1h6.06z" />
		</svg>
	)
}
export default DataPieIcon
