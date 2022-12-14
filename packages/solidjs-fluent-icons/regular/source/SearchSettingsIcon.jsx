import { splitProps } from "solid-js"
function SearchSettingsIcon(props) {
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
			<path d="M8.5 3a5.5 5.5 0 014.23 9.02l4.12 4.13a.5.5 0 01-.63.76l-.07-.06-4.13-4.12a5.5 5.5 0 01-1.12.72 5.45 5.45 0 00-.29-.98A4.5 4.5 0 104.05 9.2c-.33.1-.65.21-.95.36A5.5 5.5 0 018.5 3zm-5.44 8.44a2 2 0 01-1.43 2.48l-.46.12a4.7 4.7 0 00.01 1.01l.35.09A2 2 0 013 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 011.44-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 018 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55zM5.5 15.5a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default SearchSettingsIcon
