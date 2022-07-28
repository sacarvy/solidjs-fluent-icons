import { splitProps } from "solid-js"
function CheckmarkStarburstIcon(props) {
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
			<path d="M8.46 1.9l.99.39c.35.14.75.14 1.1 0l.99-.4c1.21-.47 2.58.1 3.1 1.3l.42.97c.16.35.43.62.78.77l.98.43c1.2.52 1.76 1.89 1.28 3.1l-.39.99a1.5 1.5 0 000 1.1l.4.99a2.42 2.42 0 01-1.3 3.1l-.97.42a1.5 1.5 0 00-.78.78l-.42.98a2.42 2.42 0 01-3.1 1.28l-1-.39a1.5 1.5 0 00-1.09 0l-.99.4a2.42 2.42 0 01-3.1-1.3l-.43-.97a1.5 1.5 0 00-.77-.78l-.98-.42a2.42 2.42 0 01-1.28-3.1l.39-1a1.5 1.5 0 000-1.09l-.4-.99a2.42 2.42 0 011.3-3.1l.97-.43c.35-.15.62-.42.77-.77l.43-.98a2.42 2.42 0 013.1-1.28zm4.17 5.77l-3.65 4.1-1.63-1.62a.5.5 0 00-.7.7l2 2c.2.2.53.2.72-.02l4-4.5a.5.5 0 00-.74-.66z" />
		</svg>
	)
}
export default CheckmarkStarburstIcon
