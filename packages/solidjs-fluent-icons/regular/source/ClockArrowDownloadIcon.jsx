import { splitProps } from "solid-js"
function ClockArrowDownloadIcon(props) {
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
			<path d="M3 9.5a7.5 7.5 0 117.4 7.5c.16-.32.3-.66.4-1A6.5 6.5 0 104 9.2c-.34.1-.68.24-1 .4v-.1zM10.5 5c.28 0 .5.22.5.5V9h2.5a.5.5 0 010 1h-3a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5zM5 10.03a4.5 4.5 0 101 0v3.76l.65-.64a.5.5 0 01.7.7l-1.5 1.5a.5.5 0 01-.7 0l-1.5-1.5a.5.5 0 01.7-.7l.65.64v-3.76zM3.5 16h4a.5.5 0 010 1h-4a.5.5 0 010-1z" />
		</svg>
	)
}
export default ClockArrowDownloadIcon
