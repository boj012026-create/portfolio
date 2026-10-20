import { Children } from 'react'

interface BulletPointI {
    icon: string,
    children: string
}

export default function BulletPoint({icon, children}: BulletPointI) {
    return (
    <>
        {Children.map(children, (child: string) => (
            <p className="bg-[var(--surface)]"> {icon} {child}</p>
        ))}
    </>
    )
}
