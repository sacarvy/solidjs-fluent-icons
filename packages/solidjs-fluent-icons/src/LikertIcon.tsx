import { splitProps, ComponentProps, JSX } from "solid-js"

function LikertIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9.5 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM8.75 8a.75.75 0 100-1.5.75.75 0 000 1.5zM11 8a.75.75 0 100-1.5.75.75 0 000 1.5zm2.25 0a.75.75 0 100-1.5.75.75 0 000 1.5zm2.25 0a.75.75 0 100-1.5.75.75 0 000 1.5zM2 7a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm3-2a2 2 0 00-2 2v2.5h3V5H5zm1 5.5H3V13c0 1.1.9 2 2 2h1v-4.5zm1 0V15h8a2 2 0 002-2v-2.5H7zm10-1V7a2 2 0 00-2-2H7v4.5h10z" />
		</svg>
	)
}
export default LikertIcon
