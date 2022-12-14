import { splitProps, ComponentProps, JSX } from "solid-js"

function WrenchIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9 6.5a4.5 4.5 0 016.35-4.1.5.5 0 01.15.8l-2.3 2.3 1.3 1.3 2.3-2.3a.5.5 0 01.8.15A4.49 4.49 0 0113.5 11c-.38 0-.75-.05-1.1-.14l-6.37 6.45a2.36 2.36 0 01-3.37-3.3l6.42-6.65A4.52 4.52 0 019 6.5zM13.5 3a3.5 3.5 0 00-3.39 4.39.5.5 0 01-.12.47L3.38 14.7a1.36 1.36 0 001.94 1.9l6.57-6.66a.5.5 0 01.51-.12 3.5 3.5 0 004.53-4.05l-2.08 2.07a.5.5 0 01-.7 0l-2-2a.5.5 0 010-.7l2.07-2.08A3.52 3.52 0 0013.5 3z" />
		</svg>
	)
}
export default WrenchIcon
