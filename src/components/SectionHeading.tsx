interface SectionHeadingProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
  badgeColor?: string
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  badgeColor = 'bg-orange-100 text-orange-600',
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title]

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${badgeColor}`}>
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172D63] leading-tight">
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-[#FF7900]">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
