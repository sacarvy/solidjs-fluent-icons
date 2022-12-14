import { splitProps, ComponentProps, JSX } from "solid-js"

function TrophyIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 7a3 3 0 002.6 2.97 4.5 4.5 0 003.9 3.5v1.5h-2a2 2 0 00-2 2v.5c0 .27.23.5.5.5h8a.5.5 0 00.5-.5v-.5a2 2 0 00-2-2h-2v-1.5a4.5 4.5 0 003.9-3.5A3 3 0 0017 7V5.5c0-.83-.68-1.5-1.5-1.5h-1a2 2 0 00-2-2h-5a2 2 0 00-2 2h-1C3.67 4 3 4.67 3 5.5V7zm1.5-2h1v3.93A2 2 0 014 7V5.5c0-.28.22-.5.5-.5zm10 0h1c.27 0 .5.22.5.5V7a2 2 0 01-1.5 1.94V5zm-1-1v5a3.5 3.5 0 01-7 .16V4a1 1 0 011-1h5a1 1 0 011 1zm-7 12.97a1 1 0 011-1h5a1 1 0 011 1h-7z" />
		</svg>
	)
}
export default TrophyIcon
