import { splitProps, ComponentProps, JSX } from "solid-js"

function TabletSpeakerIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M18.1 3.07a3.67 3.67 0 00-.45-.87.5.5 0 00-.8.6l.07.1a5.9 5.9 0 01.58 2.6 5.9 5.9 0 01-.58 2.6l-.12.18a.5.5 0 00.85.52c.12-.16.29-.45.44-.87.26-.68.41-1.5.41-2.43 0-.94-.15-1.75-.4-2.43zM14 2.5a.5.5 0 00-.85-.35L11.29 4h-.79a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h.8l1.85 1.85A.5.5 0 0014 8.5v-6zm1.95.78a5.5 5.5 0 01.55 2.22 4.9 4.9 0 01-.55 2.22.5.5 0 11-.9-.44l.08-.17.15-.4c.14-.42.22-.83.22-1.21s-.08-.8-.22-1.22a4.59 4.59 0 00-.23-.56.5.5 0 11.9-.44zM17 9.98V14a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h5v-.5c0-.18.03-.34.09-.5H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V9.8c-.3.17-.66.24-1 .18zM8.5 13a.5.5 0 000 1h3a.5.5 0 000-1h-3z" />
		</svg>
	)
}
export default TabletSpeakerIcon
