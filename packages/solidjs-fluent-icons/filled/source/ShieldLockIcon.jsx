import { splitProps } from "solid-js"
function ShieldLockIcon(props) {
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
			<path d="M12.5 12v-1a2 2 0 114 0v1h.5a1 1 0 011 1v4a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4a1 1 0 011-1h.5zm1-1v1h2v-1a1 1 0 10-2 0zm1.75 4a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM9.72 2.08a.5.5 0 01.56 0c1.94 1.3 4.03 2.1 6.3 2.43A.5.5 0 0117 5v4.34A3 3 0 0011.5 11v.06A2 2 0 0010 13v4a2 2 0 00.24.94l-.06.03a.5.5 0 01-.36 0C5.31 16.23 3 13.39 3 9.5V5a.5.5 0 01.43-.5 15.05 15.05 0 006.3-2.42z" />
		</svg>
	)
}
export default ShieldLockIcon
