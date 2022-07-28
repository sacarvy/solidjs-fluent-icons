import { splitProps } from "solid-js"
function ErrorCircleSettingsIcon(props) {
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
			<path d="M18 10a8 8 0 10-7.41 7.98 5.48 5.48 0 01-.37-4.01.75.75 0 11.44-1.08 5.5 5.5 0 017.32-2.3L18 10zM9.5 6.41a.5.5 0 011 0v4.68a.5.5 0 01-1 0V6.41zm2.14 8.51a2 2 0 001.43-2.48l-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 002.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 001.46 2.52l.35.09a4.7 4.7 0 010 1.01l-.45.12a2 2 0 00-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 00-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 00-1.46-2.52l-.35-.09a4.71 4.71 0 010-1.01l.46-.12zm4.86.58a1 1 0 10-2 0 1 1 0 002 0z" />
		</svg>
	)
}
export default ErrorCircleSettingsIcon
