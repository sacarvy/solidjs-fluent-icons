import { splitProps, ComponentProps, JSX } from "solid-js"

function RewindIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 5.49a1 1 0 00-1.6-.8l-5.87 4.3c-.68.5-.68 1.52 0 2.02l5.88 4.31a1 1 0 001.59-.8v-3.17l5.4 3.97a1 1 0 001.6-.8V5.48a1 1 0 00-1.6-.8L10 8.64V5.49zm-6.88 4.3L9 5.5v9.02l-5.88-4.3a.25.25 0 010-.41zm7 0L16 5.5v9.02l-5.88-4.3a.25.25 0 010-.41z" />
		</svg>
	)
}
export default RewindIcon
