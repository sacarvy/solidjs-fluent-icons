import { splitProps, ComponentProps, JSX } from "solid-js"

function DatabaseSwitchIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8.44 17.56c-.2-.2-.32-.46-.38-.73a7.5 7.5 0 01-1.74-.52C5.36 15.88 5 15.37 5 15V6.7c.28.2.58.38.9.52 1.3.54 2.7.8 4.1.78 1.4.03 2.8-.24 4.1-.78.32-.14.62-.31.9-.52v6.4c.32-.13.68-.13 1 0V5c0-1-.88-1.76-1.9-2.22-1.3-.54-2.7-.8-4.1-.78-1.4-.03-2.8.24-4.1.78C4.87 3.24 4 3.99 4 5v10c0 1 .88 1.75 1.9 2.22.93.4 1.91.64 2.92.72l-.38-.38zM6.32 3.7A9.2 9.2 0 0110 3a9.2 9.2 0 013.68.69C14.64 4.12 15 4.63 15 5c0 .37-.36.87-1.32 1.31A9.2 9.2 0 0110 7a9.2 9.2 0 01-3.68-.69C5.36 5.87 5 5.37 5 5c0-.37.36-.88 1.32-1.31zm5.53 15.16a.5.5 0 01-.7 0l-2-2a.5.5 0 010-.7l2-2a.5.5 0 01.7.7L10.71 16h5.58l-1.14-1.15a.5.5 0 01.7-.7l2 2a.5.5 0 010 .7l-2 2a.5.5 0 01-.7-.7L16.29 17h-5.58l1.14 1.15a.5.5 0 010 .7z" />
		</svg>
	)
}
export default DatabaseSwitchIcon
