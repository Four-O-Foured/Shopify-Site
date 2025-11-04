import { toast } from "react-toastify";
import { ErrorIcon, InfoIcon, SuccessIcon } from "./Icon";


const CustomToast = ({ message, type }) => (
  <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-lg border border-gray-200 min-w-[300px]">
    {/* Icon */}

    <div>
      {type === "success" ? (
        <SuccessIcon />
      ) : type === "info" ? (
        <InfoIcon />
      ) : (
        <ErrorIcon />
      )}
    </div>

    {/* Message and Actions */}
    <div className="flex-1">
      <div className="text-gray-900 font-medium">{message}</div>
    </div>
  </div>
);



export function showCustomToast(message, type) {
  toast(<CustomToast message={message} type={type} />, {
    className: "p-0", // Remove default padding
    progressClassName: "bg-rose-500 h-2", // Custom progress bar
    closeButton: false, // Optionally hide default close button
  });
}







































