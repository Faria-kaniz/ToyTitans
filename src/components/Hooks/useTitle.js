import { useEffect } from "react";

const useTitle = (title) => {
    return useEffect(() => {
        document.title = `ACFTM | ${title}`;
    }, [title]);
};

export default useTitle;
