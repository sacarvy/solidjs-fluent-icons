import { splitProps } from "solid-js"
function DraftsIcon(props) {
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
			<path d="M15.61 8.32l-3.93-3.94-8.04 8.04-.12.13a2 2 0 00-.4.76l-1.1 4.06-.02.08a.5.5 0 00.63.53l4.06-1.1.16-.06a2 2 0 00.73-.46l8.03-8.04zm1.57-5.5a2.78 2.78 0 00-3.93 0l-.87.86 3.94 3.93.86-.86.13-.14c.96-1.09.91-2.75-.13-3.8zM11.65 3H2.5a.5.5 0 000 1h8.15l1-1zm-3 3H2.5a.5.5 0 000 1h5.15l1-1zm-3 3l-1 1H2.5a.5.5 0 110-1h3.15z" />
		</svg>
	)
}
export default DraftsIcon
