import { splitProps, ComponentProps, JSX } from "solid-js"

function PeopleQueueIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.5 7.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0-1a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM3 9a1 1 0 011-1h5a1 1 0 011 1v4.5a3.5 3.5 0 11-7 0V9zm1 0v4.5a2.5 2.5 0 005 0V9H4zm5.63-2.86c-.1.31-.23.6-.4.87a2 2 0 011.08.48l.19.01a2.25 2.25 0 10-1.31-4.08c.19.28.34.6.44.94a1.25 1.25 0 012.12.89 1.25 1.25 0 01-2.12.9zM9.5 16.85A3.5 3.5 0 0014 13.5V9a1 1 0 00-1-1h-2.27A2 2 0 0111 9h2v4.5a2.5 2.5 0 01-2.75 2.49c-.21.32-.47.6-.75.86zm4.13-10.7c-.1.3-.23.6-.4.86a2 2 0 011.08.48l.19.01a2.25 2.25 0 10-1.31-4.08c.19.28.34.6.44.94a1.25 1.25 0 012.12.89 1.25 1.25 0 01-2.12.9zm-.13 10.7A3.5 3.5 0 0018 13.5V9a1 1 0 00-1-1h-2.27A2 2 0 0115 9h2v4.5a2.5 2.5 0 01-2.75 2.49c-.21.32-.47.6-.75.86z" />
		</svg>
	)
}
export default PeopleQueueIcon
