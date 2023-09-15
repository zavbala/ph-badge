import { CheckCircledIcon, ExclamationTriangleIcon, InfoCircledIcon } from "@radix-ui/react-icons";

interface Props {
  children?: React.ReactNode;
  type: "info" | "warning" | "danger" | "success";
}

const Variants = {
  info: "bg-gray-300/10",
  danger: "bg-red-300/5 text-red-600",
  warning: "bg-yellow-300/10 text-yellow-600",
  success: "bg-green-100 border-green-500 text-green-700",
};

const Icons = {
  info: <InfoCircledIcon />,
  success: <CheckCircledIcon />,
  danger: <ExclamationTriangleIcon />,
  warning: <ExclamationTriangleIcon />,
};

const Callout = ({ children, type = "info" }: Props) => {
  return (
    <div id='callout' className={`p-5 rounded-md items-center my-4 flex ${Variants[type]}`}>
      <div className='mr-3'>{Icons[type]}</div>
      <p className='text-justify'>{children}</p>
    </div>
  );
};

export default Callout;
