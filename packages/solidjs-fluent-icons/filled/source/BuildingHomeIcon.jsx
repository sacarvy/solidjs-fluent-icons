import { splitProps } from "solid-js"
function BuildingHomeIcon(props) {
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
			<path d="M3.25 2C2.56 2 2 2.56 2 3.25v10.5c0 .69.56 1.25 1.25 1.25H7.5v-1.74c0-.68.3-1.33.82-1.78l3.47-2.96c.35-.3.78-.47 1.21-.52v-.75C13 6.56 12.44 6 11.75 6h-1.5a.25.25 0 01-.25-.25v-2.5C10 2.56 9.44 2 8.75 2h-5.5zm1.5 3.5a.75.75 0 110-1.5.75.75 0 010 1.5zM5.5 7A.75.75 0 114 7a.75.75 0 011.5 0zm-.75 3a.75.75 0 110-1.5.75.75 0 010 1.5zM8 4.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 3a.75.75 0 110-1.5.75.75 0 010 1.5zM8 9.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6.06.03c-.47-.4-1.15-.4-1.62 0l-3.47 2.96c-.3.26-.47.63-.47 1.02v4.61C8.5 18.5 9 19 9.63 19h1.74c.63 0 1.13-.5 1.13-1.13v-1.75c0-.06.06-.12.13-.12h1.24c.07 0 .13.06.13.13v1.74c0 .63.5 1.13 1.13 1.13h1.74c.63 0 1.13-.5 1.13-1.13v-4.61c0-.4-.17-.76-.47-1.02l-3.47-2.96zm-.97.77c.1-.08.23-.08.32 0L16.88 13c.08.07.12.16.12.26v4.61c0 .07-.06.13-.13.13h-1.75a.12.12 0 01-.12-.13v-1.75c0-.62-.5-1.12-1.13-1.12h-1.24c-.63 0-1.13.5-1.13 1.13v1.74c0 .07-.06.13-.13.13H9.63a.12.12 0 01-.13-.13v-4.61c0-.1.04-.2.12-.26l3.47-2.95z" />
		</svg>
	)
}
export default BuildingHomeIcon
