import { splitProps } from "solid-js"
function DocumentBulletListMultipleIcon(props) {
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
			<path d="M6.5 10a.5.5 0 100 1 .5.5 0 000-1zM6 12.5a.5.5 0 111 0 .5.5 0 01-1 0zm2-2c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm.5 1.5a.5.5 0 000 1h4a.5.5 0 000-1h-4zM6 2a2 2 0 00-2 2v10c0 1.1.9 2 2 2h7a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 009.59 2H6zM5 4a1 1 0 011-1h3v3.5c0 .83.67 1.5 1.5 1.5H14v6a1 1 0 01-1 1H6a1 1 0 01-1-1V4zm5 2.5V3.2L13.8 7h-3.3a.5.5 0 01-.5-.5zM16 8a1 1 0 011 1v5.06A3.94 3.94 0 0113.06 18H7a1 1 0 01-1-1h7a3 3 0 003-3V8z" />
		</svg>
	)
}
export default DocumentBulletListMultipleIcon
