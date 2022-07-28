import { splitProps } from "solid-js"
function StickerIcon(props) {
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
			<path d="M7.5 9a1 1 0 100-2 1 1 0 000 2zm6-1a1 1 0 11-2 0 1 1 0 012 0zM3 6v8a3 3 0 003 3h5.38a1.97 1.97 0 001.41-.59l3.62-3.62a2 2 0 00.59-1.41V6a3 3 0 00-3-3H6a3 3 0 00-3 3zm13 0v5h-2.25c-1.2 0-2.24.78-2.6 1.86-.34.09-.72.14-1.15.14a4.5 4.5 0 01-2.51-.74 1.97 1.97 0 01-.14-.11.5.5 0 00-.7.7v.01l.02.02a2 2 0 00.22.18 5.5 5.5 0 004.11.86V16H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8a2 2 0 012 2zm-3.91 9.7a1 1 0 01-.09.08v-2.03c0-.97.78-1.75 1.75-1.75h2.03l-.07.09-3.62 3.62z" />
		</svg>
	)
}
export default StickerIcon
