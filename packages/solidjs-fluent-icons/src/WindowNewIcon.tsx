import { splitProps, ComponentProps, JSX } from "solid-js"

function WindowNewIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9.52 6a.5.5 0 000 1h2.77l-4.14 4.15a.5.5 0 00.7.7L13 7.71v2.77a.5.5 0 001 0V6.5a.5.5 0 00-.5-.5H9.52zm3.25 11a2.5 2.5 0 002.47-2.11A2.5 2.5 0 0017 12.5v-7A2.5 2.5 0 0014.5 3h-7a2.5 2.5 0 00-2.4 1.8A2.5 2.5 0 003 7.27v6.23A3.5 3.5 0 006.5 17h6.27zM4 7.27c0-.66.42-1.21 1-1.42v6.65A2.5 2.5 0 007.5 15h6.68c-.2.58-.76 1-1.41 1H6.5A2.5 2.5 0 014 13.5V7.27zM7.5 4h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 016 12.5v-7C6 4.67 6.67 4 7.5 4z" />
		</svg>
	)
}
export default WindowNewIcon
