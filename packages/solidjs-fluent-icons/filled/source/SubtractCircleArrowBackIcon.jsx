import { splitProps } from "solid-js"
function SubtractCircleArrowBackIcon(props) {
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
			<path d="M16.98 9.59L17 9a8 8 0 10-7.41 7.98A5.48 5.48 0 0112.2 9.5H5.5a.5.5 0 010-1h7a.5.5 0 01.45.72 5.5 5.5 0 014.03.37zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.4-2.6a.5.5 0 00-.7 0l-1.75 1.75a.5.5 0 000 .7l1.75 1.75a.5.5 0 00.7-.7l-.9-.9h1.55c.97 0 1.75.78 1.75 1.75v.25a.5.5 0 001 0v-.25a2.75 2.75 0 00-2.75-2.75h-1.54l.9-.9a.5.5 0 000-.7z" />
		</svg>
	)
}
export default SubtractCircleArrowBackIcon
