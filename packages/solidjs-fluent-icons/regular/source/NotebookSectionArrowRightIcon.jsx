import { splitProps } from "solid-js"
function NotebookSectionArrowRightIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
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
			<path d="M15.65 2h.1c.38 0 .7.28.74.65l.01.1v8.33c-.52.08-1.03.22-1.5.42v-6H9.25a.75.75 0 00-.75.75v11.5c0 .41.34.75.75.75h1.83c.08.52.22 1.02.42 1.5H9.25C8.01 20 7 18.99 7 17.75V6.25C7 5.01 8 4 9.25 4H15V2.75c0-.38.28-.7.65-.74z" />
			<path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5-.5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 17H14.5z" />
		</svg>
	)
}
export default NotebookSectionArrowRightIcon
