import { splitProps, ComponentProps, JSX } from "solid-js"

function BookAddIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14 3H6a1 1 0 00-1 1v11h4.02c.03.34.1.68.19 1H5a1 1 0 001 1h3.6c.18.36.4.7.66 1H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2h8a2 2 0 012 2v5.2c-.32-.08-.66-.15-1-.18V4a1 1 0 00-1-1zM6 5v1a1 1 0 001 1h6a1 1 0 001-1V5a1 1 0 00-1-1H7a1 1 0 00-1 1zm1 0h6v1H7V5zm12 9.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default BookAddIcon
