import { splitProps } from "solid-js"
function DocumentBulletListOffIcon(props) {
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
			<path d="M4 4.7L2.15 2.86a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-1.16-1.16A1.5 1.5 0 0114.5 18h-9A1.5 1.5 0 014 16.5V4.7zm9.3 9.3H8.5a.5.5 0 000 1h5a.5.5 0 00.47-.32l-.68-.68zm-1-1l-1-1H8.5a.5.5 0 000 1h3.8zm-2-2l-1-1h-.8a.5.5 0 000 1h1.8zm3.2 0h-.38L16 13.88V8h-4.5A1.5 1.5 0 0110 6.5V2H5.5c-.38 0-.73.14-1 .38L12.12 10h1.38a.5.5 0 010 1zM6 10.5a.5.5 0 101 0 .5.5 0 00-1 0zm0 2a.5.5 0 101 0 .5.5 0 00-1 0zm0 2a.5.5 0 101 0 .5.5 0 00-1 0zm5-8V2.25L15.75 7H11.5a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default DocumentBulletListOffIcon
