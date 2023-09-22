import React from "react"; // Import React

type BadgeProps = {
    free: boolean;
};

const Badge: React.FC<BadgeProps> = ({ free }) => {
    return (
        <div className="flex w-32 flex-col items-center justify-center gap-2">
            {free ? (
                <span className="rounded-md bg-neutral-100 shadow-md dark:bg-neutral-900">
                    FREE
                </span>
            ) : (
                <span className="flex w-full items-center justify-center gap-2 rounded-md bg-sky-500/20 p-2 text-sky-500 hover:bg-sky-500/30">
                    PAID
                </span>
            )}
        </div>
    );
};

export default Badge;
