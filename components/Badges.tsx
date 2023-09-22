// import React from "react"; // Import React

type BadgeProps = {
    free: boolean;
};

// Use the correct type for the props parameter and provide a default value for "tp"
const Badge: React.FC<BadgeProps> = ({ free = false }) => {
    // You can remove the conditional check for "tp" since it's not used
    return (
        <div className="flex w-32 flex-col items-center justify-center gap-2">
            {free ? (
                <span className="bg-green-700 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-dark">
                    FREE
                </span>
            ) : (
                <span className="bg-red-700 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-dark">
                    PAID
                </span>
            )}
        </div>
    );
};

export default Badge;
