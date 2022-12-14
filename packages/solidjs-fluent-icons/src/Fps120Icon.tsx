import { splitProps, ComponentProps, JSX } from "solid-js"

function Fps120Icon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.5 10a.5.5 0 01-.5-.5V3.93c-.33.34-.75.7-1.24 1a.5.5 0 11-.52-.86 5.58 5.58 0 001.83-1.82.5.5 0 01.93.26V9.5a.5.5 0 01-.5.5zM12 4.5a2.5 2.5 0 015 0v3a2.5 2.5 0 01-5 0v-3zm4 0a1.5 1.5 0 00-3 0v3a1.5 1.5 0 003 0v-3zm-13 8c0-.28.22-.5.5-.5h3a.5.5 0 010 1H4v2h1.5a.5.5 0 010 1H4v1.5a.5.5 0 01-1 0v-5zm5 0c0-.28.22-.5.5-.5H10a2 2 0 110 4H9v1.5a.5.5 0 01-1 0v-5zM9 15h1a1 1 0 100-2H9v2zm5.75-3a1.75 1.75 0 100 3.5h.5a.75.75 0 010 1.5h-.76a.49.49 0 01-.49-.49v-.01a.5.5 0 00-1 0v.01c0 .82.67 1.49 1.49 1.49h.76a1.75 1.75 0 100-3.5h-.5a.75.75 0 010-1.5h.76c.27 0 .49.22.49.49v.01a.5.5 0 001 0v-.01c0-.82-.67-1.49-1.49-1.49h-.76zM6.99 4.08a.5.5 0 01-.57.41C5.94 4.41 6 3.92 6 3.92v-.04a1.66 1.66 0 01.09-.28c.06-.18.17-.41.34-.65A2.44 2.44 0 018.5 2c.86 0 1.59.3 2.05.88.46.58.59 1.36.44 2.2a2.12 2.12 0 01-1 1.49c-.34.21-.75.38-1.1.52l-.33.14c-.46.2-.84.4-1.1.72-.2.24-.36.56-.43 1.05h3.47a.5.5 0 010 1h-4a.5.5 0 01-.5-.5c0-.97.25-1.67.69-2.19.42-.5.98-.79 1.47-1l.43-.18c.33-.13.6-.25.85-.4.3-.2.5-.43.57-.81.11-.66-.01-1.13-.24-1.42-.23-.3-.63-.5-1.27-.5-.7 0-1.06.29-1.26.55a1.5 1.5 0 00-.25.53z" />
		</svg>
	)
}
export default Fps120Icon
