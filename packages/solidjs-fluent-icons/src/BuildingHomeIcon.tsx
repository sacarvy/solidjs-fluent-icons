import { splitProps, ComponentProps, JSX } from "solid-js"

function BuildingHomeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3.25 3a.25.25 0 00-.25.25v10.5c0 .14.11.25.25.25H7.5v1H3.25C2.56 15 2 14.44 2 13.75V3.25C2 2.56 2.56 2 3.25 2h5.5C9.44 2 10 2.56 10 3.25v2.5c0 .14.11.25.25.25h1.5c.69 0 1.25.56 1.25 1.25V8c-.35.04-.7.16-1 .37V7.25a.25.25 0 00-.25-.25h-1.5C9.56 7 9 6.44 9 5.75v-2.5A.25.25 0 008.75 3h-5.5zm10.81 6.28c-.47-.4-1.15-.4-1.62 0l-3.47 2.96c-.3.26-.47.63-.47 1.02v4.61C8.5 18.5 9 19 9.63 19h1.74c.63 0 1.13-.5 1.13-1.13v-1.75c0-.06.06-.12.13-.12h1.24c.07 0 .13.06.13.13v1.74c0 .63.5 1.13 1.13 1.13h1.74c.63 0 1.13-.5 1.13-1.13v-4.61c0-.4-.17-.76-.47-1.02l-3.47-2.96zm-.97.77c.1-.08.23-.08.32 0L16.88 13c.08.07.12.16.12.26v4.61c0 .07-.06.13-.13.13h-1.75a.12.12 0 01-.12-.13v-1.75c0-.62-.5-1.12-1.13-1.12h-1.24c-.63 0-1.13.5-1.13 1.13v1.74c0 .07-.06.13-.13.13H9.63a.12.12 0 01-.13-.13v-4.61c0-.1.04-.2.12-.26l3.47-2.95zM5.5 4.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 3a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 1.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.25 5.5a.75.75 0 100-1.5.75.75 0 000 1.5zM8 7a.75.75 0 11-1.5 0A.75.75 0 018 7zm-.75 3a.75.75 0 100-1.5.75.75 0 000 1.5z" />
		</svg>
	)
}
export default BuildingHomeIcon
