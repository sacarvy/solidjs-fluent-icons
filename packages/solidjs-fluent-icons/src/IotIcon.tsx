import { splitProps, ComponentProps, JSX } from "solid-js"

function IotIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M16 4a2 2 0 01-2.65 1.88l-1.28 1.95A3 3 0 0113 9.99l1.17.2a2 2 0 11-.16.99l-1.17-.2a3 3 0 01-1.43 1.67l.45 1.35H12a2 2 0 11-1.1.32l-.44-1.36a3.02 3.02 0 01-2.87-1.18l-1.64.8A2 2 0 014 15a2 2 0 111.5-3.32l1.64-.79A3 3 0 017.77 8l-.93-1.17a2 2 0 11.77-.63l.95 1.18a2.99 2.99 0 012.68-.1l1.28-1.94A2 2 0 1116 4zm-1 0a1 1 0 10-2 0 1 1 0 002 0zM6 6a1 1 0 100-2 1 1 0 000 2zm4 6a2 2 0 100-4 2 2 0 000 4zm-5 1a1 1 0 10-2 0 1 1 0 002 0zm8 3a1 1 0 10-2 0 1 1 0 002 0zm3-4a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default IotIcon
