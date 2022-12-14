import { splitProps } from "solid-js"
function ArrowAutofitHeightDottedIcon(props) {
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
			<path d="M16.14 4.8L14.5 3.12l-1.64 1.7a.5.5 0 01-.72-.7l1.82-1.88c.3-.3.79-.3 1.08 0l1.82 1.88a.5.5 0 11-.72.7zM5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h4.5a.5.5 0 000-1H5a1 1 0 01-1-1V5a1 1 0 011-1h4.5a.5.5 0 000-1H5zm9.5 2c.28 0 .5.22.5.5V7a.5.5 0 11-1 0V5.5c0-.28.23-.5.5-.5zm.5 8a.5.5 0 10-1 0v1.5a.5.5 0 001 0V13zm-.5-4c.28 0 .5.22.5.5v1a.5.5 0 11-1 0v-1c0-.28.23-.5.5-.5zm1.64 6.2l-1.64 1.69-1.64-1.7a.5.5 0 10-.72.7l1.82 1.88c.3.3.79.3 1.08 0l1.82-1.88a.5.5 0 10-.72-.7z" />
		</svg>
	)
}
export default ArrowAutofitHeightDottedIcon
