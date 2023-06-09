import { urlForImage } from '@/lib/sanity.image'

const refactorSettings = (data) => {
    return {
        header: {
            logoUrl: {
                url: urlForImage(data.logo).url(),
                alt: data.logo.logoAlt,
                herf: '/',
            },

            headerMenu: data?.menuItems?.map(
                (item) => ({
                    label: item?.title,
                    href: item?.slug,
                })
            ),

            sidebarLink: data?.sidebarLink?.map(
                (item) => ({
                    label: item?.title,
                    href: item?.slug,
                })
            ),

            description: data?.description,
            buttonLabel: {
                label: data.contactButton?.label,
                href: data.contactButton.Page?._ref,
                target: data.contactButton?.target,
            },
            phoneNumber: data.contactInfo?.phoneNumber,
            email: data.contactInfo.email,
            country: data.contactInfo.country,

            socialLink: data?.socialLinks?.map(
                (item) => ({
                    iconName: item.icon,
                    href: item.href,
                    alt: item.name,
                    target: item.target,
                })
            ),
        },
        footer: {
            footerLogo: {
                url: urlForImage(data.logo).url(),
                alt: data.logo.logoAlt,
                href: '/',
            },
            copyRight: data?.copyRight,

            socialLink: data?.socialLinks?.map(
                (item) => ({
                    iconName: item.icon,
                    href: item.href,
                    alt: item.name,
                    target: item.target,
                })
            ),

            footerMenu: data?.footerItems?.map(
                (item) => ({
                    label: item.title,
                    href: item.slug,
                })
            ),

            secondaryMenu: data?.secondaryFooterItems?.map(
                (item) => ({
                    label: item.title,
                    href: item.slug,
                })
            ),
        },

    }
}

export { refactorSettings }