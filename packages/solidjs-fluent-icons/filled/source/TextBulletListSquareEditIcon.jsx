import { splitProps } from "solid-js"
function TextBulletListSquareEditIcon(props) {
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
			<path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h4.22l.21-.84a3.2 3.2 0 01.84-1.49l.67-.67H9.5a.5.5 0 010-1h2.44l3.16-3.16c.53-.53 1.21-.8 1.9-.84V5a2 2 0 00-2-2H5zm2.5 4.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6.75 11a.75.75 0 110-1.5.75.75 0 010 1.5zm.75 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.5 7h4a.5.5 0 010 1h-4a.5.5 0 010-1zM9 10.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm1.98 4.88l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" />
		</svg>
	)
}
export default TextBulletListSquareEditIcon
