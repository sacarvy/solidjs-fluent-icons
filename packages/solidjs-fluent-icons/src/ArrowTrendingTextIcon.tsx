import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowTrendingTextIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17 3.5a.5.5 0 00-.5-.5h-4a.5.5 0 000 1h2.8L11 8.3 9.35 6.64a.5.5 0 00-.7 0l-5.5 5.5a.5.5 0 00.7.7L9 7.71l1.65 1.64a.5.5 0 00.7 0L16 4.71V7.5a.5.5 0 001 0v-4zM10 13c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2h-5a2 2 0 01-2-2v-4zm6.5 3h-4a.5.5 0 100 1h4a.5.5 0 100-1zm-4-3a.5.5 0 100 1h4a.5.5 0 100-1h-4z" />
		</svg>
	)
}
export default ArrowTrendingTextIcon
