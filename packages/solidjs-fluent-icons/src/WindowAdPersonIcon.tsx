import { splitProps, ComponentProps, JSX } from "solid-js"

function WindowAdPersonIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v3.4c-.3-.17-.64-.3-1-.36V7H4v7c0 1.1.9 2 2 2h5.05a2.51 2.51 0 00-.01 1H6a3 3 0 01-3-3V6zm3-2a2 2 0 00-2 2h12a2 2 0 00-2-2H6zm9.5 10a2 2 0 100-4 2 2 0 000 4zm0 5c2.5 0 3.5-1.25 3.5-2.5 0-.83-.67-1.5-1.5-1.5h-4c-.83 0-1.5.67-1.5 1.5 0 1.25 1 2.5 3.5 2.5zM6 12h3V9H6v3zM5 8.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4z" />
		</svg>
	)
}
export default WindowAdPersonIcon
