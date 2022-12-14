import { splitProps } from "solid-js"
function DocumentBulletListOffIcon(props) {
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
			<path d="M4 4.7L2.15 2.86a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-1.25-1.24A2 2 0 0114 18H6a2 2 0 01-2-2V4.7zm11 11l-1.03-1.02a.5.5 0 01-.47.32h-5a.5.5 0 010-1h4.8l-1-1H8.5a.5.5 0 010-1h2.8l-1-1H8.5a.5.5 0 010-1h.8L5 5.7V16a1 1 0 001 1h8a1 1 0 001-1v-.3zM12.12 10l1 1h.38a.5.5 0 000-1h-1.38zM15 8v4.88l1 1V7.4c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6a2 2 0 00-1.35.53l.7.7A1 1 0 016 3h4v3.5c0 .83.67 1.5 1.5 1.5H15zm-9 2.5a.5.5 0 101 0 .5.5 0 00-1 0zm.5 1.5a.5.5 0 100 1 .5.5 0 000-1zM6 14.5a.5.5 0 111 0 .5.5 0 01-1 0zM14.8 7h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7z" />
		</svg>
	)
}
export default DocumentBulletListOffIcon
