import { splitProps, ComponentProps, JSX } from "solid-js"

function CheckmarkStarburstIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8.46 1.9l.99.39c.35.14.75.14 1.1 0l.99-.4c1.21-.47 2.58.1 3.1 1.3l.42.97c.16.35.43.62.78.77l.98.43c1.2.52 1.76 1.89 1.28 3.1l-.39.99a1.5 1.5 0 000 1.1l.4.99a2.42 2.42 0 01-1.3 3.1l-.97.42a1.5 1.5 0 00-.78.78l-.42.98a2.42 2.42 0 01-3.1 1.28l-1-.39a1.5 1.5 0 00-1.09 0l-.99.4a2.42 2.42 0 01-3.1-1.3l-.43-.97a1.5 1.5 0 00-.77-.78l-.98-.42a2.42 2.42 0 01-1.28-3.1l.39-1a1.5 1.5 0 000-1.09l-.4-.99a2.42 2.42 0 011.3-3.1l.97-.43c.35-.15.62-.42.77-.77l.43-.98a2.42 2.42 0 013.1-1.28zm3.44.93l-.99.39a2.5 2.5 0 01-1.83 0l-.99-.4a1.42 1.42 0 00-1.81.76l-.43.98a2.5 2.5 0 01-1.3 1.3l-.97.42c-.7.3-1.03 1.1-.75 1.81l.39 1a2.5 2.5 0 010 1.82l-.4 1c-.27.7.06 1.5.76 1.81l.98.43a2.5 2.5 0 011.3 1.3l.42.97c.3.7 1.1 1.03 1.81.75l1-.39a2.5 2.5 0 011.82 0l1 .4c.7.27 1.5-.06 1.81-.76l.43-.98a2.5 2.5 0 011.3-1.3l.97-.42c.7-.3 1.03-1.1.75-1.82l-.39-.99a2.5 2.5 0 010-1.83l.4-.99a1.42 1.42 0 00-.76-1.81l-.98-.43a2.5 2.5 0 01-1.3-1.3l-.42-.97c-.3-.7-1.1-1.03-1.82-.75zm-2.92 8.94l3.65-4.1a.5.5 0 01.8.59l-.06.07-4 4.5a.5.5 0 01-.65.08l-.07-.06-2-2a.5.5 0 01.63-.76l.07.06 1.63 1.62 3.65-4.1-3.65 4.1z" />
		</svg>
	)
}
export default CheckmarkStarburstIcon
