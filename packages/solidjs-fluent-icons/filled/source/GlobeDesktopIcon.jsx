import { splitProps } from "solid-js"
function GlobeDesktopIcon(props) {
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
			<path d="M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 00-5.09-4.22zm5.5 5.22h-3.76c.1.8.15 1.63.15 2.5h4a8 8 0 00-.4-2.5zm-4.77 0c.1.79.16 1.63.16 2.5h-2a2 2 0 00-2 2v.5H7.16a19.44 19.44 0 010-5h5.68zm-5.52 6H9V16a2 2 0 001.41 1.91c-.14.06-.28.09-.41.09-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32zm.57 4.22A8.02 8.02 0 012.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52zM2.4 12.5h3.76a20.52 20.52 0 010-5H2.4a8 8 0 000 5zM10 12a1 1 0 011-1h7a1 1 0 011 1v4a1 1 0 01-1 1h-2v1h.5a.5.5 0 010 1h-4a.5.5 0 010-1h.5v-1h-2a1 1 0 01-1-1v-4z" />
		</svg>
	)
}
export default GlobeDesktopIcon
