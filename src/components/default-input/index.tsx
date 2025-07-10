type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function DefaultInput({ id, type, labelText }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} type={type} className="bg-red-700" />
    </>
  );
}
