import { splitProps } from "solid-js"
function PaddingDownIcon(props) {
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
			<path d="M3.75 2.75c0 .41.34.75.75.75H15A.75.75 0 0015 2H4.5a.75.75 0 00-.75.75zm0 14.5c0 .41.34.75.75.75h1.31a.75.75 0 000-1.5H4.5a.75.75 0 00-.75.75zm3.94 0c0 .41.33.75.75.75h2.62a.75.75 0 000-1.5H8.44a.75.75 0 00-.75.75zm5.25 0c0 .41.33.75.75.75H15a.75.75 0 000-1.5h-1.31a.75.75 0 00-.75.75zm-2.66-1.97c-.3.3-.77.3-1.06 0l-4.25-4.25a.75.75 0 111.06-1.06L9 12.94V5.75a.75.75 0 011.5 0v7.19l2.97-2.97a.75.75 0 111.06 1.06l-4.25 4.25z" />
		</svg>
	)
}
export default PaddingDownIcon
