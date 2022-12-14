import { splitProps } from "solid-js"
function FoodCarrotIcon(props) {
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
			<path d="M17.85 2.85a.5.5 0 00-.7-.7L14 5.29V2.5a.5.5 0 00-1 0v2.88a3.66 3.66 0 00-4.64 1.2l-6.09 8.95c-.42.63-.34 1.47.2 2 .55.55 1.41.62 2.05.18l8.93-6.18A3.57 3.57 0 0014.63 7h2.87a.5.5 0 000-1h-2.8l3.15-3.15zM9.2 7.14a2.64 2.64 0 014.04-.39 2.58 2.58 0 01-.35 3.96L3.95 16.9a.6.6 0 01-.77-.07.59.59 0 01-.07-.75l6.08-8.94z" />
		</svg>
	)
}
export default FoodCarrotIcon
