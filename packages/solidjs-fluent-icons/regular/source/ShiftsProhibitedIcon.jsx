import { splitProps } from "solid-js"
function ShiftsProhibitedIcon(props) {
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
			<path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3h-3.6c.16-.32.3-.65.4-1H14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v3.2c-.35.1-.68.24-1 .4V6zm7.5 0c.28 0 .5.22.5.5V9h1.5a.5.5 0 010 1h-2a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5zM1 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm1 0a3.5 3.5 0 015.6-2.8l-4.9 4.9a3.48 3.48 0 01-.7-2.1zM5.5 18c-.79 0-1.51-.26-2.1-.7l4.9-4.9A3.5 3.5 0 015.5 18z" />
		</svg>
	)
}
export default ShiftsProhibitedIcon
