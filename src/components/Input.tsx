import { type Props } from "../types/PropsInput.type";
import "../styles/inputs.css";

export const Input = ({ id, label, setValue }: Props) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        id={id}
        placeholder=" "
        className="input"
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor="id" className="input-label">
        {label}
      </label>
    </div>
  );
};
