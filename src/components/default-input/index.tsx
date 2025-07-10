type DefaultInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function DefaultInput({ type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor="input">text</label>
      <input id="input" type={type} className="bg-red-700" />
    </>
  );
}
