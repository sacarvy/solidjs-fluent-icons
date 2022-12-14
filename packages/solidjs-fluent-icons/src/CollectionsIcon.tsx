import { splitProps, ComponentProps, JSX } from "solid-js"

function CollectionsIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M15.5 7A2.5 2.5 0 0118 9.33v6.17a2.5 2.5 0 01-2.33 2.5H9.5A2.5 2.5 0 017 15.66V9.5A2.5 2.5 0 019.34 7h6.16zm0 1h-6c-.78 0-1.42.6-1.5 1.35v6.15c0 .78.6 1.42 1.36 1.5h6.14c.78 0 1.42-.6 1.5-1.36V9.5c0-.78-.6-1.42-1.35-1.5h-.15zm-3 1a.5.5 0 01.5.4V12h2.5a.5.5 0 01.1 1H13v2.5a.5.5 0 01-1 .09v-2.6H9.5a.5.5 0 01-.09-.98l.1-.01H12V9.5c0-.28.22-.5.5-.5zm.16-5.3l.05.15L13.3 6h-1.04l-.5-1.89a1.5 1.5 0 00-1.7-1.1l-.14.04L4.1 4.6a1.5 1.5 0 00-1.09 1.7l.03.14 1.55 5.8a1.5 1.5 0 001.4 1.1v1a2.5 2.5 0 01-2.3-1.68l-.06-.17-1.55-5.8a2.5 2.5 0 011.6-3l.16-.05 5.8-1.56a2.5 2.5 0 012.96 1.46l.05.15z" />
		</svg>
	)
}
export default CollectionsIcon
