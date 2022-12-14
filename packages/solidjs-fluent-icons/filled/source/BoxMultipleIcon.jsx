import { splitProps } from "solid-js"
function BoxMultipleIcon(props) {
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
			<path d="M13.58 2.38a3 3 0 00-2.16 0L7.96 3.7A1.5 1.5 0 007 5.1v1.1a4 4 0 011.94.23l3.46 1.34A2.5 2.5 0 0114 10.1v4.78c0 .2-.03.4-.07.6l3.1-1.2c.59-.22.97-.78.97-1.4V5.1a1.5 1.5 0 00-.96-1.4l-3.46-1.33zm1.87 2.15a.5.5 0 11.35.94l-2.76 1.06a1.5 1.5 0 01-1.08 0L9.2 5.47a.5.5 0 01.35-.94l2.77 1.07a.5.5 0 00.36 0l2.77-1.07zM6.42 7.38a3 3 0 012.16 0l3.46 1.33c.58.22.96.78.96 1.4v4.78a1.5 1.5 0 01-.96 1.4l-3.46 1.33a3 3 0 01-2.16 0l-3.46-1.33a1.5 1.5 0 01-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33zm4.67 2.91a.5.5 0 00-.64-.28L7.5 11.14 4.55 10a.5.5 0 10-.35.93L7 12.02v2.49a.5.5 0 001 0V12l2.8-1.07a.5.5 0 00.3-.65z" />
		</svg>
	)
}
export default BoxMultipleIcon
