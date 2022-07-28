import { splitProps, ComponentProps, JSX } from "solid-js"

function DeveloperBoardLightningIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M10.99 7.54L10.57 9h1.53c.34 0 .52.4.3.66l-2.65 3.19c-.3.35-.86.05-.73-.4L9.46 11H7.9a.4.4 0 01-.3-.66l2.66-3.19c.3-.34.85-.05.73.39zM8 2.5a.5.5 0 00-1 0V4h-.5A2.5 2.5 0 004 6.5V7H2.5a.5.5 0 000 1H4v1.5H2.5a.5.5 0 000 1H4V12H2.5a.5.5 0 000 1H4v.5A2.5 2.5 0 006.5 16H7v1.5a.5.5 0 001 0V16h1.5v1.5a.5.5 0 001 0V16H12v1.5a.5.5 0 001 0V16h.5a2.5 2.5 0 002.5-2.5V13h1.5a.5.5 0 000-1H16v-1.5h1.5a.5.5 0 000-1H16V8h1.5a.5.5 0 000-1H16v-.5A2.5 2.5 0 0013.5 4H13V2.5a.5.5 0 00-1 0V4h-1.5V2.5a.5.5 0 00-1 0V4H8V2.5zM13.5 5c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 015 13.5v-7C5 5.67 5.67 5 6.5 5h7z" />
		</svg>
	)
}
export default DeveloperBoardLightningIcon
