import { splitProps, ComponentProps, JSX } from "solid-js"

function DrawerPlayIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17 9.74V15a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h2.2c-.08.32-.15.66-.18 1H6a2 2 0 00-2 2h4.2c.1.35.24.68.4 1H4v3h3.5c.28 0 .5.22.5.5a2 2 0 104 0c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66zM14 17a2 2 0 002-2v-3h-3.04a3 3 0 01-5.92 0H4v3c0 1.1.9 2 2 2h8zm-.5-7a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.76-6.59l2.97 1.65a.5.5 0 010 .88l-2.97 1.65a.5.5 0 01-.74-.44v-3.3a.5.5 0 01.74-.44z" />
		</svg>
	)
}
export default DrawerPlayIcon
