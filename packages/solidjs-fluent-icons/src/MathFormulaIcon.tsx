import { splitProps, ComponentProps, JSX } from "solid-js"

function MathFormulaIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9.68 3.09c-.18-.04-.4-.04-.7 0-.52.08-.87.33-1.12.68-.26.37-.41.87-.46 1.45 0 .2-.04.87-.09 1.78H9.5a.5.5 0 010 1H7.26c-.13 2.25-.3 5.15-.36 5.94v.07c-.05.57-.11 1.25-.31 1.88-.21.67-.6 1.3-1.33 1.74-1.02.63-2.13.34-2.98-.08a.5.5 0 11.44-.9c.75.38 1.44.49 2.02.13v-.01c.47-.27.73-.68.9-1.18.16-.52.2-1.1.26-1.7v-.03c.06-.8.23-3.64.36-5.86H4.5a.5.5 0 110-1h1.81a75.96 75.96 0 00.1-1.84c.05-.7.24-1.4.63-1.96.4-.57 1-.97 1.78-1.1.4-.05.73-.05 1.05.01.33.06.6.2.89.36a.5.5 0 01-.52.86c-.22-.13-.39-.2-.56-.24zm7.17 6.06c.2.2.2.5 0 .7l-3.22 3.22a162.5 162.5 0 001.4 2.47l.04.07c.06.12.11.2.15.25.06.09.12.15.25.22.21.03.28-.01.3-.03a3.56 3.56 0 00.23-.27l.1-.13a.5.5 0 01.8.6l-.06.08c-.11.16-.28.39-.5.54-.31.22-.69.27-1.14.17a1.69 1.69 0 01-.79-.6c-.08-.1-.14-.22-.2-.33l-.05-.08-.19-.32-1.07-1.9-3.05 3.04a.5.5 0 01-.7-.7l3.24-3.25a149.94 149.94 0 00-1.47-2.57 1.14 1.14 0 00-.32-.32c-.07-.02-.12-.01-.21.04-.12.08-.25.21-.39.4a.5.5 0 11-.8-.6c.16-.2.38-.47.66-.65a1.21 1.21 0 011.16-.1c.3.16.53.4.7.63a131.74 131.74 0 011.4 2.44l3.03-3.02c.2-.2.5-.2.7 0z" />
		</svg>
	)
}
export default MathFormulaIcon
