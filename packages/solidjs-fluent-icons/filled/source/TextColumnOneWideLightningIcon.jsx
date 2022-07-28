import { splitProps } from "solid-js"
function TextColumnOneWideLightningIcon(props) {
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
			<path d="M3.75 5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75zm0 3a.75.75 0 000 1.5h8.46a5.48 5.48 0 014.39-.09.75.75 0 00-.35-1.41H3.75zm0 3h6.5a5.5 5.5 0 00-.88 1.5H3.75a.75.75 0 010-1.5zm0 3h5.27a5.57 5.57 0 00.07 1.5H3.75a.75.75 0 010-1.5zm15.25.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.12-3a.5.5 0 00-.47.33l-.88 2.5A.5.5 0 0013 15h.78l-.51 1.87a.5.5 0 00.9.4l2.25-3.5A.5.5 0 0016 13h-.75l.28-.84a.5.5 0 00-.47-.66h-1.18z" />
		</svg>
	)
}
export default TextColumnOneWideLightningIcon
