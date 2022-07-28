import { splitProps } from "solid-js"
function PhoneVerticalScrollIcon(props) {
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
			<path d="M7.65 11.15c.2-.2.5-.2.7 0L10 12.79l1.65-1.64a.5.5 0 01.7.7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 010-.7zm4-2.3a.5.5 0 00.7-.7l-2-2a.5.5 0 00-.7 0l-2 2a.5.5 0 10.7.7L10 7.21l1.65 1.64zM5 3.5C5 2.67 5.67 2 6.5 2h7c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 015 16.5v-13zM6.5 3a.5.5 0 00-.5.5v13c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-7z" />
		</svg>
	)
}
export default PhoneVerticalScrollIcon
