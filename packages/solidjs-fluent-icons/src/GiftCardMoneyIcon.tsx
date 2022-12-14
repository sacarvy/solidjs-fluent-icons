import { splitProps, ComponentProps, JSX } from "solid-js"

function GiftCardMoneyIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2 4.75A2.75 2.75 0 014.75 2h10.5A2.75 2.75 0 0118 4.75V11h-1V8H8.7l1.65 1.65a.5.5 0 01-.7.7L8 8.71V13h1.12a2 2 0 00-.12.69V14H4.75A2.75 2.75 0 012 11.25v-6.5zM3 8v3.25c0 .97.78 1.75 1.75 1.75H7V8.7l-1.65 1.65a.5.5 0 01-.7-.7L6.29 8H3zm1.27-1A2 2 0 017 4.27V3H4.75C3.78 3 3 3.78 3 4.75V7h1.27zM6 7h1V6a1 1 0 10-1 1zm2-1v1h1a1 1 0 10-1-1zm2.73 1H17V4.75C17 3.78 16.22 3 15.25 3H8v1.27A2 2 0 0110.73 7zM19 13.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5zm-1 3v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5zm-.5-3.5h-1c0 .83.67 1.5 1.5 1.5v-1a.5.5 0 01-.5-.5zm-6 0a.5.5 0 01-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1zm3.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
		</svg>
	)
}
export default GiftCardMoneyIcon
