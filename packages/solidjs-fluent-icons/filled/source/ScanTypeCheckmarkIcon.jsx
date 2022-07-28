import { splitProps } from "solid-js"
function ScanTypeCheckmarkIcon(props) {
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
			<path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v1.5a.75.75 0 01-1.5 0v-1.5A2.75 2.75 0 014.75 2h1.5a.75.75 0 010 1.5h-1.5zm0 13c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 00-1.5 0v1.5A2.75 2.75 0 004.75 18h1.5a.75.75 0 000-1.5h-1.5zM16.5 4.75c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 010-1.5h1.5A2.75 2.75 0 0118 4.75v1.5a.75.75 0 01-1.5 0v-1.5zM6.5 5a.75.75 0 00-.75.75v1a.75.75 0 001.5 0V6.5h2v6.36a5.5 5.5 0 011.5-2.38V6.5h2v.25a.75.75 0 001.5 0v-1A.75.75 0 0013.5 5h-7zm1.25 8.5h1.34a5.53 5.53 0 00-.07 1.5H7.75a.75.75 0 010-1.5zm11.25 1a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.5.8l-.65-.65a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 00-.7-.7l-2.65 2.64z" />
		</svg>
	)
}
export default ScanTypeCheckmarkIcon
