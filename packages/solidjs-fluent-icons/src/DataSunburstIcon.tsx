import { splitProps, ComponentProps, JSX } from "solid-js"

function DataSunburstIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.94 3.13a.5.5 0 01-.2.68A7.03 7.03 0 003.8 6.73a.5.5 0 01-.89-.46 8.03 8.03 0 013.35-3.35.5.5 0 01.67.21zm6.12 0a.5.5 0 01.67-.2 8.03 8.03 0 013.35 3.34.5.5 0 01-.89.46 7.03 7.03 0 00-2.92-2.92.5.5 0 01-.21-.68zm-9.93 9.93a.5.5 0 01.68.2 7.03 7.03 0 002.92 2.93.5.5 0 01-.46.89 8.03 8.03 0 01-3.35-3.35.5.5 0 01.21-.67zm13.74 0a.5.5 0 01.2.67 8.03 8.03 0 01-3.34 3.35.5.5 0 11-.46-.89 7.03 7.03 0 002.92-2.92.5.5 0 01.68-.21zM10 5.5c-.15 0-.3 0-.45.02a.5.5 0 11-.1-1L10 4.5a5.5 5.5 0 015.25 3.85.5.5 0 11-.96.3A4.5 4.5 0 0010 5.5zm-2.6.2a.5.5 0 01-.1.7 4.5 4.5 0 00-1.2 5.85.5.5 0 01-.86.5A5.48 5.48 0 016.7 5.6a.5.5 0 01.7.1zm7.52 5.32a.5.5 0 01.33.63 5.5 5.5 0 01-8 3.11.5.5 0 01.5-.86 4.5 4.5 0 006.54-2.55.5.5 0 01.63-.33zM8 10a2 2 0 114 0 2 2 0 01-4 0zm2-3a3 3 0 100 6 3 3 0 000-6z" />
		</svg>
	)
}
export default DataSunburstIcon
