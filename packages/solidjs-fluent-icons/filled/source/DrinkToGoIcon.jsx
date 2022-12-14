import { splitProps } from "solid-js"
function DrinkToGoIcon(props) {
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
			<path d="M13.85 2.15c.2.2.2.5 0 .7L12.71 4h1.62c.32 0 .6.2.7.5l.92 2.5c.18.48-.18 1-.7 1h-.34l-1.43 8.34A2 2 0 0111.51 18H8.5a2 2 0 01-1.97-1.66L5.09 8h-.34a.75.75 0 01-.7-1.01l.92-2.5c.11-.3.39-.49.7-.49h5.65a.5.5 0 01.08-.1l1.75-1.75c.2-.2.5-.2.7 0zM5.11 7h9.78l-.73-2H5.85L5.1 7z" />
		</svg>
	)
}
export default DrinkToGoIcon
