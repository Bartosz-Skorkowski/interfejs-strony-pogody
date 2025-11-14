import { MenuItem } from "@headlessui/react";

type UnitButtonProps<T> = {
  label: string;
  value: T;
  currentValue: T;
  onClick: (value: T) => void;
};

export function UnitButton<T>({ label, value, currentValue, onClick }: UnitButtonProps<T>) {
  const selected = value === currentValue;

  return (
    <MenuItem>
      {({ active }) => (
        <button
          onClick={() => onClick(value)}
          className={`flex justify-between w-full p-2 rounded-2xl cursor-pointer ${
            selected ? "bg-gray-400" : active ? "bg-gray-500" : ""
          }`}
        >
          {label}
          {selected && (
            <img
              src="src/assets/images/icon-checkmark.svg"
              alt="selected"
              className="w-5 h-5"
            />
          )}
        </button>
      )}
    </MenuItem>
  );
}