import { splitProps } from "solid-js"
function FingerprintIcon(props) {
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
			<path d="M6.83 4.18c1.47-.72 4.65-1.4 8.26.95a.75.75 0 00.82-1.26C11.79 1.2 8.03 1.93 6.17 2.82a.75.75 0 10.66 1.36zm-1.71.27c.23.35.13.82-.22 1.04a5.1 5.1 0 00-1.25 1.39.75.75 0 11-1.3-.76c.28-.48.99-1.4 1.73-1.88a.75.75 0 011.04.21zm5.38-.16a.75.75 0 000 1.5c1.55 0 5.3 1.3 6.26 6.35a.75.75 0 101.48-.28C17.1 6 12.67 4.29 10.5 4.29zm-1.51.78a.75.75 0 01-.45.96C4.6 7.46 3.61 11.23 4 13.89a.75.75 0 11-1.48.22c-.44-3.1.69-7.74 5.52-9.5.39-.13.82.07.96.46zm-.87 3.92c-1.6 1.24-2.58 3.92-.95 7.17a.75.75 0 01-1.34.68c-1.92-3.82-.87-7.3 1.37-9.04a5.07 5.07 0 013.92-1.05 5.72 5.72 0 013.81 2.67.75.75 0 01-1.25.83 4.23 4.23 0 00-2.8-2.02A3.57 3.57 0 008.12 9zm7.63 2.97a.75.75 0 10-1.5.08c.1 1.91 1.29 2.94 2.02 3.17a.75.75 0 10.45-1.43 1.72 1.72 0 01-.5-.43 2.46 2.46 0 01-.47-1.4zm-4.5.54a.75.75 0 00-1.5 0c0 1.07.13 1.9.45 2.73.32.8.8 1.55 1.44 2.45a.75.75 0 101.22-.86 10.4 10.4 0 01-1.26-2.14 5.69 5.69 0 01-.35-2.18zm-1.13 4.64C8.05 13.4 8.78 11.58 9.5 11a1.43 1.43 0 012.3.72c.06.2.12.44.18.77l.04.17c.08.38.18.84.33 1.3.3.95.84 1.99 1.93 2.79a.75.75 0 00.89-1.21 3.93 3.93 0 01-1.4-2.04c-.12-.39-.2-.77-.28-1.15l-.04-.16c-.06-.3-.13-.64-.21-.91a2.93 2.93 0 00-4.68-1.45c-1.62 1.31-1.92 4.12.25 8.03a.75.75 0 001.31-.72z" />
		</svg>
	)
}
export default FingerprintIcon
