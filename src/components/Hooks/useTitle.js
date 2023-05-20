import { useEffect } from "react";

const useTitle = (title) => {
    return useEffect(() => {
        document.title = `Toy Titans | ${title}`;
    }, [title]);
};

export default useTitle;
