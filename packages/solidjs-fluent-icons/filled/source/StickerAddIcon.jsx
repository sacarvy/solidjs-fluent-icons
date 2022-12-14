import { splitProps } from "solid-js"
function StickerAddIcon(props) {
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
			<path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v3.6a5.5 5.5 0 00-7.78 3.34 4.23 4.23 0 01-1.73-.68 1.97 1.97 0 01-.14-.11.5.5 0 00-.7.7v.01l.02.02a2 2 0 00.22.18 5.22 5.22 0 002.14.87A5.56 5.56 0 009.6 17H6a3 3 0 01-3-3V6zm4.5 3a1 1 0 100-2 1 1 0 000 2zm6-1a1 1 0 10-2 0 1 1 0 002 0zm5.5 6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default StickerAddIcon
