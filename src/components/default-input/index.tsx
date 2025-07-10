type DefaultInputProps = {
  id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>text</label>
      <input id={id} type={type} className="bg-red-700" />
    </>
  );
}
