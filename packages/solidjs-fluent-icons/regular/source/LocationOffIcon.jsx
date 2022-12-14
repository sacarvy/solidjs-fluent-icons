import { splitProps } from "solid-js"
function LocationOffIcon(props) {
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
			<path d="M2.15 2.15c.2-.2.5-.2.7 0l15 15a.5.5 0 01-.7.7l-3.06-3.05-.27.27-2.43 2.37a2 2 0 01-2.64.12l-.14-.12-2.04-1.99-1.52-1.5a7 7 0 01-.78-8.97L2.15 2.85a.5.5 0 010-.7zm8.93 9.63A2.98 2.98 0 017 9c0-.38.07-.74.2-1.07L4.99 5.7a6.01 6.01 0 00.59 7.37l.17.18.58.57 2.98 2.9.09.08a1 1 0 001.2 0l.1-.08 2.22-2.17.47-.45-2.31-2.32zm.77-2.05l.75.75A3 3 0 008.52 6.4l.74.74A1.99 1.99 0 0112 8.99a2 2 0 01-.15.74zm-5.5-5.5a6 6 0 018.42 8.42l.71.71a7 7 0 00-9.84-9.84l.71.71z" />
		</svg>
	)
}
export default LocationOffIcon
