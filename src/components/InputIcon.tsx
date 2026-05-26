import user from "../assets/user.svg"
import email from "../assets/email_fill.svg"
import password from "../assets/lock.svg"
import "../styles/inputs.css";

export type Props = {
  id: string;
  label: string;
  icon: keyof typeof icons;
  setValue: (setValue: any) => void;
};

const icons = {
  user,
  email,
  password
};

export const InputIcon = ({ id, label, icon, setValue }: Props) => {
  return (
    <div className="input-wrapper-icon">
      <div className="icon-left">
        <img src={icons[icon]} className="input-icon-left" />
      </div>
      <input
        type="text"
        id={id}
        placeholder=" "
        className="input-icon"
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor="id" className="input-label-icon">
        {label}
      </label>
    </div>
  );
};
