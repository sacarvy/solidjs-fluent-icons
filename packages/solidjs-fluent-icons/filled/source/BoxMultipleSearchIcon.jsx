import { splitProps } from "solid-js"
function BoxMultipleSearchIcon(props) {
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
			<path d="M11.42 2.38a3 3 0 012.16 0l3.46 1.33c.58.22.96.78.96 1.4v7.78c0 .07 0 .15-.02.22A4.5 4.5 0 0013.74 9a2.5 2.5 0 00-1.34-1.23L8.94 6.44A4 4 0 007 6.21V5.1c0-.62.38-1.18.96-1.4l3.46-1.33zm4.67 2.44a.5.5 0 00-.64-.29L12.68 5.6a.5.5 0 01-.36 0L9.55 4.53a.5.5 0 00-.35.94l2.76 1.06c.35.13.73.13 1.08 0l2.76-1.06a.5.5 0 00.3-.65zM12.6 9.09a1.5 1.5 0 00-.56-.38L8.58 7.38a3 3 0 00-2.16 0L2.96 8.7A1.5 1.5 0 002 10.1v4.78c0 .62.38 1.18.96 1.4l3.46 1.33a3 3 0 002.16 0l1.94-.75a4.49 4.49 0 01-1.02-5.43l-1.5.58v2.49a.5.5 0 01-1 0V12l-2.8-1.07a.5.5 0 11.35-.93l2.95 1.13L10.45 10a.5.5 0 01.25-.03c.54-.44 1.2-.75 1.9-.9zm3.7 6.5a3.5 3.5 0 10-.7.7l2.55 2.56a.5.5 0 00.7-.7L16.3 15.6zm-.3-2.1a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
		</svg>
	)
}
export default BoxMultipleSearchIcon
