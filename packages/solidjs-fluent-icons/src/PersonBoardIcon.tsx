import { splitProps, ComponentProps, JSX } from "solid-js"

function PersonBoardIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9 8.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 110-2 1 1 0 010 2zM6.5 9C5.67 9 5 9.67 5 10.5c0 .33.04 1.05.62 1.68.59.63 1.63 1.07 3.38 1.07s2.79-.43 3.37-1.06A2.4 2.4 0 0013 10.5c0-.83-.67-1.5-1.5-1.5h-5zM6 10.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5 0 .25-.03.66-.36 1-.32.35-1.04.75-2.64.75s-2.32-.4-2.64-.75a1.41 1.41 0 01-.36-1zM3 6a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-2a2 2 0 00-2 2v6c0 1.1.9 2 2 2h6a2 2 0 002-2V6a2 2 0 00-2-2H6zm2 13a3 3 0 01-2.24-1h6.74a3.5 3.5 0 003.5-3.5V5.76A3 3 0 0117 8v4.5a4.5 4.5 0 01-4.5 4.5H8z" />
		</svg>
	)
}
export default PersonBoardIcon
