import { splitProps } from "solid-js"
function ShiftsOpenIcon(props) {
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
			<path d="M4.5 5.75c0-.69.56-1.25 1.25-1.25H7.5a.75.75 0 000-1.5H5.75A2.75 2.75 0 003 5.75v8.5A2.75 2.75 0 005.75 17H7.5a.75.75 0 000-1.5H5.75c-.69 0-1.25-.56-1.25-1.25v-8.5zm8-2.75a.75.75 0 000 1.5h1.75c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H12.5a.75.75 0 000 1.5h1.75A2.75 2.75 0 0017 14.25v-8.5A2.75 2.75 0 0014.25 3H12.5zm-2 2.75a.75.75 0 00-1.5 0v4.5c0 .41.34.75.75.75h3.5a.75.75 0 000-1.5H10.5V5.75z" />
		</svg>
	)
}
export default ShiftsOpenIcon
