import { splitProps } from "solid-js"
function TextBulletListSquareShieldIcon(props) {
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
			<path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h5.8c-.47-.8-.8-1.8-.8-3h-.5a.5.5 0 010-1h.5v-1.5c0-.18.03-.35.08-.5H9.5a.5.5 0 010-1h1.72l.14-.03a4.71 4.71 0 002.5-1.43 1.62 1.62 0 012.29 0c.22.23.51.49.85.73V5a2 2 0 00-2-2H5zm2.5 4.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6.75 11a.75.75 0 110-1.5.75.75 0 010 1.5zm.75 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.5 7h4a.5.5 0 010 1h-4a.5.5 0 010-1zm5.94 2.24a5.7 5.7 0 003.06 1.72c.27.04.5.26.5.54V14c0 3.47-3.18 4.73-3.87 4.96a.4.4 0 01-.26 0C14.18 18.73 11 17.46 11 14v-2.5c0-.28.23-.5.5-.54a5.7 5.7 0 003.06-1.72.62.62 0 01.88 0z" />
		</svg>
	)
}
export default TextBulletListSquareShieldIcon
