import { splitProps, ComponentProps, JSX } from "solid-js"

function RulerIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14 3.5c0-.83-.67-1.5-1.5-1.5h-5C6.67 2 6 2.67 6 3.5v13c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-13zM7 13h2.5a.5.5 0 000-1H7v-1.5h1.5a.5.5 0 000-1H7V8h2.5a.5.5 0 000-1H7V5.5h1.5a.5.5 0 000-1H7v-1c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v13a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1h1.5a.5.5 0 000-1H7V13z" />
		</svg>
	)
}
export default RulerIcon
