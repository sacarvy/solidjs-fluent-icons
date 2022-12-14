import { splitProps } from "solid-js"
function MoneyIcon(props) {
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
			<path d="M3.5 4C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-11zM6 5v1a2 2 0 01-2 2H3V7h1a1 1 0 001-1V5h1zm3 5.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM3 11v-1h1a2 2 0 012 2v1H5v-1a1 1 0 00-1-1H3zm11 0a1 1 0 00-1 1v1h-1v-1c0-1.1.9-2 2-2h1v1h-1zm0-4h1v1h-1a2 2 0 01-2-2V5h1v1a1 1 0 001 1zm3 5.5a2.5 2.5 0 01-2.5 2.5H4.09c.2.58.76 1 1.41 1h9a3.5 3.5 0 003.5-3.5v-5c0-.65-.42-1.2-1-1.41v6.41z" />
		</svg>
	)
}
export default MoneyIcon
