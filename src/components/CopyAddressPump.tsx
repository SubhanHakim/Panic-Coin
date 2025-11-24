import { useState } from "react";

type CopyAddressPumpProps = {
    address: string;
};

export default function CopyAddressPump({ address }: CopyAddressPumpProps) {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(address);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4 items-center mt-12">
                <div>
                    <span className="uppercase tracking-[0.2em] text-slate-400">Contract Address</span>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-slate-900/80 border border-slate-700 px-4 py-2 text-xs sm:text-sm">
                    <span className="font-mono text-slate-100">
                        {address}
                    </span>
                    <button
                        onClick={handleCopy}
                        className="btn btn-xs sm:btn-sm rounded-full border-none bg-blue-500 text-white font-semibold hover:brightness-110 hover:shadow-blue-800"
                    >
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>
        </>
    );
}
