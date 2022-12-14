import { splitProps } from "solid-js"
function OpenIcon(props) {
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
			<path d="M6.25 4.5c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75h7.5c.97 0 1.75-.78 1.75-1.75v-2a.75.75 0 011.5 0v2c0 1.8-1.46 3.25-3.25 3.25h-7.5A3.25 3.25 0 013 13.75v-7.5C3 4.45 4.46 3 6.25 3h2a.75.75 0 010 1.5h-2zm4.25-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75v5a.75.75 0 01-1.5 0V5.56l-3.72 3.72a.75.75 0 11-1.06-1.06l3.72-3.72h-3.19a.75.75 0 01-.75-.75z" />
		</svg>
	)
}
export default OpenIcon
