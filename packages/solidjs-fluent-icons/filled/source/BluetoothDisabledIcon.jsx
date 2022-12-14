import { splitProps } from "solid-js"
function BluetoothDisabledIcon(props) {
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
			<path d="M8.87 9.57L2.15 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-3.8-3.79-2.77 3.41a.76.76 0 01-.07.08l-.14.17a.75.75 0 01-1.33-.47V11.36l-1.82 1.47a.75.75 0 01-.94-1.16l2.59-2.1zM12.29 13l-1.75-1.74V15.14l.93-1.14.82-1zm1.43-5.4L11.5 9.37 9.04 6.92V2.75a.75.75 0 011.33-.47l3.46 4.25a.75.75 0 01-.1 1.05zm-2.2-.17h.01l.66-.53-1.65-2.03v3.36l.99-.8z" />
		</svg>
	)
}
export default BluetoothDisabledIcon
