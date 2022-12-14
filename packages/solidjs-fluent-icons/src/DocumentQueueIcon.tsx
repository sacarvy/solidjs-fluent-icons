import { splitProps, ComponentProps, JSX } from "solid-js"

function DocumentQueueIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.5 5a.5.5 0 000 1h2a.5.5 0 000-1h-2zM6 7.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM6.5 9a.5.5 0 000 1h2a.5.5 0 000-1h-2zm3.98-7h.04c.45.01.88.2 1.2.51l3.77 3.77A1.75 1.75 0 0116 7.5v6.75c0 .97-.78 1.75-1.75 1.75h-8.5C4.78 16 4 15.22 4 14.25V3.75C4 2.78 4.78 2 5.75 2h4.73zM5 3.75v10.5c0 .41.34.75.75.75h8.5c.41 0 .75-.34.75-.75V8h-3.5A1.5 1.5 0 0110 6.5V3H5.75a.75.75 0 00-.75.75zm6 2.75c0 .28.22.5.5.5h3.3l-.02-.01-3.77-3.77-.01-.01V6.5zm-8 7a.5.5 0 00-1 0v1A3.5 3.5 0 005.5 18h9a3.5 3.5 0 003.5-3.5v-1a.5.5 0 00-1 0v1a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-1z" />
		</svg>
	)
}
export default DocumentQueueIcon
