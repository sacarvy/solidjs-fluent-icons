import { splitProps } from "solid-js"
function BorderLeftIcon(props) {
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
			<path d="M16.25 8c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75zM3 11.27V14a3 3 0 001.96 2.81.75.75 0 00.58-1.38A1.5 1.5 0 014.5 14V6a1.5 1.5 0 011.03-1.43.75.75 0 00-.58-1.38A3 3 0 003 6v5.27zM14.55 4.6a1.5 1.5 0 01.88.94.75.75 0 001.38-.58 3 3 0 00-1.77-1.77.75.75 0 10-.49 1.41zm.85 9.95a1.5 1.5 0 01-.94.88.75.75 0 00.58 1.38 3 3 0 001.77-1.77.75.75 0 10-1.41-.5zM8.75 3a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zM8 16.25c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" />
		</svg>
	)
}
export default BorderLeftIcon
