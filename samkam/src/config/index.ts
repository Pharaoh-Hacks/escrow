export const PRODUCT_CATEGORIES = [
    {
        label: "Electronics",
        value: "electronics" as const,
        featured: [
            {
                name: "Electronic Picks",
                href: "#",
                imageSrc: "/nav/electronics/bestsellers.jpg",
            },
             {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/electronics/new.jpg",
            },
              {
                name: "Bestsellers",
                href: "#",
                imageSrc: "/nav/electronics/picks.png",
            },
        ],
    },
     {
        label: "Household-items",
        value: "household-items" as const,
        featured: [
            {
                name: "Favorite Household-items Picks",
                href: "#",
                imageSrc: "/nav/household-items/picks.jpg",
            },
             {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/household-items/new.jpg",
            },
              {
                name: "Bestselling Household-items",
                href: "#",
                imageSrc: "/nav/household-items/bestsellers.jpg",
            },
        ],
    },
]

