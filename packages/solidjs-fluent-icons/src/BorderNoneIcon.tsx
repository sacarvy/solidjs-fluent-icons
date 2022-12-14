import { splitProps, ComponentProps, JSX } from "solid-js"

function BorderNoneIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm-2.46.55a2 2 0 00-1.5 1.55.5.5 0 01-.59.4.5.5 0 01-.38-.66 3 3 0 012.34-2.29.5.5 0 01.6.4.5.5 0 01-.47.6zm0 11.9a2 2 0 01-1.5-1.55.5.5 0 00-.59-.4.5.5 0 00-.38.66 3 3 0 002.34 2.29.5.5 0 00.6-.4.5.5 0 00-.47-.6zm9.05-12.9a3 3 0 012.36 2.36.5.5 0 01-.4.6.5.5 0 01-.6-.47 2 2 0 00-1.55-1.5.5.5 0 01-.4-.59.5.5 0 01.6-.4zm-.13 12.9a2 2 0 001.5-1.55.5.5 0 01.59-.4.5.5 0 01.38.66 3 3 0 01-2.34 2.29.5.5 0 01-.6-.4.5.5 0 01.47-.6zM16 11.5a.5.5 0 001 0v-3a.5.5 0 00-1 0v3zM3.5 12a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zm5 4a.5.5 0 000 1h3a.5.5 0 000-1h-3z" />
		</svg>
	)
}
export default BorderNoneIcon
