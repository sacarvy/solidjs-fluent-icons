import { splitProps } from "solid-js"
function ColorLineIcon(props) {
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
			<path d="M15.24 2.54a2.26 2.26 0 00-3.07.13L6.21 8.66l-.11.12a1.5 1.5 0 00-.28.56l-.8 3.08-.01.08a.5.5 0 00.62.53l3.08-.76.16-.05c.2-.08.4-.2.55-.35l5.96-6 .12-.12c.72-.85.72-2.1 0-2.95l-.13-.14-.13-.12zM4.1 12H4a2 2 0 00-2 2v2c0 1.1.9 2 2 2h12a2 2 0 002-2v-2a2 2 0 00-2-2h-5.3l-.57.57a2.5 2.5 0 01-.92.59H9.2l-.21.07-3.11.77A1.5 1.5 0 014 12.4v-.04l.04-.16.05-.21z" />
		</svg>
	)
}
export default ColorLineIcon
