import { splitProps, ComponentProps, JSX } from "solid-js"

function CopyArrowRightIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8 2a2 2 0 00-2 2v10c0 1.1.9 2 2 2h1.2c-.08-.32-.15-.66-.18-1H8a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1v5.02c.34.03.68.1 1 .19V4a2 2 0 00-2-2H8zm-.5 15h2.1c.18.36.4.7.66 1H7.5A3.5 3.5 0 014 14.5V6a2 2 0 011-1.73V14.5A2.5 2.5 0 007.5 17zm7-7a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" />
		</svg>
	)
}
export default CopyArrowRightIcon
