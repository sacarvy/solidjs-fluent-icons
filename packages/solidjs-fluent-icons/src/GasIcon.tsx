import { splitProps, ComponentProps, JSX } from "solid-js"

function GasIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11.08 2.22A.5.5 0 0111.5 2h3c.28 0 .5.22.5.5v3c.6.46 1 1.18 1 2v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 014 14.5v-7A2.5 2.5 0 016.5 5h.41c-.2-.58-.76-1-1.41-1h-1a.5.5 0 010-1h1c1.2 0 2.22.86 2.45 2h1.28l1.85-2.78zM14 3h-2.23l-1.34 2h3.07c.17 0 .34.02.5.05V3zM6.5 6C5.67 6 5 6.67 5 7.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7zm6.35 2.15c.2.2.2.5 0 .7L10.71 11l2.14 2.15a.5.5 0 01-.7.7L10 11.71l-2.15 2.14a.5.5 0 01-.7-.7L9.29 11 7.15 8.85a.5.5 0 11.7-.7L10 10.29l2.15-2.14c.2-.2.5-.2.7 0z" />
		</svg>
	)
}
export default GasIcon
