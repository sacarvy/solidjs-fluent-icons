import { splitProps } from "solid-js"
function DatabaseSearchIcon(props) {
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
			<path d="M4 5c0-1 .88-1.76 1.9-2.22C6.98 2.28 8.43 2 10 2c1.57 0 3.02.29 4.1.78C15.12 3.24 16 3.99 16 5v4.76c-.3-.2-.64-.38-1-.5V6.7c-.27.2-.58.38-.9.52-1.08.5-2.53.78-4.1.78-1.57 0-3.02-.29-4.1-.78A4.92 4.92 0 015 6.7V15c0 .37.36.88 1.32 1.31a9.19 9.19 0 004.33.67c.45.37.97.65 1.53.82-.68.13-1.41.2-2.18.2-1.57 0-3.02-.29-4.1-.78C4.88 16.76 4 16.01 4 15V5zm1 0c0 .37.36.88 1.32 1.31.91.42 2.22.69 3.68.69s2.77-.27 3.68-.69C14.64 5.88 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.19 9.19 0 0010 3c-1.46 0-2.77.27-3.68.69C5.36 4.12 5 4.63 5 5zm8.5 12c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 10.7-.7L16.3 15.6a3.5 3.5 0 10-2.8 1.4zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
		</svg>
	)
}
export default DatabaseSearchIcon
