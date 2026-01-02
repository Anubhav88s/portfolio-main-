'use client'

const WatermarkBlocker = () => {
    return (
        <div
            className="absolute bottom-0 right-0 z-50 w-[160px] h-[80px] bg-black pointer-events-none rounded-tl-2xl border-l border-t border-black"
            aria-hidden="true"
        >
        </div>
    )
}

export default WatermarkBlocker
