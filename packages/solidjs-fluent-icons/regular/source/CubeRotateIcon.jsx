import { splitProps } from "solid-js"
function CubeRotateIcon(props) {
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
			<path d="M8.95 3.53a2.5 2.5 0 012.1 0L15.7 5.7a.5.5 0 01.29.45V8h1V6.14a1.5 1.5 0 00-.87-1.36l-4.66-2.15a3.5 3.5 0 00-2.94 0L3.87 4.78A1.5 1.5 0 003 6.14V8h1V6.14c0-.2.11-.37.29-.45l4.66-2.16zM3.4 11a6.46 6.46 0 00.76.54A11.4 11.4 0 0010 13a11.4 11.4 0 006-1.56 6.46 6.46 0 001-.8c.2-.21.38-.42.52-.64H16a.5.5 0 010-1h2.5a.5.5 0 01.5.5V12a.5.5 0 01-1 0v-.98a6.2 6.2 0 01-1.64 1.37l-.36.21c-1.6.87-3.7 1.4-6 1.4a12.67 12.67 0 01-6.36-1.61A6.2 6.2 0 012 11.02V12a.5.5 0 01-1 0V9.5a.5.5 0 01.5-.5H4a.5.5 0 010 1H2.48a4.12 4.12 0 00.92 1zm.6 2.72v.14c0 .2.11.37.29.45l4.66 2.16c.67.3 1.43.3 2.1 0l4.66-2.16a.5.5 0 00.29-.45v-.14a10 10 0 001-.55v.7a1.5 1.5 0 01-.87 1.35l-4.66 2.15c-.93.43-2 .43-2.94 0l-4.66-2.15A1.5 1.5 0 013 13.86v-.69c.31.2.65.39 1 .55zM6.04 6.8a.5.5 0 01.66-.26L10 7.96l3.3-1.42a.5.5 0 01.4.92l-3.2 1.37V11a.5.5 0 11-1 0V8.83L6.3 7.46a.5.5 0 01-.26-.66z" />
		</svg>
	)
}
export default CubeRotateIcon
