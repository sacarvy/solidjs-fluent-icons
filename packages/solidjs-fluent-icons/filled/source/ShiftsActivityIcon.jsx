import { splitProps } from "solid-js"
function ShiftsActivityIcon(props) {
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
			<path d="M10 2.7a.75.75 0 01-.67.83 6.5 6.5 0 107.14 7.14.75.75 0 111.5.16 8 8 0 11-8.8-8.8c.42-.04.79.26.83.68zm1.02-.06c.1-.4.5-.65.9-.55.38.09.75.2 1.1.35a.75.75 0 01-.55 1.39 6.55 6.55 0 00-.9-.29.75.75 0 01-.55-.9zm6.54 4.33a.75.75 0 00-1.39.56c.12.29.21.59.28.9a.75.75 0 101.46-.35c-.09-.38-.2-.75-.35-1.1zM14.3 3.93a.75.75 0 011.06-.08c.3.27.6.56.86.87a.75.75 0 01-1.15.97 6.65 6.65 0 00-.7-.7.75.75 0 01-.07-1.06zM10 5.75a.75.75 0 00-1.5 0v5c0 .41.34.75.75.75h3a.75.75 0 100-1.5H10V5.75z" />
		</svg>
	)
}
export default ShiftsActivityIcon
