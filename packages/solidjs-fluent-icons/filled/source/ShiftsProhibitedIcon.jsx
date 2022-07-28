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
			<path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3h-3.6A5.5 5.5 0 003 9.6V6zm8 .5a.5.5 0 00-1 0v3c0 .28.22.5.5.5h2a.5.5 0 000-1H11V6.5zm-10 8a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm1 0a3.5 3.5 0 015.6-2.8l-4.9 4.9a3.48 3.48 0 01-.7-2.1zM5.5 18c-.79 0-1.51-.26-2.1-.7l4.9-4.9A3.5 3.5 0 015.5 18z" />
		</svg>
	)
}
export default ShiftsProhibitedIcon
