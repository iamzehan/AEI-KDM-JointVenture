'use client'

export default function Footer(){
    const data = {
    header: "Innovative Energy Infrastructure That Powers Your Future",
    description: "At AEI + KDM JV, we’re not just developers; we’re partners in Bangladesh’s growth. With global expertise in large-scale energy projects, we deliver solutions that directly benefit households, businesses, and industry."
}
    return (
        <div className="
        flex flex-col gap-3 px-5 py-10
        content-left shadow-lg
        ">
            <p className="text-2xl font-bold">{data.header}</p>
            <p className="text-justify">{data.description}</p>
        </div>
    );
}