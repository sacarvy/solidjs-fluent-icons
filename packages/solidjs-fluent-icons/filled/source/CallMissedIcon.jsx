import { splitProps } from "solid-js"
function CallMissedIcon(props) {
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
			<path d="M17.8 7.77l.16-.83c.16-.82-.15-1.7-.8-2.28-1.57-1.38-3.84-2.16-7.17-2.16-3.32 0-5.89.79-7.31 2.17-.6.59-.83 1.46-.58 2.28l.25.83A1.74 1.74 0 004.17 9l1.63-.16c.7-.07 1-.66 1.2-1.33.3-1 .5-1.75.5-1.75a6.63 6.63 0 015 0s.2.75.5 1.75c.22.74.75 1.26 1.47 1.33l1.63.16c.83.08 1.55-.44 1.7-1.22zM9.5 11.5c.28 0 .5.22.5.5v1.5h1a.5.5 0 110 1H9.5A.5.5 0 019 14v-2c0-.28.22-.5.5-.5zm-4 2a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM10 10a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
		</svg>
	)
}
export default CallMissedIcon
