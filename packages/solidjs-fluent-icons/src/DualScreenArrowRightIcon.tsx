import { splitProps, ComponentProps, JSX } from "solid-js"

function DualScreenArrowRightIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M14.5 1a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85A.5.5 0 0017 5.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 5H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2zM17 16v-5.6c.36-.18.7-.4 1-.66V16a2 2 0 01-2 2H4a2 2 0 01-2-2V8c0-1.1.9-2 2-2h5.02c.03.34.1.68.19 1H4a1 1 0 00-1 1v8a1 1 0 001 1h5.5V7.8c.25.54.6 1.04 1 1.47V17H16a1 1 0 001-1zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm6.5-.5a.5.5 0 000 1h1a.5.5 0 000-1h-1z" />
		</svg>
	)
}
export default DualScreenArrowRightIcon
