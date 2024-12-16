// hooks/use-toast.ts
import { useState } from "react";

type ToastProps = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  function toast({ title, description, action }: Omit<ToastProps, "id">) {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((toasts) => [...toasts, { id, title, description, action }]);

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
    }, 5000);
  }

  function dismiss(id: string) {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }

  return {
    toasts,
    toast,
    dismiss,
  };
}
