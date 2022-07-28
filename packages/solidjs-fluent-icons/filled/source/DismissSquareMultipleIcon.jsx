import { splitProps } from "solid-js"
function DismissSquareMultipleIcon(props) {
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
			<path d="M3 5.5A2.5 2.5 0 015.5 3h7A2.5 2.5 0 0115 5.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 013 12.5v-7zm3.15.65a.5.5 0 000 .7L8.29 9l-2.14 2.15a.5.5 0 00.7.7L9 9.71l2.15 2.14a.5.5 0 00.7-.7L9.71 9l2.14-2.15a.5.5 0 00-.7-.7L9 8.29 6.85 6.15a.5.5 0 00-.7 0zM5.5 16c.46.6 1.18 1 2 1h5a4.5 4.5 0 004.5-4.5v-5c0-.82-.4-1.54-1-2v7a3.5 3.5 0 01-3.5 3.5h-7z" />
		</svg>
	)
}
export default DismissSquareMultipleIcon
