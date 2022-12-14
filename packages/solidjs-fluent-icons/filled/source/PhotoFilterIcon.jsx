import { splitProps } from "solid-js"
function PhotoFilterIcon(props) {
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
			<path d="M6.26 13.74a6 6 0 117.48-7.48 6 6 0 11-7.48 7.48zM3.5 8A4.5 4.5 0 006 12.03V12a6 6 0 016.03-6A4.5 4.5 0 003.5 8zm4.47 6A4.5 4.5 0 1014 7.97V8a6 6 0 01-6 6h-.03z" />
		</svg>
	)
}
export default PhotoFilterIcon
