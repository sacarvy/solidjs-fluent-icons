import { splitProps } from "solid-js"
function EraserMediumIcon(props) {
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
			<path d="M2.44 11.2a1.5 1.5 0 000 2.12l4.24 4.24a1.5 1.5 0 002.12 0l.72-.72a5.46 5.46 0 01-.37-1.04L8.1 16.86a.5.5 0 01-.71 0L3.15 12.6a.5.5 0 010-.7l1.69-1.7L9 14.39c.01-.43.07-.84.17-1.24L5.54 9.5l6.37-6.36c.2-.2.5-.2.7 0l4.25 4.24c.2.2.2.51 0 .7L15.8 9.16c.36.1.71.22 1.04.37l.72-.72a1.5 1.5 0 000-2.12l-4.24-4.24a1.5 1.5 0 00-2.12 0L2.44 11.2zM14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
		</svg>
	)
}
export default EraserMediumIcon
