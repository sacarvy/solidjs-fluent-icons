import { splitProps } from "solid-js"
function TapDoubleIcon(props) {
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
			<path d="M4 8.5a5.5 5.5 0 1110.97.6c.34.15.65.34.93.57A6.5 6.5 0 103.64 11.3c.25-.25.53-.45.82-.61A5.48 5.48 0 014 8.5zm10 0l-.01.33-1-.17.01-.16a3.5 3.5 0 10-6.57 1.69 4.4 4.4 0 00-1.05.13A4.48 4.48 0 019.5 4 4.5 4.5 0 0114 8.5zm-6-1a1.5 1.5 0 113 0v2.08l2.94.51a2.5 2.5 0 011.91 3.33l-.98 2.67a2.5 2.5 0 01-1.92 1.6l-1.52.26c-1.02.18-1.95-.45-2.43-1.23A5.87 5.87 0 004.44 14a.5.5 0 01-.43-.62c.15-.6.43-1.04.82-1.36.39-.32.85-.47 1.3-.52.63-.06 1.29.05 1.87.25V7.5z" />
		</svg>
	)
}
export default TapDoubleIcon
