import { splitProps, ComponentProps, JSX } from "solid-js"

function RocketIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10.75 6.43a2 2 0 112.83 2.82 2 2 0 01-2.83-2.82zm2.12.7a1 1 0 10-1.4 1.41 1 1 0 001.4-1.4zm-1.12 7.37a1.5 1.5 0 01-1.7-.3l-.61-.6-.74 1.22a.5.5 0 01-.78.1L5.1 12.09a.5.5 0 01.1-.79l1.22-.73-.61-.6a1.5 1.5 0 01-.3-1.71L4.38 7.14a.5.5 0 010-.7l1.06-1.07a3 3 0 013.42-.59l.93-.93a6.3 6.3 0 016.33-1.56c.76.24 1.36.83 1.6 1.6a6.3 6.3 0 01-1.56 6.32l-.94.94a3 3 0 01-.58 3.41l-1.06 1.06a.5.5 0 01-.71 0l-1.12-1.12zm4.07-11.26a5.3 5.3 0 00-5.32 1.31l-.82.82-.7.7L6.86 8.2l-.4.4a.5.5 0 00.04.66l4.25 4.24c.18.18.46.2.65.05l.4-.4h.01l2.12-2.12.7-.71.82-.81a5.3 5.3 0 001.31-5.33c-.14-.45-.49-.8-.94-.94zm-3.3 10.62l.7.7.7-.7a2 2 0 00.53-1.93l-1.93 1.93zm-4.44-8.3a2 2 0 00-1.93.52l-.7.7.7.71 1.93-1.93zm.63 7.31L7.14 11.3l-.89.53 1.93 1.93.53-.89zm-2.9 2.04a.5.5 0 10-.71-.7l-1.77 1.76a.5.5 0 10.7.71l1.77-1.77zM4.38 12.8c.2.2.2.51 0 .7l-.71.72a.5.5 0 01-.7-.71l.7-.71c.2-.2.51-.2.7 0zm2.83 3.54a.5.5 0 00-.7-.71l-.72.7a.5.5 0 10.7.72l.72-.71z" />
		</svg>
	)
}
export default RocketIcon
