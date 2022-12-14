import { splitProps, ComponentProps, JSX } from "solid-js"

function WifiWarningIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M16.83 7.38c.41.41.8.88 1.14 1.37a.5.5 0 11-.83.57 8.61 8.61 0 00-14.2 0 .5.5 0 11-.82-.58 9.61 9.61 0 0114.71-1.36zM5.48 9.36a6.45 6.45 0 018.75-.34c-.37.05-.73.2-1.03.46a5.45 5.45 0 00-8.03 1.97.5.5 0 11-.89-.45c.3-.6.7-1.15 1.2-1.64zm4.3 6.62l1.12-2.25a1.3 1.3 0 10-1.12 2.25zm1.9-3.82l.46-.9a4.03 4.03 0 00-5.8 1.84.5.5 0 00.92.4 3.03 3.03 0 014.43-1.34zm1.92-1.6l-3.5 7A1 1 0 0011 19h7a1 1 0 00.9-1.45l-3.5-7a1 1 0 00-1.8 0zM15 12.5v3a.5.5 0 11-1 0v-3a.5.5 0 111 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z" />
		</svg>
	)
}
export default WifiWarningIcon
