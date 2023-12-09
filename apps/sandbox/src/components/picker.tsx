import cn from "classnames";
import { Pencil1Icon } from "@radix-ui/react-icons";

interface Props {
  event: any;
  colors: string[];
  selected: string;
  openPicker?: () => void;
}

const Picker = ({ openPicker, event, colors, selected }: Props) => {
  return (
    <div className='flex gap-x-2'>
      {colors.map((color) => (
        <button
          key={color}
          type='button'
          onClick={() => event(color)}
          style={{ backgroundColor: color }}
          className={cn(selected === color && "ring-2 ring-white", "w-6 h-6 rounded-full ")}
        />
      ))}

      {/* <button
        type='button'
        onClick={() => openPicker && openPicker()}
        className='bg-gray-100/10 w-6 h-6 rounded-full flex items-center justify-center'
      >
        <Pencil1Icon />
      </button> */}
    </div>
  );
};

export default Picker;
