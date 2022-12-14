import { splitProps, ComponentProps, JSX } from "solid-js"

function EngineIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8 3a.5.5 0 00-1 0v1H6a2 2 0 00-2 2v3H3V6.5a.5.5 0 00-1 0v6a.5.5 0 001 0V10h1v2.88a2 2 0 00.59 1.41L7 16.71a1 1 0 00.7.29h5.5a1 1 0 00.89-.55L14.8 15H16a2 2 0 002-2V8a2 2 0 00-2-2h-1.2l-.71-1.45a1 1 0 00-.9-.55H11V3a.5.5 0 00-1 0v1H8V3zM6 5h7.2l.71 1.45a1 1 0 00.9.55H16a1 1 0 011 1v5a1 1 0 01-1 1h-1.2a1 1 0 00-.89.55L13.2 16H7.71l-2.42-2.41a1 1 0 01-.29-.71V6a1 1 0 011-1zm1.5 2c.28 0 .5.22.5.5V10a1 1 0 001 1h1V7.5a.5.5 0 011 0V11h3.5a.5.5 0 010 1H9a2 2 0 01-2-2V7.5c0-.28.22-.5.5-.5z" />
		</svg>
	)
}
export default EngineIcon
