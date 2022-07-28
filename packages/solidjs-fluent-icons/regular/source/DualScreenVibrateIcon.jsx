import { splitProps } from "solid-js"
function DualScreenVibrateIcon(props) {
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
			<path d="M7 5a2 2 0 00-2 2v6c0 1.1.9 2 2 2h6a2 2 0 002-2V7a2 2 0 00-2-2H7zM6 7a1 1 0 011-1h2.5v8H7a1 1 0 01-1-1V7zm4.5 7V6H13a1 1 0 011 1v6a1 1 0 01-1 1h-2.5zm1-1.5c0-.28.22-.5.5-.5h.5a.5.5 0 010 1H12a.5.5 0 01-.5-.5zm-4-.5a.5.5 0 000 1H8a.5.5 0 000-1h-.5zM1.88 6.51a.5.5 0 01.6.37l.41 1.64c.1.35.05.71-.1 1.03l-.62 1.23a.5.5 0 000 .44l.78 1.56a.5.5 0 11-.9.44l-.77-1.55a1.5 1.5 0 010-1.34l.6-1.22a.5.5 0 00.04-.35l-.4-1.64a.5.5 0 01.36-.6zm16.6.37a.5.5 0 00-.97.24l.41 1.64a.5.5 0 01-.03.35l-.61 1.22a1.5 1.5 0 000 1.34l.77 1.55a.5.5 0 10.9-.44l-.78-1.56a.5.5 0 010-.44l.61-1.23c.16-.32.2-.68.11-1.03l-.4-1.64z" />
		</svg>
	)
}
export default DualScreenVibrateIcon
