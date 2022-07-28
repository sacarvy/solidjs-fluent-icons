import { splitProps, ComponentProps, JSX } from "solid-js"

function StarArrowRightStartIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9.1 2.56a1 1 0 011.8 0l1.93 3.89 4.31.62a1 1 0 01.56 1.7l-3.13 3.03.74 4.28a1 1 0 01-1.45 1.05l-2.97-1.55c.07-.35.1-.7.11-1.07l3.33 1.74-.74-4.28a1 1 0 01.29-.88L17 8.06l-4.32-.63a1 1 0 01-.75-.54L10 2.99 8.07 6.9a1 1 0 01-.75.54L3 8.06l1.14 1.1c-.36.1-.7.23-1.04.39l-.8-.78a1 1 0 01.56-1.7l4.31-.62 1.93-3.9zM5.5 10a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85A.5.5 0 008 14.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L6.29 14H3.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" />
		</svg>
	)
}
export default StarArrowRightStartIcon
