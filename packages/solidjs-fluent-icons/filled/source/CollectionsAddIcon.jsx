import { splitProps } from "solid-js"
function CollectionsAddIcon(props) {
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
			<path d="M15.5 7A2.5 2.5 0 0118 9.33v.93A5.5 5.5 0 0010.26 18H9.5A2.5 2.5 0 017 15.66V9.5A2.5 2.5 0 019.33 7h6.17zm-2.84-3.3l.05.15.57 2.15H9a3 3 0 00-3 2.82V14.35a2.5 2.5 0 01-2.31-1.69l-.05-.17-1.56-5.8a2.5 2.5 0 011.61-3l.16-.05 5.8-1.56a2.5 2.5 0 012.95 1.46l.06.15zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 100 1H14v1.5a.5.5 0 101 0V15h1.5a.5.5 0 100-1H15v-1.5z" />
		</svg>
	)
}
export default CollectionsAddIcon
