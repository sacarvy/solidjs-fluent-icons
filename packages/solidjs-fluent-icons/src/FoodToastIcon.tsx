import { splitProps, ComponentProps, JSX } from "solid-js"

function FoodToastIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.23 7.95c0-.27.22-.5.5-.5h4.34c.28 0 .5.23.5.5v4.1a.5.5 0 01-.5.5H6.73a.5.5 0 01-.5-.5v-4.1zm1 3.6h3.34v-3.1H7.23v3.1zM1.79 4.98A4.05 4.05 0 015.4 2.5h9.93A3.73 3.73 0 0119 6.18c0 1.33-.76 2.46-1.28 3.01 0 .7.02 1.66.06 2.67v.3c.04 1 .08 2.05.08 2.93 0 .82-.1 1.52-.59 1.95-.24.22-.54.33-.86.39-.31.05-.68.07-1.1.07H5.16c-1.18 0-1.9-.35-2.26-.96a2.53 2.53 0 01-.28-1.45V9.2a3.64 3.64 0 01-.82-4.22zM5.4 3.5c-1.16 0-2.21.8-2.7 1.88a2.65 2.65 0 00.73 3.22c.12.1.18.24.18.38v6.21c0 .33 0 .6.14.84.1.18.4.47 1.4.47h7.63c.4 0 .68-.02.89-.06.2-.03.28-.09.32-.13.05-.04.1-.12.14-.32.04-.2.06-.5.06-.9v-2c-.02-1.42-.03-2.87 0-3.87a.5.5 0 01.15-.34l.3-.3c.24-.21.44-.4.63-.68.25-.35.46-.86.5-1.73 0-.67-.39-1.34-1-1.85a3.28 3.28 0 00-1.99-.82H5.4zm9.71 12.69l-.08.31h.3c.4 0 .69-.02.9-.06.23-.04.33-.1.4-.15.12-.1.24-.36.24-1.2 0-.86-.04-1.89-.07-2.9l-.01-.3c-.04-1.1-.07-2.16-.05-2.92a.5.5 0 01.15-.35 3.73 3.73 0 001.12-2.44 2.73 2.73 0 00-2.65-2.68l.06.06a3.52 3.52 0 011.35 2.62v.03a4.24 4.24 0 01-.67 2.26c-.26.38-.58.67-.84.91l-.07.07c-.02.97-.02 2.3 0 3.6v2.04c0 .42-.02.8-.08 1.1z" />
		</svg>
	)
}
export default FoodToastIcon
