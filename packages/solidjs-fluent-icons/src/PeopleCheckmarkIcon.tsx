import { splitProps, ComponentProps, JSX } from "solid-js"

function PeopleCheckmarkIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.5 5.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM6.75 2.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM1.5 12c0-1.1.9-2 2-2H10a2 2 0 011 .26c-.28.23-.54.49-.77.77A1 1 0 0010 11H3.5a1 1 0 00-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c.95 0 1.69-.15 2.25-.37.01.35.05.7.12 1.02-.64.22-1.42.35-2.37.35-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 01-.68-1.99V12zM13 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM14.5 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0l-2.65 2.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" />
		</svg>
	)
}
export default PeopleCheckmarkIcon
