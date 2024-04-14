/* eslint-disable react/prop-types */


export default function SButtonGroup({ className, children }) {
    return (
        <div className={className}>
            <div className="flex items-center gap-y-4">
                {children}
            </div>
        </div>
    )
}