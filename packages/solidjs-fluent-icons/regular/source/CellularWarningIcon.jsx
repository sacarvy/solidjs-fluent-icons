import { splitProps } from "solid-js"
function CellularWarningIcon(props) {
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
			<path d="M16.5 4a.5.5 0 01.5.41v7.12l-.7-1.42c-.09-.17-.19-.31-.3-.44V4.5c0-.28.23-.5.5-.5zM10 15.53l1-2V8.4a.5.5 0 00-1 .1v7.03zm3-5.85c.27-.32.62-.52 1-.62V6.41a.5.5 0 00-1 .1v3.17zM7.5 10a.5.5 0 01.5.4v5.1a.5.5 0 01-.99.09v-5.1c0-.27.22-.5.5-.5zm-3 2a.5.5 0 01.5.4v3.1a.5.5 0 01-1 .09v-3.1c0-.27.22-.5.5-.5zm9.1-1.45l-3.5 7A1 1 0 0011 19h7a1 1 0 00.9-1.45l-3.5-7a1 1 0 00-1.8 0zM15 12.5v3a.5.5 0 01-1 0v-3a.5.5 0 011 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z" />
		</svg>
	)
}
export default CellularWarningIcon
