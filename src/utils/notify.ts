import { ToastOptions, toast } from "react-toastify";

const notify = (message: string) => {
    const options: ToastOptions<object> = {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    };
    toast.success(message, options);
};

export default notify;