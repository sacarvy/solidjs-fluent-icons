import { splitProps } from "solid-js"
function FolderSwapIcon(props) {
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
			<path d="M7.93 3.21A1.5 1.5 0 007.17 3H4.34A2.5 2.5 0 002 5.5v9.16A2.5 2.5 0 004.5 17h4.38l-.44-.43a1.5 1.5 0 01-.36-.57H4.36A1.5 1.5 0 013 14.5v-7H7.22c.36-.04.69-.2.94-.47L9.62 5.5h6.02A1.5 1.5 0 0117 7v5.88l1 1V6.84l-.02-.17A2.5 2.5 0 0015.5 4.5H9.67l-1.6-1.2-.14-.09zM4.5 4h2.75a.5.5 0 01.22.1l1.22.92-1.26 1.32-.06.06a.5.5 0 01-.3.1H3V5.36A1.5 1.5 0 014.5 4zm7.36 9.86a.5.5 0 00-.71-.7l-2 1.99a.5.5 0 000 .7l2 2a.5.5 0 10.7-.7L10.72 16h5.58l-1.14 1.15a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 10-.7.7L16.29 15h-5.58l1.15-1.14z" />
		</svg>
	)
}
export default FolderSwapIcon
