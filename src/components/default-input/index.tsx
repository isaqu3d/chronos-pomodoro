type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        className="bg-transparent rounded-md p-2 outline-none border border-gray-600 text-white placeholder:text-gray-500 focus:border-green-700 transition-colors text-center"
        {...rest}
      />
    </>
  );
}
