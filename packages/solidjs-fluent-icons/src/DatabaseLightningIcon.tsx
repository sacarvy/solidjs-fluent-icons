import { splitProps, ComponentProps, JSX } from "solid-js"

function DatabaseLightningIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4 5c0-1 .88-1.76 1.9-2.22 1.3-.54 2.7-.8 4.1-.78 1.4-.03 2.8.24 4.1.78C15.13 3.24 16 3.99 16 5v4h-1V6.7c-.28.2-.58.38-.9.52-1.3.54-2.7.8-4.1.78-1.4.03-2.8-.24-4.1-.78A4.92 4.92 0 015 6.7V15c0 .37.36.87 1.32 1.31A9.2 9.2 0 0010 17c.5.01 1-.02 1.49-.09.15.06.33.09.51.09h.47l-.2.79c-.74.15-1.5.22-2.27.21-1.4.03-2.8-.24-4.1-.78C4.87 16.75 4 16.01 4 15V5zm1 0c0 .37.36.87 1.32 1.31A9.2 9.2 0 0010 7a9.2 9.2 0 003.68-.69C14.64 5.87 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.2 9.2 0 0010 3a9.2 9.2 0 00-3.68.69C5.36 4.12 5 4.63 5 5zm8.11 11c.33 0 .57.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 00-.51-1.3h-.4a.5.5 0 01-.48-.66l.56-1.68a.5.5 0 00-.47-.66h-3.47a.5.5 0 00-.47.3l-2.08 5c-.14.34.1.7.46.7h1.11z" />
		</svg>
	)
}
export default DatabaseLightningIcon
