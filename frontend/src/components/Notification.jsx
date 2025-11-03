import { toast } from "react-toastify";
import { ErrorIcon, InfoIcon, SuccessIcon } from "./Icon";
import { useNavigate } from "react-router-dom";


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

const CustomToastBtn = ({ message, onAction, closeToast, type }) => (
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
      <div className="mt-2 flex gap-2">
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          onClick={() => {
            onAction();
            closeToast();
          }}
        >
          Yes
        </button>
        <button
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm"
          onClick={closeToast}
        >
          Dismiss
        </button>
      </div>
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

export function showCustomToastBtn(message, onAction, type) {
  toast(<CustomToastBtn message={message} onAction={onAction} type={type} />, {
    className: "p-0", // Remove default padding
    progressClassName: "bg-rose-500 h-2", // Custom progress bar
    closeButton: false, // Optionally hide default close button
  });
}
