import { splitProps } from "solid-js"
function BoxMultipleArrowLeftIcon(props) {
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
			<path d="M13.58 2.38a3 3 0 00-2.16 0L7.96 3.7A1.5 1.5 0 007 5.1v1.1a4 4 0 011.94.23l3.46 1.34c.61.23 1.1.7 1.36 1.27a5.55 5.55 0 014.24 1.2V5.12a1.5 1.5 0 00-.96-1.4l-3.46-1.33zm1.87 2.15a.5.5 0 11.35.94l-2.76 1.06a1.5 1.5 0 01-1.08 0L9.2 5.47a.5.5 0 01.35-.94l2.77 1.07a.5.5 0 00.36 0l2.77-1.07zm-3.41 4.18c.3.11.54.32.71.57-.62.21-1.2.53-1.7.93a.5.5 0 00-.6-.2L7.5 11.14 4.55 10a.5.5 0 10-.35.93L7 12.02v2.49a.5.5 0 001 0V12l2.09-.8a5.48 5.48 0 00-.39 5.98l-1.12.43a3 3 0 01-2.16 0l-3.46-1.33a1.5 1.5 0 01-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33a3 3 0 012.16 0l3.46 1.33zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.85-.35a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L13.71 15h2.79a.5.5 0 100-1h-2.8l1.15-1.15a.5.5 0 00-.7-.7l-2 2z" />
		</svg>
	)
}
export default BoxMultipleArrowLeftIcon
