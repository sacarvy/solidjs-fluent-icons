import { splitProps, ComponentProps, JSX } from "solid-js"

function PeopleCommunityIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8.75 3.75a2.75 2.75 0 10-5.5 0 2.75 2.75 0 005.5 0zm-4.5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM2.5 7.5h4.18c-.16.31-.28.65-.35 1H2.5A.5.5 0 002 9v.5c0 1.26 1.1 2.61 3.1 2.93-.33.22-.6.51-.79.85C2.21 12.71 1 11.08 1 9.5V9c0-.83.67-1.5 1.5-1.5zm5.38 0a2.74 2.74 0 114.24 3.49A2.74 2.74 0 017.88 7.5zm.54 1a1.74 1.74 0 00.87 2.35 1.74 1.74 0 002.46-1.6 1.74 1.74 0 00-2.01-1.73c-.59.09-1.08.46-1.32.98zm7.27 4.78c-.2-.34-.46-.63-.79-.85 2-.32 3.1-1.67 3.1-2.93V9a.5.5 0 00-.5-.5h-3.82c-.08-.35-.2-.69-.36-1h4.18c.83 0 1.5.67 1.5 1.5v.5c0 1.59-1.2 3.21-3.31 3.78zm-1.2.1a1.5 1.5 0 00-.99-.38h-7A1.5 1.5 0 005 14.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5c0-.45-.2-.85-.51-1.13zM6 14.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v.5c0 1.44-1.43 3-4 3-2.57 0-4-1.56-4-3v-.5zM14 1a2.75 2.75 0 110 5.5A2.75 2.75 0 0114 1zm0 1a1.75 1.75 0 100 3.5A1.75 1.75 0 0014 2z" />
		</svg>
	)
}
export default PeopleCommunityIcon
