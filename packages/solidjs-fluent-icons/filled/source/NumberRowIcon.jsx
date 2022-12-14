import { splitProps } from "solid-js"
function NumberRowIcon(props) {
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
			<path d="M4 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h3a2 2 0 002-2V5a2 2 0 00-2-2H4zm1 3.5a.5.5 0 011 0v7a.5.5 0 01-1 0v-7zM13 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h3a2 2 0 002-2V5a2 2 0 00-2-2h-3zm.5 3h2c.28 0 .5.22.5.5V10a.5.5 0 01-.5.5H14V13h1.5a.5.5 0 010 1h-2a.5.5 0 01-.5-.5V10c0-.28.22-.5.5-.5H15V7h-1.5a.5.5 0 010-1z" />
		</svg>
	)
}
export default NumberRowIcon
