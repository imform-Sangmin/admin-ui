import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { Icon } from "../Icons";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        const iconType = () => {
          switch (props.variant) {
            case "primary":
              return (
                <Icon
                  type="toastInfo"
                  style={{
                    "--icon-bg": "white",
                    "--icon-symbol": "#0dc69c",
                  }}
                />
              );
            case "success":
              return (
                <Icon
                  type="toastSuccess"
                  style={{
                    "--icon-bg": "var(--states-green)",
                    "--icon-symbol": "white",
                  }}
                />
              );
            case "info":
              return (
                <Icon
                  type="toastInfo"
                  style={{
                    "--icon-bg": "var(--states-blue)",
                    "--icon-symbol": "white",
                  }}
                />
              );
            case "warning":
              return (
                <Icon
                  type="toastWarning"
                  style={{
                    "--icon-bg": "var(--states-orange)",
                  }}
                />
              );
            case "error":
              return (
                <Icon
                  type="toastError"
                  style={{
                    "--icon-bg": "var(--states-red)",
                    "--icon-symbol": "white",
                  }}
                />
              );
            default:
              return;
          }
        };

        return (
          <Toast key={id} {...props}>
            <div className="flex items-center gap-[1.6rem]">
              {iconType()}
              <div className="flex gap-[.4rem] items-center">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
