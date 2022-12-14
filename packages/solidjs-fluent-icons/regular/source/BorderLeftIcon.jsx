import { splitProps } from "solid-js"
function BorderLeftIcon(props) {
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
			<path d="M17 8.5a.5.5 0 00-1 0v3a.5.5 0 001 0v-3zm-1.05-2.96a2 2 0 00-1.55-1.5.5.5 0 01-.4-.59.5.5 0 01.66-.38 3 3 0 012.29 2.34.5.5 0 01-.4.6.5.5 0 01-.6-.47zM5.34 3.07a.5.5 0 01.66.38.5.5 0 01-.46.6A2 2 0 004 6v8a2 2 0 001.6 1.95.5.5 0 01.4.6.5.5 0 01-.66.38A3 3 0 013 14V6a3 3 0 012.34-2.93zm11.6 11.52a3 3 0 01-2.36 2.36.5.5 0 01-.58-.4.5.5 0 01.46-.6 2 2 0 001.5-1.55.5.5 0 01.59-.4.5.5 0 01.4.6zM8 16.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3z" />
		</svg>
	)
}
export default BorderLeftIcon
