import { splitProps } from "solid-js"
function BuildingShopIcon(props) {
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
			<path d="M12 12h2v2h-2v-2zM5 2h10a.5.5 0 01.38.18l2.5 3c.12.14.12.21.12.3V7a3 3 0 01-1 2.24v8.26a.5.5 0 01-.5.5H10v-6.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5V18H3.5a.5.5 0 01-.5-.5V9.24A3 3 0 012 7V5.5a.5.5 0 01.12-.32l2.5-3A.5.5 0 015 2zM3 6v1a2 2 0 104 0V6H3zm5 0v1a2 2 0 104 0V6H8zm5 0v1a2 2 0 104 0V6h-4zM5.23 3L3.57 5h3.57l.67-2H5.23zm6.58 2l-.67-2H8.86l-.67 2h3.62zm1.05 0h3.57l-1.66-2h-2.58l.67 2zM11 11.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5zM9 18v-6H6v6h3z" />
		</svg>
	)
}
export default BuildingShopIcon
