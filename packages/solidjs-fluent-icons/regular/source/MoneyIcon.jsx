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
			<path d="M7 9a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2zM3.5 4C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-11zM3 5.5c0-.28.22-.5.5-.5H5v1a1 1 0 01-1 1H3V5.5zM3 8h1a2 2 0 002-2V5h6v1c0 1.1.9 2 2 2h1v2h-1a2 2 0 00-2 2v1H6v-1a2 2 0 00-2-2H3V8zm10-3h1.5c.28 0 .5.22.5.5V7h-1a1 1 0 01-1-1V5zm2 6v1.5a.5.5 0 01-.5.5H13v-1a1 1 0 011-1h1zM5 13H3.5a.5.5 0 01-.5-.5V11h1a1 1 0 011 1v1zm12-.5a2.5 2.5 0 01-2.5 2.5H4.09c.2.58.76 1 1.41 1h9a3.5 3.5 0 003.5-3.5v-5c0-.65-.42-1.2-1-1.41v6.41z" />
		</svg>
	)
}
export default MoneyIcon
