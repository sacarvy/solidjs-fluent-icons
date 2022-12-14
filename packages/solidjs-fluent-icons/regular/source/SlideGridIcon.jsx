import { splitProps } from "solid-js"
function SlideGridIcon(props) {
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
			<path d="M5 6a1 1 0 00-1 1v1.5a1 1 0 001 1h3.5a1 1 0 001-1V7a1 1 0 00-1-1H5zm3.5 1v1.5H5V7h3.5zM4 11.5a1 1 0 011-1h3.5a1 1 0 011 1V13a1 1 0 01-1 1H5a1 1 0 01-1-1v-1.5zm1 0V13h3.5v-1.5H5zM11.5 6H15a1 1 0 011 1v1.5a1 1 0 01-1 1h-3.5a1 1 0 01-1-1V7a1 1 0 011-1zM15 7h-3.5v1.5H15V7zm-4.5 4.5a1 1 0 011-1H15a1 1 0 011 1V13a1 1 0 01-1 1h-3.5a1 1 0 01-1-1v-1.5zm1 0V13H15v-1.5h-3.5zM2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2-1a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H4z" />
		</svg>
	)
}
export default SlideGridIcon
