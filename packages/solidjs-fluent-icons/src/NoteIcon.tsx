import { splitProps, ComponentProps, JSX } from "solid-js"

function NoteIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14 3a3 3 0 013 2.82v4.56a2 2 0 01-.47 1.28l-.12.13-4.62 4.62a2 2 0 01-1.24.58l-.17.01H6a3 3 0 01-3-2.82V6a3 3 0 012.82-3H14zm0 1H6a2 2 0 00-2 1.85V14a2 2 0 001.85 2H10v-3a3 3 0 012.82-3H16V6a2 2 0 00-1.85-2H14zm1.78 7H13a2 2 0 00-2 1.85V15.78l.09-.07 4.62-4.62a1 1 0 00.07-.09z" />
		</svg>
	)
}
export default NoteIcon
