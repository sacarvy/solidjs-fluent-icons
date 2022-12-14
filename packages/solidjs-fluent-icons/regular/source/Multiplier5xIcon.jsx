import { splitProps } from "solid-js"
function Multiplier5xIcon(props) {
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
			<path d="M7 6a.5.5 0 00-.5.46l-.25 3a.5.5 0 00.56.54l1.88-.23A1.62 1.62 0 118.9 13h-.36c-.53 0-1.03-.2-1.4-.58l-.28-.27a.5.5 0 00-.7.7l.27.28c.56.56 1.32.87 2.1.87h.36a2.62 2.62 0 10-.3-5.22l-1.28.15L7.46 7h3.04a.5.5 0 000-1H7zm5.15 4.15c.2-.2.5-.2.7 0L14 11.29l1.15-1.14a.5.5 0 01.7.7L14.71 12l1.14 1.15a.5.5 0 01-.7.7L14 12.71l-1.15 1.14a.5.5 0 01-.7-.7L13.29 12l-1.14-1.15a.5.5 0 010-.7zM5 13.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
		</svg>
	)
}
export default Multiplier5xIcon
